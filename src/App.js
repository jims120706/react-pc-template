import React from 'react'
import style from './App.module.scss';
import Header from './components/Header/index'
import Layout from './components/Layout/index'
import Footer from './components/Footer/index'
import { connect } from 'react-redux'

class App extends React.Component {
  constructor(props) {
    super(props)
    const { getTokenFromCache } = this.props
    getTokenFromCache()
  }
  render() {
    const { token } = this.props
    console.log('render', token)
    return (
      <div className={style['main-container']}>
        {token && <Header />}
        <Layout token={token} />
        {token && <Footer />}
      </div>
    );
  }
}

const mapStateToProps = store => {
  return {
    token: store.userReducer.token
  }
}
const mapDispatchToProps = {
  getTokenFromCache: () => {
    const token = sessionStorage.getItem('token') || ''
    console.log("token", token)
    return { type: "SET_TOKEN", module: 'user', value: token }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
