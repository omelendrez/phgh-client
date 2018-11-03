require('dotenv').config()

const CONFIG = {}

CONFIG.app = process.env.APP || 'development'
CONFIG.url = process.env.URL || 'http://localhost:3000/v1/'

export { CONFIG }
