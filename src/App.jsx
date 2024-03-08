import './App.css'
import Navbar from './Components/Navbar/Navbar';
import Hero from './Components/Hero/Hero';
import Program from './Components/Program/Program';
import Title from './Components/Title/Title';
import About from './Components/About/About';
import Campus from './Components/Campus/Campus';
import Testimonial from './Components/Testimonial/Testimonial';
import Contact from './Components/Contact/Contact';
import Footer from './Components/Footer/Footer';
function App() {
  return (
    <div className='App'>
    <Navbar/>
    <Hero/>
     <div className='container'>
      <Title subtitle="Our Program" title="What We Offer"/>
     <Program/>
     <About/>
     <Title subtitle="Campus" title="Gallery Photos"/>
     <Campus/>
     <Title subtitle="TESTIMONIALS" title="What Student Says"/>
     <Testimonial/>     
     <Title subtitle="Contact US" title="Get in Touch"/>
     <Contact/>
     <Footer/>
     </div>
    </div>
  )
}
export default App;
