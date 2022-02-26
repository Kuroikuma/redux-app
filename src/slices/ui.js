import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  loading: false,
  error: false,
}

export const uiSlice = createSlice({
  name: 'ui',
  initialState,
  reducers: {
    setError: (state, action) => {
      state.error = action.payload
    },
    toggleLoading: (state) => {
      state.loading = !state.loading
    },
  },
})

export const { setError, toggleLoading } = uiSlice.actions

export default uiSlice.reducer
