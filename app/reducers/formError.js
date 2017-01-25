import { SET_FORM_ERROR } from './actions/constants'

// in the store, this will be called 'alert'
const formErrorReducer = (formError = '', action) => {

  switch (action.type) {

    case SET_FORM_ERROR: return action.formError

    default: return formError
  }
}

export default formErrorReducer
