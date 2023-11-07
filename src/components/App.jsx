import { ContactsList } from './ContactsList/ContactsList';
import { FilterForm } from './FilterForm/FilterForm';
import { NameForm } from './NameForm/NameForm';

export const App = () => {
  return (
    <div>
      <NameForm />
      <FilterForm />
      <ContactsList />
    </div>
  );
};
