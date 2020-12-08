import React from 'react'
import style from './index.module.scss'
import { connect } from 'react-redux'

class Header extends React.Component {
  render() {
    const { logout } = this.props
    return (
      <div className={style['header']}>
        <div className={style['logo']}>logo</div>
        <div className={style['title']}>标题</div>
        <div onClick={logout}>退出登录</div>
      </div>
    )
  }
}

const mapDispatchToProps = {
  logout: () => {
    return { type: 'CLEAR_TOKEN', module: 'user' }
  },
}

export default connect(
  null,
  mapDispatchToProps,
)(Header)