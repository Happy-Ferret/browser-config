
export function changeThemeValue(name, parentName, value) {
  return {
    type: 'CHANGE_THEME_VALUE',
    name,
    parentName,
    value
  }
}

export function changeActiveTab(value) {
  return {
    type: 'CHANGE_ACTIVE_TAB',
    value
  }
}
