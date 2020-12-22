import React, {useReducer, createContext } from 'react';
import AppReducer from './AppReducer';

export interface AppContextInterface {
  system: string;
  weight: number;
  height: number;
  setSystem: Function;
  setWeight: Function;
  setHeight: Function;
};

const initialState: AppContextInterface = {
  system: '',
  weight: 0,
  height: 0,
  setSystem: () => {},
  setWeight: () => {},
  setHeight: () => {},
};

export const AppContext = createContext(initialState);

type Props = {
  children?: any;
};

export const AppStateProvider = ({children}:Props) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  // Action Creators
  const setSystem = (system: string) => {
    dispatch({type: 'SET_SYSTEM', payload: system});
  };

  const setWeight = (weight: number) => {
    dispatch({type: 'SET_WEIGHT', payload: weight});
  };

  const setHeight = (height: number) => {
    dispatch({type: 'SET_HEIGHT', payload: height});
  };

  return (
    <AppContext.Provider value={{...state, setSystem, setWeight, setHeight}}>
      {children}
    </AppContext.Provider>
  );
};
