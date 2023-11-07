import { createSlice } from '@reduxjs/toolkit';

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: {
    contacts: {
      items: [],
    isLoading: false,
    error: null,
    },
    filter: '',

  },
  reducers: {
    deleteContact: {
      reducer(state, action) {
        console.log(state.contacts);
        state.contacts.items = state.contacts.items.filter(
          contact => contact.id !== action.payload
        );
      },
    },
    addContact: {
      reducer(state, action) {
        state.contacts.items.push(action.payload);
      },
    },
    setFilter: {
      reducer(state, action) {
        state.filter = action.payload;
      },
    },
  },
});
export const contactsReducer = contactsSlice.reducer;
export const { deleteContact, addContact, setFilter } =
  contactsSlice.actions;
