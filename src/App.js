import style from './App.module.scss';
import Header from './components/Header/index'
import Layout from './components/Layout/index'
import Footer from './components/Footer/index'
import { connect } from 'react-redux'

function App(props) {
  const { token } = props
  return (
    <div className={style['main-container']}>
      {token && <Header />}
      <Layout />
      {token && <Footer />}
    </div>
  );
}

const mapStateToProps = store => {
  return {
    token: store.userReducer.token
  }
}
const mapDispatchToProps = {
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
