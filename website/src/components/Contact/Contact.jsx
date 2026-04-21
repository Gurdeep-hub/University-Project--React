import './contact.css';
import msg_icon from '../../edusity_assets/msg-icon.png';
import mail_icon from '../../edusity_assets/mail-icon.png';
import phone_icon from '../../edusity_assets/phone-icon.png';
import location_icon from '../../edusity_assets/location-icon.png';
import white_arrow from '../../edusity_assets/white-arrow.png'
import { useState } from 'react';
export function Contact() {
      const [result, setResult] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);
    formData.append("access_key", "197520ae-0c77-4a6f-ab5e-918df2099533");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
    setResult("Success!");
    event.target.reset();

    // --- ADD THIS BLOCK ---
    setTimeout(() => {
      setResult("");
    }, 2000); // 2000 milliseconds = 2 seconds
    // ----------------------

  } else {
    setResult(data.message);
  }
  };
    return(
        <div className='contact'>
            <div className="contact-col">
                <h3>Send us a message <img src={msg_icon} alt="" /></h3>
                <p>Feel free to reach out through contact form or find our contact information below. Your feedback, questions and suggestions are important to us as we strive to provide exceptional service to our university community</p>
                <ul>
                    <li><img src={mail_icon} alt="" />Contact@Cyclops.X-Men</li>
                    <li><img src={phone_icon} alt="" />+ 134-670-7765</li>
                    <li><img src={location_icon} alt="" />X-Mansion, The Mutant World</li>
                </ul>
            </div>
            <div className="contact-col">
                <form onSubmit={onSubmit}>
                    <label htmlFor="name">Your Name</label>
                    <input type="text"  name='name' placeholder='Enter your name' required/>
                    <label htmlFor="phone">Phone Number</label>
                    <input type="telephone" name='phone' placeholder='Enter your mobile number' required />
                    <label htmlFor="messaage">Write Your Message Here</label>
                    <textarea name="message" rows={6} placeholder='Enter your message' required></textarea>
                    <button type='submit' className='btn dark-btn'>Submit now <img src={white_arrow} alt="" /></button>


                </form>
                <span>{result}</span>
            </div>
        </div>
    );
}