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
}

export const pokemonReducer = (state = initialState, action) => {
  const actionReducer = ACTION_REDUCER[action.type]
  return actionReducer ? actionReducer(state, action) : state
}
