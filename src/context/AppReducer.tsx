const AppReducer = (state: any, action:any) => {
  switch (action?.type) {
    case 'SET_SYSTEM':
      return {...state, system: action?.payload};

    case 'SET_WEIGHT':
      return {...state, weight: action?.payload};

    case 'SET_HEIGHT':
      return {...state, height: action?.payload};

    default:
      return state;
    }
};

export default AppReducer;
