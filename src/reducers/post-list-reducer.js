export default (state = {}, action) => {
  const { username, subject, message, id } = action;
  switch (action.type) {
    case 'ADD_POST':
      return Object.assign({}, state, {
        [id]: {
          username: username,
          subject: subject,
          message: message,
          id: id
        }
      });
    case 'DELETE_POST':
      let newState =  {...state};
      delete newState[id];
      return newState;
    default:
      return state;
  }
};

  