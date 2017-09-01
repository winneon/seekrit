import test from 'ava'
import Main from '../app/main'

let main
let invalidMain

test.before('set up servers', async () => {
  main = await new Main(12345).start()

  // This line only works when tests are not run as root.
  invalidMain = await new Main(80).start()
})

test('server is listening', async t => {
  await t.true(main.server.getHTTPServer().listening)
})

test('server fails to listen', async t => {
  await t.false(invalidMain.server.getHTTPServer().listening)
})
