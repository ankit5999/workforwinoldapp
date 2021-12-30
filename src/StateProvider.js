import React, { createContext, useContext, useReducer } from "react";

// Prepare data Layer
export const StateContext = createContext();

//Wrap our App and provide  Data Layer
export const StateProvider = ({ reducer, initialState, children }) => (
  <StateContext.Provider value={useReducer(reducer, initialState)}>
    {children}
  </StateContext.Provider>
);

//Pull Information from the data layer
export const useStateValue = () => useContext(StateContext);
