import React from 'react';

import { Container, Contact } from './styles';

// eslint-disable-next-line react/prop-types
export default function Contacts() {
  return (
    <Container>
      <header>
        <h1>Contatos</h1>
        <button type="submit" onClick={() => {}}>
          + Novo
        </button>
      </header>

      <Contact>
        <p>Contact 1</p>
      </Contact>

      <Contact>
        <p>Contact 2</p>
      </Contact>

      <Contact>
        <p>Contact 3</p>
      </Contact>
    </Container>
  );
}
