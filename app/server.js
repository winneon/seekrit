import { createServer } from 'http'
import { parse } from 'url'
import next from 'next'

class Server {
  constructor(port) {
    const dev = process.env.NODE_ENV !== 'production'

    this.port = port || 3000
    this.app = next({ dev })
    this.server = undefined
  }

  init() {
    return new Promise((resolve, reject) => {
      this.app.prepare().then(() => {
        this.server = createServer((req, res) => this.app.getRequestHandler()(req, res, parse(req.url, true).pathname))

        this.server.on('error', err => {
          reject(err)
        })

        this.server.listen(this.port, () => {
          resolve(this.server)
        })
      })
    })
  }

  getPort() {
    return this.port
  }

  getApp() {
    return this.app
  }

  getHTTPServer() {
    return this.server
  }
}

export default Server
