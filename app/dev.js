import Main from './main'

process.env.NODE_ENV = 'development'
global.main = new Main()
