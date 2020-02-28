import React, { useEffect, useContext, useState } from 'react';
import { MdDeleteForever } from 'react-icons/md';
import { FaSpinner } from 'react-icons/fa';
import api from '../../services/api';
import { ContactContext } from '../../contexts/ContactContext';

import { Container, Header, Contact, ListContact, MenuContact } from './styles';
import AddContactModal from '../../components/AddContactModal';
import UpdateContactModal from '../../components/UpdateContactModal';

// snippet: rfc
export default function Main() {
  const [contacts, setContacts] = useContext(ContactContext);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    async function loadDevs() {
      const response = await api.post('/search', {
        selector: {
          '@assetType': 'contact',
        },
      });

      // console.log(response.data.result);
      setContacts(response.data.result);
    }

    loadDevs();
  }, []);

  async function handleDelete(contact) {
    setLoading(true);
    const { name } = contact;
    console.log(name);
    const data = {
      '@assetType': 'contact',
      name,
    };
    await api
      .delete('/delete', {
        data,
      })
      .then(resp => {
        console.log(resp.data);
        setContacts(prevContacts =>
          prevContacts.filter(item => item.name !== name)
        );
        // setContacts(prevContacts => [resp.data, ...prevContacts]);
      })
      .catch(error => {
        console.log(error.response);
      });
    setLoading(false);
  }

  return (
    <Container>
      <Header>
        <h1>Contatos</h1>
        <AddContactModal />
      </Header>

      <ListContact loading={loading}>
        {loading ? (
          <FaSpinner color="#FFF" size={14} />
        ) : (
          contacts.map(contact => (
            <Contact key={contact.name}>
              <header>
                <strong>{contact.name}</strong>
                <span>{contact.phone}</span>
                <MenuContact>
                  <UpdateContactModal contact={contact} />
                  <MdDeleteForever
                    onClick={() => handleDelete(contact)}
                    size={20}
                    className="delete"
                  />
                </MenuContact>
              </header>
              <p>{contact.email}</p>
              <p>{contact.company}</p>
              <p>Idade: {contact.age}</p>
            </Contact>
          ))
        )}
      </ListContact>
    </Container>
  );
}
