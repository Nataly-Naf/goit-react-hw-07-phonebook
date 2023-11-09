import { useDispatch, useSelector } from 'react-redux';
import { List, ListItem, ListBtn } from './Contacts.styled';
import { deleteContact } from 'redux/operations';
import { getContacts } from 'redux/selectors';
import { getFilter } from 'redux/selectors';



export const ContactsList = () => {
  const savedContacts = useSelector(getContacts);
  const savedFilter = useSelector(getFilter);
  
  const dispatch = useDispatch();
  const handleDelete = (id) => { console.log(id); dispatch(deleteContact(id)) }
  
  const filteredContacts = savedContacts.filter(
  ({ name }) => name.toLowerCase().includes(savedFilter.toLowerCase())
  )


  return (
    <List>
      {filteredContacts.map(contact => {
        return (
          <ListItem key={contact.id}>
            {contact.name} {contact.number}
            <ListBtn onClick={() => dispatch(handleDelete(contact.id))}>
              Delete
            </ListBtn>{' '}
          </ListItem>        );
      })}
    </List>
  );
};
