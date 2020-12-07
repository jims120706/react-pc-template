import React from 'react'
import style from './index.module.scss'
import { connect } from 'react-redux'

class Login extends React.Component {
  constructor(props) {
    super(props)
    const { history } = this.props
    const token = sessionStorage.getItem('token') || ''
    if(token) {
      history.replace('/page1')
    }
  }
  login = () => {
    const { login, history } = this.props
    console.log('this.props', this.props)
    login('123456')
    history.push('/page1')
  }
  render() {
    return (
      <div className={style['login-container']}>
        <div className={style['login-box']}>
          <button onClick={this.login}>登录</button>
        </div>
      </div>
    )
  }
}

const mapDispatchToProps = {
  login: (value = '') => {
    return { type: 'SET_TOKEN', module: 'user', value }
  },
}

export default connect(
  null,
  mapDispatchToProps,
)(Login)