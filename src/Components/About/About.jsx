import './About.css'
import about_img from '../../assets/about.png'
// import play_icon from '../../assets/play-icon.png'
function About() {
  return (
      <div className='about'>
         <div className='about-left'>
            <img src={about_img} className="about-img" />
            {/* <img src={play_icon} className="play-icon" /> */}
         </div>
         <div className="about-right">
            <h3>ABOUT UNIVERSITY</h3>
            <h2>Nurturing Tomorrow Leaders Today </h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.Id inventore fuga nam voluptatem qui temporibus tenetur rerum tempore odio Id inventore fuga nam voluptate qui temporibus tenetur cum rerum tempore odio.</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.Id inventore fuga nam voluptatem qui temporibus tenetur rerum tempore odio Id inventore fuga nam voluptate qui temporibus tenetur cum rerum tempore odio.</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.Id inventore fuga nam voluptatem qui temporibus tenetur rerum tempore odio Id inventore fuga nam voluptate qui temporibus tenetur cum rerum tempore odio.</p>
         </div>
      </div>
  )
}

export default About
