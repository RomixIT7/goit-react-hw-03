import ContactForm from "./components/ContactForm/ContactForm";
import SearchBox from "./components/SearchBox/SearchBox";
import ContactList from "./components/ContactList/ContactList";
import { useEffect, useState } from "react";
import contacts from "./data/contacts.json";
import { nanoid } from "nanoid";

function App() {
  const [searchContact, setSearchContact] = useState("");
  const [allContacts, setAllContacts] = useState(() => {
    const stringifiedData = localStorage.getItem("CONTACTS");
    if (!stringifiedData) return contacts;
    const data = JSON.parse(stringifiedData);
    return data;
  });

  useEffect(() => {
    localStorage.setItem("CONTACTS", JSON.stringify(allContacts));
  }, [allContacts]);

  const handleSearch = (e) => {
    setSearchContact(e.target.value);
  };

  const filteredContacts = allContacts.filter((contact) =>
    contact.name.toLowerCase().includes(searchContact.toLowerCase())
  );

  const addContact = (formData) => {
    const newContact = {
      ...formData,
      id: nanoid(),
    };
    setAllContacts((prevContacts) => [...prevContacts, newContact]);
  };

  const deleteContact = (contactId) => {
    setAllContacts((prevContacts) =>
      prevContacts.filter((contact) => contact.id !== contactId)
    );
  };

  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm addContact={addContact} />
      <SearchBox searchContact={searchContact} handleSearch={handleSearch} />
      <ContactList contacts={filteredContacts} deleteContact={deleteContact} />
    </div>
  );
}

export default App;
