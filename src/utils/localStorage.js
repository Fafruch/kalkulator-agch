export const loadState = () => {
  try {
    const serializedState = localStorage.getItem('state')
    if (serializedState === null) {
      return undefined
    }
    console.log('State loaded from Local Storage.')
    return JSON.parse(serializedState)
  } catch (err) {
    console.error(err)
    console.warn('State couldn\'t be loaded from Local Storage.')
    return undefined
  }
}

export const saveState = (state) => {
  const serializedState = JSON.stringify(state)
  localStorage.setItem('state', serializedState)
}
