import React from 'react'
import style from './index.module.scss'

export default class Menu extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <div className={style['menu']}>菜单</div>
    )
  }
}