import style from './App.module.scss';
import Header from './components/Header/index'
import Layout from './components/Layout/index'
import Footer from './components/Footer/index'

function App() {
  return (
    <div className={style['main-container']}>
      <Header />
      <Layout />
      <Footer />
    </div>
  );
}

export default App;
