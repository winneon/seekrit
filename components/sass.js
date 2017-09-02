import React from 'react'
import stylesheet from '../sass/base.scss'

class Sass extends React.Component {
  render() {
    return <style dangerouslySetInnerHTML={{ __html: stylesheet }} /> // eslint-disable-line react/no-danger
  }
}

export default Sass
