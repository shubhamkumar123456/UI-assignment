
import './App.css';
import Footer from './components/footer/Footer';
import MiddleComponent from './components/middleComponent/MiddleComponent';
import Navbar from './components/navbar/Navbar';
import Ratings from './components/ratings/Ratings';
import TopSide from './components/topside/TopSide';
import TopsideBottom from './components/topside/TopsideBottom';

function App() {
  return (
    <div className="App">
    <Navbar/>
    <TopSide/>
    <TopsideBottom/>
    <MiddleComponent/>
    <Ratings/>
    <h1 className='appBottomHeading'>Get in Touch With Us</h1>
        <h2 className='appBottomDesc'>Elevate Your Institute Management and Student Success - Contact Us Now!</h2>
    <Footer/>
    </div>
  );
}

export default App;
