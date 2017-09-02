import React from 'react'

class GitHub extends React.Component {
  render() {
    return <a href={ `https://github.com/${this.props.append}` } target='_blank'>{ this.props.children }</a>
  }
}

export default GitHub
