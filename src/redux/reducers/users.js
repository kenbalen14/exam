import actionTypes from '../actionTypes';


const initialState = {
  users: []
}


export default (state = initialState, action) => {

  switch(action.type) {
    case actionTypes.GET_USER: {
      const users = [...state.users];
      const userData = action.user.data
      userData.map((item, index) => {
          users.push(item);
      })
      
      return {
        users
      }
    }
    case actionTypes.ADD_USER: {
      const users = [...state.users];
      users.push(action.user);
      return {
        users,
      }
    }
    case actionTypes.UPDATE_USER: {
      const { index, user } = action;
      const users = [...state.users];
      users[index] = user;
      return {
        users,
      }
    }
    case actionTypes.DELETE_USER: {
      const { index } = action;
      const users = [];
      state.users.forEach((user, i) => {
        if(index !== i) {
          users.push(user)
        }
      })
      return {
        users,
      }
    }
    default:
      return state;
  }
}
