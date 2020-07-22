import React, {createContext, useReducer} from'react';
import AddReducer from './AddReducer';

//Initial State 
const initialState = {
    users: []
}

//Create Context
export const GlobalContext = createContext(initialState);

// Provider Component
export const GlobalProvider = ({children}) => {

    const [state, dispacth] = useReducer(AddReducer, initialState);

    //Actions
    const removeTask = (id) => {
        dispacth ({
            type: 'REMOVE_TASK',
            payload: id
        })
    }

    return (
        <GlobalContext.Provider value ={{
            users: state.users,
            removeTask
        }}>
            {children}
        </GlobalContext.Provider>
    )
}
    


