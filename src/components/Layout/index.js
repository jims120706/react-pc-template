import React from 'react'
import style from './index.module.scss'
import Menu from '../Menu'

export default class Layout extends React.Component {
  render() {
    return (
      <div className={style['layout']}>
        <Menu />
        <div className={style['router']}>路由</div>
      </div>
    )
  }
}