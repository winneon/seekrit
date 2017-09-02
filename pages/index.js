import React from 'react'
import Head from 'next/head'
import { Button, Progress } from 'reactstrap'
import Sass from '../components/sass'
import GitHub from '../components/github'

class Index extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      disabled: false,
      progress: -1,
      color: 'primary',
      animated: true
    }

    this.handleClick = this.handleClick.bind(this)
  }

  handleClick() {
    this.setState({
      disabled: true,
      progress: 0
    })

    const interval = setInterval(() => {
      if (this.state.progress === 100) {
        clearInterval(interval)
        this.setState({
          disabled: false,
          color: 'success',
          animated: false
        })
      } else {
        this.setState({
          progress: this.state.progress + 1
        })
      }
    }, 20)
  }

  render() {
    return (
      <div className="content">
        <Head>
          <title>seekrit</title>
        </Head>
        <div>
          <Button color={ this.state.color } onClick={ this.handleClick } disabled={ this.state.disabled }>
            <Progress
              animated={ this.state.animated }
              color={ this.state.color }
              value={ this.state.progress }
            />
            { this.state.progress > -1 && this.state.progress < 100 ? this.state.progress : (this.state.progress === 100 ? 'Success!' : 'Upload') }
          </Button>
        </div>
        <footer>
          <GitHub append="winneon/seekrit">seekrit</GitHub>, by <GitHub append="winneon">winneon</GitHub>
        </footer>
        <Sass />
      </div>
    )
  }
}

export default Index
