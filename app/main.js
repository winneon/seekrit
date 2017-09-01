import Server from './server'

class Main {
  constructor(){
    this.server = new Server()

    this.server.init()
      .then(() => {
        console.log(`Listening on port ${this.server.port}.`)
      })
      .catch((err) => {
        console.error(err)
      })
  }
}

export default Main
