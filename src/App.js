// import { useState,useEffect } from "react";
// import Section from "./components/Section";
// import Container from "./components/Container";
// import ContactForm from "./components/ContactForm";
// import ContactList from "./components/ContactList";
// import Filter from "./components/Filter";
// import shortid from "shortid";


import Container from './components/Container';
import ContactList from './components/ContactList';
import Filter from './components/Filter';
import ContactForm from './components/ContactForm';

// const initialState = [
//   { id: "id-1", name: "Rosie Simpson", number: "380950254596" },
//   { id: "id-2", name: "Hermione Kline", number: "380950254436" },
//   { id: "id-3", name: "Eden Clements", number: "380950256456" },
//   { id: "id-4", name: "Annie Copeland", number: "380950252276" },
// ];

// export default function App () {
//   const [contacts, setContacts] = useState(JSON.parse(window.localStorage.getItem('contacts')) ?? initialState);
//   const [filter, setFilter] = useState('');
  
//   useEffect(() => {
//     window.localStorage.setItem("contacts", JSON.stringify(contacts));
//   }, [contacts]);

// const addContact = (name, number) => {
//   const duplicate = contacts.some((contact) => contact.name === name);
//     if (duplicate) {
//       alert('Такой контакт уже существует!');
//     } else {
//       const contact = {
//         name,
//         number,
//         id: shortid.generate(),
//       };

//       setContacts((prevState) => [contact, ...prevState]);
//     }
//   };

//   const changeFilter = (e) => {
//     setFilter(e.currentTarget.value);
//   };

//   const deleteContact = (e) => {
//     setContacts((prevState) => (prevState.filter((contact) => contact.id !== e)));
//   };
  
//   const visibleContact = () => {
//     const noramalizesFilter = filter.toLowerCase();
//     return contacts.filter((contact) =>
//       contact.name.toLowerCase().includes(noramalizesFilter));
//   }

//   return (
//     <Section>
//       <Container>
//         <ContactForm onSubmit={addContact} />
//       </Container>
//       <Container>
//         <Filter value={filter} onChange={changeFilter} />
//       </Container>
//       <Container>
//         <ContactList
//           contacts={visibleContact()}
//           deleteContact={deleteContact}
//         />
//       </Container>
//     </Section>
//   );
// }

export default function App() {

  return (
    <>
       <Container>
      <ContactForm />
      <Filter />
        <ContactList />
      </Container>
    </>
  );
}