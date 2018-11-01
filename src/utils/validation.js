const rules = {
  required: v => !!v || 'Required',
  min: v => v.length >= 6 || 'Min 6 characters',
  isEmail: v => /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(v) || 'E-mail must be valid',
  isPhone: v => /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/.test(v) || 'Phone number is not valid',
  equal: (v, y) => v === y || 'Passwords don\'t match'
}

export { rules }