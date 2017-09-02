import Server from './server'

class Main {
  constructor(port) {
    this.server = new Server(port)
  }

  async start() {
    try {
      await this.server.init()
      console.log(`> Listening on port ${this.server.getPort()}.`)
    } catch (err) {
      console.error(err)
    }

    return this
  }
}

export default Main
