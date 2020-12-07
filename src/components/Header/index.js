import React from 'react'
import style from './index.module.scss'

export default class Header extends React.Component {
  render() {
    return (
      <div className={style['header']}>
        <div className={style['logo']}>logo</div>
        <div className={style['title']}>标题</div>
      </div>
    )
  }
}