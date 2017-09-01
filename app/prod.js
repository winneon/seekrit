import Main from './main'

process.env.NODE_ENV = 'production'
global.main = new Main()
