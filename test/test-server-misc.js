import { Server as HTTPServer } from 'http'
import test from 'ava'
import NextServer from 'next/dist/server'
import Server from '../app/server'

let server

test.before('set up server', async () => {
  server = new Server()
  await server.init()
})

test('get server port', t => {
  t.is(server.getPort(), 3000)
})

test('get server app', t => {
  if (server.getApp() instanceof NextServer) {
    t.pass()
  } else {
    t.fail()
  }
})

test('get server itself', t => {
  if (server.getHTTPServer() instanceof HTTPServer) {
    t.pass()
  } else {
    t.fail()
  }
})
