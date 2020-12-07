import style from './App.css';
import Header from './components/Header/index'
import Layout from './components/Layout/index'
import Footer from './components/Footer/index'

function App() {
  return (
    <div className={style.mainContainer}>
      <Header />
      <Layout />
      <Footer />
    </div>
  );
}

export default App;
