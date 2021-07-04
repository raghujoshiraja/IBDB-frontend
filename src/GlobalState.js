import React, { createContext } from 'react'
import BookAPI from './api/BookAPI'

export const GlobalState = createContext()

const DataProvider = ({ children }) => {
  
  const state = {
    BookAPI: BookAPI()
  }

  return (
    <GlobalState.Provider value={state}>
      {children}
    </GlobalState.Provider>
  )
}


export default DataProvider