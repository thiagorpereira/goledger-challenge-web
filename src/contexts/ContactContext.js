import React, { useState, createContext } from 'react';

export const ContactContext = createContext();

export function ContactProvider({ children }) {
  const [contacts, setContacts] = useState([]);

  return (
    <ContactContext.Provider value={[contacts, setContacts]}>
      {children}
    </ContactContext.Provider>
  );
}
