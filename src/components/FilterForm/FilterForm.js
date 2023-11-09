import { useEffect, useState } from 'react';
import { FilterInput } from './FilterForm.styled';
import { useDispatch, useSelector } from 'react-redux';
import { setFilter } from 'redux/contactsSlice';
import { selectFilter } from 'redux/selectors';

export const FilterForm = () => {
  const [value, setValue] = useState('');
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setFilter(value));
  }, [value, dispatch]);

  const savedFilter = useSelector(selectFilter);

  return (
    <div>
      <p>Find contact by name</p>
      <FilterInput
        onChange={event => {
          setValue(event.target.value);
        }}
        type="text"
        placeholder="Find by name"
        value={savedFilter}
      />
    </div>
  );
};
