import { Button, Error, FormContainer, Label } from './ContactForm.styled';
import { useDispatch, useSelector } from 'react-redux';
import { addContact, getContacts } from '../../redux/store';
export const ContactForm = () => {
  const contacts = useSelector(getContacts);
  const dispatch = useDispatch();
  const onSubmit = e => {
    e.preventDefault();
    if (contacts.find(c => c.name === e.target.name.value)) {
      alert(`${e.target.name} is already in contacts`);
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
        <Error />
      </Label>
      <Label>
        Number
        <input type="tel" name="number" required />
        <Error />
      </Label>
      <Button type="submit">Add contact</Button>
    </FormContainer>
  );
};
