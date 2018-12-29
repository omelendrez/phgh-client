import axios from 'axios'
const { CONFIG } = require('@/config')

const config = {
  baseURL: CONFIG.url
}

const HTTP = axios.create(config)

export { HTTP as default }
