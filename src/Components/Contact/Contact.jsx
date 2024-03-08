import './Contact.css'
import { useState } from 'react'
import msg_icon from '../../assets/msg-icon.png'
import mail_icon from '../../assets/mail-icon.png'
import phone_icon from '../../assets/phone-icon.png'
import location_icon from '../../assets/location-icon.png'
import white_arrow from '../../assets/white-arrow.png'
function Contact() {
  const [result, setResult] =useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "4d2e3b91-50be-46f3-98cb-691a5671763a");

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    }).then((res) => res.json());

    if (res.success) {
      console.log("Success", res);
      setResult(res.message);
      event.target.reset();
    } else {
      console.log("Error", res);
      setResult(res.message);
    }
  };
  return (
    <div className='contact'>
       <div className='contact-col'>
        <h3>Send us a message <img src={msg_icon} alt="" /></h3>
        <p>Feel free to reach out through contact form or Lorem ipsum dolor sitFeel free to reach out through contact form or Lorem ipsum dolor sit Feel free to reach out through contact form or Lorem ipsum dolor sit Feel free to reach out through contact form or Lorem ipsum dolor sit</p>
        <ul>
            <li><img src={mail_icon}/> Contact@GreatStack.dev</li>
            <li><img src={phone_icon}/>+1 123-456-7890</li>
            <li><img src={location_icon}/>09 Street Ekta nagar kandiwali(w) <br/> Mumbai 400067 INDIA
            </li>
        </ul>
       </div>
       <div className='contact-col'>
        <form onSubmit={onSubmit}>
        <label htmlFor="">Your name</label>
        <input type="text" name="name" placeholder='Enter your name' required />

        <label htmlFor="">Phone Number</label>
        <input type="text" name='phone' placeholder='Enter your mobile' required/>


        <label htmlFor="">Write your message here</label>
        <textarea name="message" id="text-area" rows="6" required></textarea>

        <button type='submit' className='btn dark-btn'>Submit now <img src={white_arrow} alt="" /></button>
        </form>
        <span>{result}</span>
       </div>
    </div>
  )
}
export default Contact;
