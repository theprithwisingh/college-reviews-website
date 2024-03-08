import './Testimonial.css'
import next_icon from '../../assets/next-icon.png'
import back_icon from '../../assets/back-icon.png'
import user_1 from '../../assets/user-1.png'
import user_2 from '../../assets/user-2.png'
import user_3 from '../../assets/user-3.png'
import user_4 from '../../assets/user-4.png'
import { useRef } from 'react'

function Testimonial(){

    const slider = useRef();
    let tx = 0;
     
    const slideForward=()=>{
        if(tx > -50){
            tx-=25
        }
        slider.current.style.transform = `translateX(${tx}%)`
    }
    const slideBackward=()=>{
        if(tx < 0){
            tx+=25;
        }
        slider.current.style.transform = `translateX(${tx}%)`
    }
     return (
    <div>
      <div className="testimonal">
        <img src={next_icon} className='next-btn' onClick={slideForward}/>
        <img src={back_icon} className='back-btn' onClick={slideBackward}/>
        <div className="slider">
            <ul ref={slider}>
            <li>
                <div className='slide'> ,
                 <div className='user-info'>
                    <img src={user_1} alt="" />
                    <div>
                        <h3>Prithwi singh</h3>
                        <span>EduTech,IND</span>
                    </div>
                </div>  
                <p>choosing to purpose my degree at Edusity was one of the best decisions i have ever made, the supportive community, sate-of-art facilties, and commitment to acadmic have truly exceeded my expectations.</p> 
                </div>
            </li>
            
            <li>
                <div className='slide'>
                 <div className='user-info'>
                    <img src={user_2} alt="" />
                    <div>
                        <h3>Pawan singh</h3>
                        <span>EduTech,IND</span>
                    </div>
                </div>  
                <p>choosing to purpose my degree at Edusity was one of the best decisions i have ever made, the supportive community, sate-of-art facilties, and commitment to acadmic have truly exceeded my expectations.</p> 
                </div>
            </li>

            <li>
                <div className='slide'>
                 <div className='user-info'>
                    <img src={user_3} alt="" />
                    <div>
                        <h3>Rohit pal</h3>
                        <span>EduTech,IND</span>
                    </div>
                </div>  
                <p>choosing to purpose my degree at Edusity was one of the best decisions i have ever made, the supportive community, sate-of-art facilties, and commitment to acadmic have truly exceeded my expectations.</p> 
                </div>
            </li>

            <li>
                <div className='slide'>
                 <div className='user-info'>
                    <img src={user_4} alt="" />
                    <div>
                        <h3>aakash singh</h3>
                        <span>EduTech,IND</span>
                    </div>
                </div>  
                <p>choosing to purpose my degree at Edusity was one of the best decisions i have ever made, the supportive community, sate-of-art facilties, and commitment to acadmic have truly exceeded my expectations.</p> 
                </div>
            </li>
            </ul>
        </div>
      </div>
    </div>
  )
}

export default Testimonial;
