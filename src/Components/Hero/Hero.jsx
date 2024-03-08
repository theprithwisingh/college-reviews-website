import './Hero.css'
import dark_arrow from '../../assets/dark-arrow.png'
const Hero = () => {
  return (
    <div className='hero container'>
      <div className="hero-text">
         <h1>We Ensure better education for a better world</h1>
         <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quos in est alias quisquam aspernatur labore unde sapiente culpa beatae, facere inventore minus odio dicta consectetur consequatur.</p>
         <button className='btn'>Explore more <img src={dark_arrow} /></button>
      </div>
    </div>
  )
}

export default Hero
