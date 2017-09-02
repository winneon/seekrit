import React from 'react'
import PropTypes from 'prop-types'

class GitHub extends React.Component {
  render() {
    return <a href={ `https://github.com/${this.props.append}` } target="_blank">{ this.props.children }</a>
  }
}

GitHub.propTypes = {
  append: PropTypes.string,
  children: PropTypes.node.isRequired
}

GitHub.defaultProps = {
  append: ''
}

export default GitHub
