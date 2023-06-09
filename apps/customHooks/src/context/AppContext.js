import { createContext, useContext} from 'react';

const AppContext = createContext();

export const AppProvider = ({ children }) => {
    return (
        <AppContext.Provider value={null}>
            { children }
        </AppContext.Provider>
    );
}

const useAppContext = () => useContext();

export default useAppContext;