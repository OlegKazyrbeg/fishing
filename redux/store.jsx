import { configureStore } from '@reduxjs/toolkit'
import filter from './slices/filterSlice'
import card from './slices/cardSlice'
import getCard from './slices/getSlice'

export const store = configureStore({
  reducer: {
    filter,
    card,
    getCard,
  },
})