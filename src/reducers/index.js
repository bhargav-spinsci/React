import { currencyUpdate } from '../actions/index.js';
const initialState = {
    currencies: []
  };
  function rootReducer(state = initialState, action) {
    console.log(`------${action.payload}`)
    if (action.type === currencyUpdate) {
      return {
         ...state, currencies: action.payload
      };
    }
    return state;
  };
  export default rootReducer;