import { createSlice } from '@reduxjs/toolkit';
import { nanoid } from 'nanoid';
const phonebookSlice = createSlice({
  name: 'phonebook',
  initialState: {
    contacts: [],
    filter: '',
  },
  reducers: {
    addContact: {
      reducer: (state, action) => ({
        ...state,
        contacts: [action.payload, ...state.contacts],
      }),
      prepare: (name, number) => ({
        payload: {
          id: nanoid(),
          name,
          number,
        },
      }),
    },
    deleteContact: (state, action) => ({
      ...state,
      contacts: state.contacts.filter(contact => contact.id !== action.payload),
    }),
    setFilter: (state, action) => ({ ...state, filter: action.payload }),
  },
});
export const { addContact, deleteContact, setFilter } = phonebookSlice.actions;
export const  phonebookReducer  = phonebookSlice.reducer;
