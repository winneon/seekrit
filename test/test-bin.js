import { spawn } from 'child_process'
import test from 'ava'

let seekrit

test('check if bin starts server', async () => {
  await new Promise((resolve, reject) => {
    let errors = ''

    function handleSTDOUT(data) {
      const line = data.toString()

      if (line.includes('Listening on port')) {
        resolve()
      }
    }

    function handleSTDERR(data) {
      const line = data.toString()

      console.error(line)
      errors += line
    }

    seekrit = spawn('node', [ './lib/bin/seekrit' ])

    seekrit.stdout.on('data', handleSTDOUT)
    seekrit.stderr.on('data', handleSTDERR)

    seekrit.on('close', () => {
      seekrit.stdout.removeListener('data', handleSTDOUT)
      seekrit.stderr.removeListener('data', handleSTDERR)

      console.error(errors)
      reject()
    })

    seekrit.on('error', err => {
      console.error(err)
      reject()
    })
  })
})

test.afterEach.always('cleanup', () => {
  if (seekrit) {
    seekrit.kill()
  }
})
