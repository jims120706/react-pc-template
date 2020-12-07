import React from 'react'
import style from './index.module.scss'
import Menu from '../Menu'
import Routes from '../Routes'
import routers from '../../routes'
import { BrowserRouter as Router } from 'react-router-dom'

export default class Layout extends React.Component {
  render() {
    const { token } = this.props
    return (
      <Router>
        <div className={style['layout']}>
          <Menu routes={routers} token={token} />
          <Routes routes={routers} />
        </div>
      </Router>
    )
  }
}