import {createContext} from 'react';

export const AppContext = createContext();
// Create a context for the app
// This context will be used to provide global state and functions to the app
// It will be used to manage the state of the app and provide functions to update the state
export const AppContextProvider = ({children}) => {
    const value = {
        // Add any state or functions you want to provide to the app here
    }
    // The value that will be provided to the app
    // This can be an object with state and functions
    // The value will be passed to the AppContext.Provider component
    // The value will be passed to all components that are wrapped in the AppContext.Provider
    return (
        <AppContext.Provider value={value}>
            {children}
        </AppContext.Provider>
    )
}