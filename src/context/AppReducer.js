export default (state, action) => {
    switch (action.type) {
      case 'REMOVE_TASK':
        return {
          ...state,
          tasks: state.tasks.filter(task => {
            return task.id !== action.payload;
          })
        }
      case 'ADD_TASK':
        return {
          ...state,
          tasks: [action.payload, ...state.tasks]
        }
      case 'EDIT_TASK':
        const updateUser = action.payload;
  
        const updateUsers = state.tasks.map(task => {
          if (task.id === updateUser.id) {
            return updateUser;
          }
          return task;
        })
        return {
          ...state,
          tasks: updateUsers
        }
  
      default:
        return state;
    }
  }