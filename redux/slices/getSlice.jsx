import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

export const fetchItems = createAsyncThunk(
    'getCard/fetchItemsStatus',
    async (params) => {
        const { category, categoryType } = params
        const { data } = await axios.get(`http://localhost:3001/items?${category}`)
        return data
    },
  )

const initialState = {
  items: []
}

export const getSlice = createSlice({
  name: 'getCard',
  initialState,
  reducers: {
    getCards(state, actions){
        state.items = actions.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchItems.fulfilled, (state, actions) => {
      state.items = actions.payload
    }),
    builder.addCase(fetchItems.rejected, (state) => {
        state.items = []
      })
  },
})

export const { getCards } = getSlice.actions

export default getSlice.reducer