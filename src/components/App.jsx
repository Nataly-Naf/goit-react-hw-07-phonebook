import { useEffect } from 'react';
import { ContactsList } from './ContactsList/ContactsList';
import { FilterForm } from './FilterForm/FilterForm';
import { NameForm } from './NameForm/NameForm';
import { useDispatch, useSelector } from 'react-redux';
import { fetchContacts } from 'redux/operations';
import { selectError, selectIsLoading } from 'redux/selectors';

export const App = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <div>
      <NameForm />
      <FilterForm />
      {isLoading && !error && <b>Loading in progress...</b>}
      <ContactsList />
    </div>
  );
};
