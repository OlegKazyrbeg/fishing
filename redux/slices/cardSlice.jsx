import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  totalPrice: 0,
  items: []
}

const configurePrice = (state) => {
  state.totalPrice = state.items.reduce((sum, obj) =>{
    return (obj.price * obj.count) + sum;
}, 0)
}

export const cartSlice = createSlice({
  name: 'card',
  initialState,
  reducers: {
    addItem(state, action) {
        const findItem = state.items.find(obj => obj.id === action.payload.id)

        if (findItem) {
            findItem.count++
        } else {
            state.items.push({...action.payload, count: 1})
        }
        configurePrice(state)
    },
    minusItem(state, action) {
      const findItem = state.items.find(obj => obj.id === action.payload)

      if (findItem){
        findItem.count--
        configurePrice(state)
      }

      if (findItem.count < 1){
        state.items = state.items.filter(obj => obj.id !== action.payload)
      }
    },
    removeItem(state, action) {
        state.items = state.items.filter(obj => obj.id !== action.payload)
        configurePrice(state)
    },
    clearItem(state) {
        state.items = []
        state.totalPrice = 0
    }
  },
})

export const { addItem, removeItem, clearItem, minusItem } = cartSlice.actions

export default cartSlice.reducer