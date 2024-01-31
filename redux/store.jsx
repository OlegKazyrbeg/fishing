import { configureStore } from '@reduxjs/toolkit'
import filter from './slices/filterSlice'
import card from './slices/cardSlice'
import getCard from './slices/getSlice'

const persistedState = localStorage.getItem('reduxState')
  ? JSON.parse(localStorage.getItem('reduxState'))
  : {};

export const store = configureStore({
  reducer: {
    filter,
    card,
    getCard,
  },
  preloadedState: persistedState
})

store.subscribe(() => {
  localStorage.setItem('reduxState', JSON.stringify(store.getState()));
});