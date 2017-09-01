import Server from './server'

class Main {
  constructor(port) {
    this.server = new Server(port)
  }

  async start() {
    await this.server.init()
      .then(() => {
        console.log(`Listening on port ${this.server.getPort()}.`)
      })
      .catch(err => {
        console.error(err)
      })

    return this
  }
}

export default Main
