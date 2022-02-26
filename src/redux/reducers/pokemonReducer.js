import { ACTION_TYPES } from '../actions/type'

const initialState = {
  list: [],
  error: false,
  loading: false,
}

const ACTION_REDUCER = {
  [ACTION_TYPES.SET_POKEMON]: (state, action) => ({
    ...state,
    list: action.payload,
  }),
  [ACTION_TYPES.SET_LOADING]: (state, action) => ({
    ...state,
    loading: action.payload,
  }),
  [ACTION_TYPES.SET_ERROR]: (state, action) => ({
    ...state,
    error: action.payload,
  }),
}

export const pokemonReducer = (state = initialState, action) => {
  const actionReducer = ACTION_REDUCER[action.type]
  return actionReducer ? actionReducer(state, action) : state
}
