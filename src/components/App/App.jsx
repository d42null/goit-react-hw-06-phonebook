import { ContactsTitle, Container, Title } from './App.styled';
import { ContactForm } from 'components/ContactForm/ContacForm';
import { ContactList } from 'components/ContactsList/ContactsList';
import { Filter } from 'components/Filter/Filter';
export const App = () => {
  return (
    <Container>
      <Title>Phonebook</Title>
      <ContactForm />
      <ContactsTitle>Contacts</ContactsTitle>
      <Filter />
      <ContactList />
    </Container>
  );
};
