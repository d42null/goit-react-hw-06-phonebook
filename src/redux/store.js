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
const contactsSlice = createSlice({
  name: 'contacts',
  initialState: {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
  },
  reducers: {
    addContact: {
      reducer: (state, action) => {
        state.contacts.push(action.payload);
      },
      prepare: (name, number) => ({
        payload: {
          id: nanoid(),
          name,
          number,
        },
      }),
    },
    deleteContact: (state, action) => {
      state.contacts.splice(
        state.contacts.findIndex(contact => contact.id === action.payload),
        1
      );
    },
  },
});
const filterSlice = createSlice({
  name: 'filter',
  initialState: '',
  reducers: {
    setFilter: (_, action) => action.payload,
  },
});
export const { addContact, deleteContact } = contactsSlice.actions;
export const { setFilter } = filterSlice.actions;
export const getContacts = state => state.contacts.contacts;
export const getFilter = state => state.filter;
const persistContactsConfig = {
  key: 'contacts',
  storage,
};
export const store = configureStore({
  reducer: {
    contacts: persistReducer(persistContactsConfig, contactsSlice.reducer),
    filter: filterSlice.reducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoreActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
