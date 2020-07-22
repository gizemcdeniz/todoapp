import React, { createContext, useReducer } from 'react';
import AppReducer from './AppReducer';

// Initial State
const initialState = {
  tasks: []
}

// Create Context
export const GlobalContext = createContext(initialState);

// Provider Component
export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  // Actions
  const removeTask = (id) => {
    dispatch({
      type: 'REMOVE_TASK',
      payload: id
    })
  }

  const addUser = (task) => {
    dispatch({
      type: 'ADD_TASK',
      payload: task
    })
  }

  const editUser = (task) => {
    dispatch({
      type: 'EDIT_TASK',
      payload: task
    })
  }

  return (
    <GlobalContext.Provider value={{
      tasks: state.tasks,
      removeTask,
      addUser,
      editUser
    }}>
      {children}
    </GlobalContext.Provider>
  )
}


