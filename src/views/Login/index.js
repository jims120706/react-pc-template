import React from 'react'
import style from './index.module.scss'

export default class Login extends React.Component {
  render() {
    return (
      <div className={style['login-container']}>
        <div className={style['login-box']}>
          登录
        </div>
      </div>
    )
  }
}