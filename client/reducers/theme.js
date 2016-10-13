function theme (state = [], action) {
  let nextState = [];
  let nextTheme = [];
  switch (action.type) {
    case 'CHANGE_THEME_VALUE':
      let placeHolder = state[0][action.themeComponentIndex];
      nextState = [ ...state ];
      placeHolder[action.name] = action.value;
      nextState[0].parent = [ ...placeHolder ];
      return nextState;
    case 'ADD_THEME':
      nextState = JSON.parse(JSON.stringify(state))
      nextState.push([ ...action.newTheme ]);
      console.log(JSON.stringify(action.newTheme));
      return nextState;
    case 'SWITCH_THEME':
      nextState = Array.from(state);
      nextTheme = JSON.parse(JSON.stringify(state[action.index], null, '\t'))
      nextState[0] = nextTheme;
      return nextState;
    default: 
      return state;
  }
}

export default theme;


function clone(obj) {
  if (null == obj || 'object' != typeof obj) return obj;
  let copy = obj.constructor();
  for (let attr in obj) {
      if (obj.hasOwnProperty(attr)) copy[attr] = obj[attr];
  }
  return copy;
}
