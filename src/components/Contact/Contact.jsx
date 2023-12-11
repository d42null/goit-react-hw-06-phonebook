import { Button, ContactContainer, Name, Number } from './Contact.styled';
import { useDispatch } from 'react-redux';
import { deleteContact } from '../../redux/contactsSlice';
export const Contact = ({ contact }) => {
  const dispatch = useDispatch();
  return (
    <ContactContainer>
      <ContactContainer>
        <Name> {contact.name}: </Name>
        <Number> {contact.number}</Number>
      </ContactContainer>
      <Button
        type="button"
        name="Delete"
        onClick={() => dispatch(deleteContact(contact.id))}
      >
        Delete
      </Button>
    </ContactContainer>
  );
};
