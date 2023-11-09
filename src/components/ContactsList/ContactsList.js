import { useDispatch, useSelector } from 'react-redux';
import { List, ListItem, ListBtn } from './Contacts.styled';
import { deleteContact } from 'redux/operations';
import { selectFilteredContacts } from 'redux/selectors';
// import { selectContacts } from 'redux/selectors';
// import { selectFilter } from 'redux/selectors';


export const ContactsList = () => {

  
  const dispatch = useDispatch();
  const handleDelete = (id) => { console.log(id); dispatch(deleteContact(id)) }
  
  // const filteredContacts = savedContacts.filter(
  // ({ name }) => name.toLowerCase().includes(savedFilter.toLowerCase())
  // )
  const filteredContacts = useSelector(selectFilteredContacts)


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
