import logo from './logo.svg';
import './App.css';
import Header from './Header';
import Hero from './hero';
import About from './About';
import InfoBox from './infoBox';
import Review from './Review';
import Location from './Location';
import Specials from './Specials';
function App() {
  return (
    <div>
      <Header />
      <Hero />
      <InfoBox />
      <About/>
      <Location />
      <Specials />
      {/* <Review/> */}
    </div>
  );
}

export default App;
