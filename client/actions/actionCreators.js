
export function changeThemeValue(name, themeComponentIndex, value) {
  return {
    type: 'CHANGE_THEME_VALUE',
    name,
    themeComponentIndex,
    value
  }
}

export function createTheme(newTheme) {
  return {
    type: 'ADD_THEME',
    newTheme
  }
}

export function changeTheme(index) {
  return {
    type: 'SWITCH_THEME',
    index
  }
}

export function changeActiveTab(value) {
  return {
    type: 'CHANGE_ACTIVE_TAB',
    value
  }
}
