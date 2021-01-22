import actionTypes from '../actionTypes';

export default {
  getUser: (user)=> ({
    type: actionTypes.GET_USER,
    user
  }),
  addUser: (user)=> ({
    type: actionTypes.ADD_USER,
    user
  }),
  updateUser: (index, user) => ({
    type: actionTypes.UPDATE_USER,
    index,
    user,
  }),
  deleteUser: (index) => ({
    type: actionTypes.DELETE_USER,
    index
  })
}
