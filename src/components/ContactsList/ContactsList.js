import { useDispatch, useSelector } from 'react-redux';
import { List, ListItem, ListBtn } from './Contacts.styled';
import { deleteContact } from 'redux/contactsSlice';
import { getContacts } from 'redux/selectors';
import { getFilter } from 'redux/selectors';



export const ContactsList = () => {
  const savedContacts = useSelector(getContacts);
  const savedFilter = useSelector(getFilter);
  
  const dispatch = useDispatch();
  const filteredContacts = savedContacts.filter(
  ({ name }) => name.toLowerCase().includes(savedFilter.toLowerCase())
  )

  // const contacts = useSelector(selectFilteredContacts);

  return (
    <List>
      {filteredContacts.map(contact => {
        return (
          <ListItem key={contact.id}>
            {contact.name} {contact.number}
            <ListBtn onClick={() => dispatch(deleteContact(contact.id))}>
              Delete
            </ListBtn>{' '}
          </ListItem>
        );
      })}
    </List>
  );
};
