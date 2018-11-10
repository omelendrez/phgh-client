export const saveValue = (item, value) => {
  let error = 0
  const localStorage = window.localStorage
  error = !localStorage ? 1 : 0
  if (!error) {
    localStorage.setItem(item, value)
  }
}

export const getValue = (item) => {
  let error = 0
  const localStorage = window.localStorage
  error = !localStorage ? 1 : 0
  if (!error) {
    return localStorage.getItem(item)
  }
}

