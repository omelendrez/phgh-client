require('dotenv').config()

const CONFIG = {}

CONFIG.app = process.env.APP || 'dev'
CONFIG.url = process.env.URL || 'http://localhost:3000/v1/'

module.exports = CONFIG
