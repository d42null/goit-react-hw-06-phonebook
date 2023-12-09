import { configureStore, createSlice } from '@reduxjs/toolkit';
import persistReducer from 'redux-persist/es/persistReducer';
import persistStore from 'redux-persist/es/persistStore';
import storage from 'redux-persist/lib/storage';
import {
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import { nanoid } from 'nanoid';
const contactsInitialState = [
  { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
  { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
  { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
  { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
];
const phonebookSlice = createSlice({
  name: 'phonebook',
  initialState: {
    contacts: contactsInitialState,
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
export const getContacts = state => state.phonebook.contacts;
export const getFilter = state => state.phonebook.filter;
const persistConfig = {
  key: 'phonebook',
  storage,
};
export const store = configureStore({
  reducer: {
    phonebook: persistReducer(persistConfig, phonebookSlice.reducer),
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoreActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
