import React, { useState, useContext, useEffect } from 'react';
import Modal from 'react-modal';
import { FaSpinner } from 'react-icons/fa';
import { MdEdit } from 'react-icons/md';
import api from '../../services/api';
import { ContactContext } from '../../contexts/ContactContext';

import { Container, customStyles, ButtonSave, ButtonCancel } from './styles';

Modal.setAppElement('#root');

function UpdateContactModal({ contact }) {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [company, setCompany] = useState('');
  const [email, setEmail] = useState('');
  const [age, setAge] = useState();

  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [contacts, setContacts] = useContext(ContactContext);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setName(contact.name);
    setPhone(contact.phone);
    setCompany(contact.phone);
    setEmail(contact.email);
    setAge(contact.age);
  }, []);

  async function handleAdd(e) {
    e.preventDefault();

    setLoading(true);

    console.log(name, phone, company, email, age);
    const ageNumber = Number(age);
    const response = await api
      .put('/update', {
        '@assetType': 'contact',
        name,
        phone,
        company,
        email,
        age: ageNumber,
      })
      .then(resp => {
        console.log(resp.data);
        setContacts(prevContacts => [resp.data, ...prevContacts]);
        // setMovies(prevMovies => [{ name: name, price: price, id: 3656 }, ...prevMovies ]);
      })
      .catch(error => {
        console.log(error.response);
      });

    console.log(name, phone, company, email, age);

    console.log(response);
    setName('');
    setPhone('');
    setCompany('');
    setEmail('');
    setAge('');
    console.log(response);

    setLoading(false);
    setModalIsOpen(false);
  }

  return (
    <>
      <MdEdit className="update" onClick={() => setModalIsOpen(true)} />
      <Modal
        style={customStyles}
        isOpen={modalIsOpen}
        shouldCloseOnOverlayClick={false}
        onRequestClose={() => setModalIsOpen(false)}
      >
        <Container>
          <h1>Editar contato</h1>

          <form onSubmit={handleAdd}>
            <label htmlFor="name">
              Name
              <input
                name="name"
                id="name"
                value={name}
                onChange={e => setName(e.target.value)}
                required
              />
            </label>

            <label htmlFor="phone">
              Telefone
              <input
                name="phone"
                id="phone"
                value={phone}
                onChange={e => setPhone(e.target.value)}
                required
              />
            </label>

            <label htmlFor="company">
              Company
              <input
                name="company"
                id="company"
                value={company}
                onChange={e => setCompany(e.target.value)}
                required
              />
            </label>

            <label htmlFor="email">
              Email
              <input
                name="email"
                id="email"
                value={email}
                onChange={e => setEmail(e.target.value)}
                required
              />
            </label>

            <label htmlFor="age">
              Idade
              <input
                name="age"
                id="age"
                value={age}
                onChange={e => setAge(e.target.value)}
                required
              />
            </label>

            <ButtonSave loading={loading}>
              {loading ? (
                <FaSpinner color="#FFF" size={14} />
              ) : (
                <spam> Salvar </spam>
              )}
            </ButtonSave>
            <ButtonCancel type="button" onClick={() => setModalIsOpen(false)}>
              Cancelar
            </ButtonCancel>
          </form>
        </Container>
      </Modal>
    </>
  );
}

export default UpdateContactModal;
