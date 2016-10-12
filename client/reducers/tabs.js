function tabs (state = [], action) {
  switch (action.type) {
    case 'CHANGE_ACTIVE_TAB':
      const i = action.value;
      let nextState = [];
      for(let i = 0; i < state.length; i++) {
        nextState.push(0);
      }
      nextState[i] = 1;
      return nextState;
    default: 
      return state;
  }
}

export default tabs;
