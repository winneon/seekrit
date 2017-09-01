import { createServer } from 'http'
import { parse } from 'url'
import next from 'next'

class Server {
  constructor(){
    let dev = process.env.NODE_ENV !== 'production'

    this.port = parseInt(process.env.PORT, 10) || 3000
    this.app = next({ dev })
  }

  init(){
    return new Promise((resolve, reject) => {
      this.app.prepare().then(() => {
        createServer((req, res) => this.app.getRequestHandler()(req, res, parse(req.url, true).pathname))
          .listen(this.port, (err) => {
            if (err){
              throw err
            }

            resolve()
          })
      })
    })
  }
}

export default Server
