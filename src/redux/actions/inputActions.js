import actionTypes from '../actionTypes';

export default {
  setInputName: name => ({
    type: actionTypes.SET_INPUT_NAME,
    name,
  }),
  setInputEmail: email => ({
    type: actionTypes.SET_INPUT_EMAIL,
    email
  }),
  setInputBody: body => ({
    type: actionTypes.SET_INPUT_BODY,
    body
  }),
  setInputId: id => ({
    type: actionTypes.SET_INPUT_ID,
    id,
  }),
  resetInputs: () => ({
    type: actionTypes.RESET_INPUT,
  })
}
