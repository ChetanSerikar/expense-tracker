import React, {createContext, useReducer} from "react";
import AppReducer from './AppReducer'

//Initial State
const initialState = {
    transcations : [
          { id: 1, text: 'Flower', amount: -20 },
          { id: 2, text: 'Salary', amount: 300 },
          { id: 3, text: 'Book', amount: -10 },
          { id: 4, text: 'Camera', amount: 150 }
        ]
}

//Create constext
export const GlobalContext = createContext(initialState);

//Provider component

export const GlobalProvider = ({ children }) => {
  const [ state , dispatch ] = useReducer(AppReducer , initialState);

  function deleteTranscation(id) {
    dispatch({
      type : 'DELETE_TRANSACTION',
      payload :id
    });
  }
  function addTranscation(id) {
    dispatch({
      type : 'ADD_TRANSACTION',
      payload :id
    });
  }
   return (<GlobalContext.Provider value={{
    transcations : state.transcations,
    deleteTranscation,
    addTranscation
   }}>
    {children}
   </GlobalContext.Provider>)
}