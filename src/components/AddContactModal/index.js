import React, { useState, useContext } from 'react';
import Modal from 'react-modal';
import { FaSpinner } from 'react-icons/fa';
import api from '../../services/api';
import { ContactContext } from '../../contexts/ContactContext';

import {
  Container,
  customStyles,
  ButtonSave,
  ButtonCancel,
  ButtonNovo,
} from './styles';

Modal.setAppElement('#root');

function AddContactModal() {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [company, setCompany] = useState('');
  const [email, setEmail] = useState('');
  const [age, setAge] = useState();

  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [contacts, setContacts] = useContext(ContactContext);
  const [loading, setLoading] = useState(false);

  async function handleAdd(e) {
    e.preventDefault();

    setLoading(true);

    console.log(name, phone, company, email, age);
    const ageNumber = Number(age);
    const response = await api
      .post('/create', {
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
      <ButtonNovo type="button" onClick={() => setModalIsOpen(true)}>
        + Novo
      </ButtonNovo>
      <Modal
        style={customStyles}
        isOpen={modalIsOpen}
        shouldCloseOnOverlayClick={false}
        onRequestClose={() => setModalIsOpen(false)}
      >
        <Container>
          <h1>Criar contato</h1>

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

export default AddContactModal;
