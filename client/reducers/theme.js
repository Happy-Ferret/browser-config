function theme (state = [], action) {
  switch (action.type) {
    case 'CHANGE_THEME_VALUE':
      let placeHolder = state[0][action.parentName];
      let tempState = [];
      tempState.push(Object.assign({},state[0]));
      placeHolder[action.name] = action.value;
      tempState[0].parent = placeHolder;
      return tempState;
    default: 
      return state;
  }
}

export default theme;
