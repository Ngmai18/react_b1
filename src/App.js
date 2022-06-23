import './App.css';
import Header from './BaiTapThucHanhLayout/Header';
import Footer from './BaiTapThucHanhLayout/Footer';
import Banner from './BaiTapThucHanhLayout/Body/Banner'
import Item from './BaiTapThucHanhLayout/Body/Item'
function App() {
  return (
    <div className="App">
      <Header/>
      <Banner/>
      <Item/>
      <Footer/>
    </div>
  );
}

export default App;
