import React, { createContext, useState } from 'react';
import ES_ENG from './Utils/ES_ENG.json'

export const AppContext = createContext();

export const AppContextProvider = ({children}) => {
    const [english, setEnglish] = useState(false)
    const [savedIndex, setSavedIndex] = useState(0)

    const t = ( property ) => {
      return ES_ENG.hasOwnProperty( property ) && english ? ES_ENG[property] : property
    }

    return (
        <AppContext.Provider
          value={{
            english,
            setEnglish,
            savedIndex,
            setSavedIndex,
            t
          }}
        >
          {children}
        </AppContext.Provider>
      );
}