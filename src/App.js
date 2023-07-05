import './App.css';
import Header from './Components/Header';
import Nav from './Components/Nav';
import About from './Components/About';
import Experience from './Components/Experience';
import Services from './Components/Services';
import Portfolio from './Components/Portfolio';
import Testimonial from './Components/Testimonial';
import Contact from './Components/Contact';
import Footer from './Components/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <Nav />
      <About />
      <Experience />
      <Services />
      <Portfolio/>
      <Testimonial />
      <Contact />
      <Footer />


    </div>
  );
}

export default App;
