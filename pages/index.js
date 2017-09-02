import React from 'react'
import Head from 'next/head'
import { Button } from 'reactstrap'
import Sass from '../components/sass'
import GitHub from '../components/github'

export default () => (
  <div className='content'>
    <Head>
      <title>seekrit</title>
    </Head>
    <div>
      <Button color='primary'>Upload</Button>
    </div>
    <footer>
      <GitHub append='winneon/seekrit'>seekrit</GitHub>, by <GitHub append='winneon'>winneon</GitHub>
    </footer>
    <Sass />
  </div>
)
