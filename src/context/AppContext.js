import { createContext, useContext } from 'react';
import { useInitialState } from '@hooks/index';

const AppContext = createContext();

export const AppWrapper = ({ children }) => {
  const initialState = useInitialState();
  return <AppContext.Provider value={initialState}>{children}</AppContext.Provider>;
};

export const useAppContext = () => {
  return useContext(AppContext);
};
