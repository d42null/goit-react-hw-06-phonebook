import { Contact } from 'components/Contact/Contact';
import { useSelector } from 'react-redux';
import { getContacts, getFilter } from '../../redux/selectors';
const getVisibleContacts = (contactsFilter, contacts) => {
  return contactsFilter
    ? contacts.filter(
        c =>
          c.name.toLowerCase().includes(contactsFilter) ||
          c.number.toLowerCase().includes(contactsFilter)
      )
    : contacts;
};
export const ContactList = () => {
  const contacts = useSelector(getContacts);
  const filter = useSelector(getFilter);
  const visibleContacts = getVisibleContacts(filter, contacts);

  return (
    <ul>
      {visibleContacts.map(contact => (
        <li key={contact.id}>
          <Contact key={contact.id} contact={contact} />
        </li>
      ))}
    </ul>
  );
};
