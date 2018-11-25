import axios from 'axios'
const { CONFIG } = require('@/config')

const config = {
  baseURL: CONFIG.url
}

const token = localStorage.getItem('token')
if (token) {
  Object.assign(config, { headers: { Authorization: token } })
}

const HTTP = axios.create(config)

export { HTTP as default }
