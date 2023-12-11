import { Button, FormContainer, Label } from './ContactForm.styled';
import { useDispatch, useSelector } from 'react-redux';
import { addContact } from '../../redux/contactsSlice';
import { getContacts } from '../../redux/selectors';
export const ContactForm = () => {
  const contacts = useSelector(getContacts);
  const dispatch = useDispatch();
  const onSubmit = e => {
    e.preventDefault();
    if (contacts.find(c => c.name === e.target.name.value)) {
      alert(`${e.target.name.value} is already in contacts`);
      return;
    }
    dispatch(addContact(e.target.name.value, e.target.number.value));
    e.target.reset();
  };
  return (
    <FormContainer onSubmit={onSubmit}>
      <Label>
        Name
        <input type="text" name="name" required />
      </Label>
      <Label>
        Number
        <input type="tel" name="number" required />
      </Label>
      <Button type="submit">Add contact</Button>
    </FormContainer>
  );
};
