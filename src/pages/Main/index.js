import React, { useState, useEffect } from 'react';
import api from '../../services/api';

import { Container, Header, Contact, ListContact } from './styles';

// snippet: rfc
export default function Main() {
  const [contacts, setContact] = useState([]);

  useEffect(() => {
    async function loadDevs() {
      const response = await api.post('/search', {
        selector: {
          '@assetType': 'contact',
        },
      });

      console.log(response.data.result);
      setContact(response.data.result);
    }

    loadDevs();
  }, []);
  return (
    <Container>
      <Header>
        <h1>Contatos</h1>
        <button type="submit" onClick={() => {}}>
          + Novo
        </button>
      </Header>

      <ListContact>
        {contacts.map(contact => (
          <Contact>
            <header>
              <strong>{contact.name}</strong>
              <span>{contact.phone}</span>
            </header>
            <p>{contact.email}</p>
            <p>{contact.company}</p>
            <p>{contact.age}</p>
          </Contact>
        ))}
      </ListContact>

      {/*
       <h1>
      //   Contatos
      // </h1>
      // <main>
      //   <ul>
      //     {contacts.map(contact => (
      //       <li className="contact-item">
      //         <header>
      //           <strong>{contact.name}</strong>
      //           <span>{contact.phone}</span>
      //         </header>
      //         <p>{contact.email}</p>
      //         <p>{contact.company}</p>
      //         <p>{contact.age}</p>
      //       </li>
      //     ))}
      //   </ul>
      // </main> */}

      {/*
      <Form onSubmit={this.handleSubmit} error={error}>
        <input
          type="text"
          placeholder="Adicionar Repositório"
          value={newRepo}
          onChange={this.handleInputChange}
        />
        <SubmitButton loading={loading}>
          {loading ? (
            <FaSpinner color="#FFF" size={14} />
          ) : (
            <FaPlus color="#FFF" size={14} />
          )}
        </SubmitButton>
      </Form>

      <List>
        {repositories.map(repository => (
          <li key={repository.name}>
            <span>{repository.name}</span>
            <Link to={`/repository/${encodeURIComponent(repository.name)}`}>
              Detalhes
            </Link>
          </li>
        ))}
      </List> */}
    </Container>
  );
}
