import React from 'react'
import style from './index.module.scss'
import Menu from '../Menu'
import Routes from '../Routes'
import routers from '../../routes'
import { BrowserRouter as Router } from 'react-router-dom'

export default class Layout extends React.Component {
  render() {
    return (
      <Router>
        <div className={style['layout']}>
          <Menu routes={routers} />
          <Routes routes={routers} />
        </div>
      </Router>
    )
  }
}