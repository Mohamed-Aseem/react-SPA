import React from 'react'
import './Contact.css'
import msg_icon from '../../assets/msg-icon.png'
import mail_icon from '../../assets/mail-icon.png'
import phone_icon from '../../assets/phone-icon.png'
import location_icon from '../../assets/location-icon.png'
import white_arrow from '../../assets/white-arrow.png'

const Contact = () => {

    const [result, setResult] = React.useState("");

    const onSubmit = async (event) => {
        event.preventDefault();
        setResult("Sending....");
        const formData = new FormData(event.target);

        formData.append("access_key", "92247763-5ab6-43c0-a4e1-92c4618d45bc");

        const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
        });

        const data = await response.json();

        if (data.success) {
        setResult("Form Submitted Successfully");
        event.target.reset();
        } else {
        console.log("Error", data);
        setResult(data.message);
        }
    };


  return (
    <div className='contact'>
      <div className="contact-col">
        <h3>Send us a message <img src={msg_icon} alt="" /></h3>
        <p>
        We're here to help! Whether you have questions about our programs, admissions process, or campus life, we're eager to assist you. 
        Drop us a message using the form below, and our dedicated team will get back to you as soon as possible. 
        Your inquiries are important to us, and we look forward to connecting with you and guiding you on your journey towards success.
        </p>
        <ul>
            <li><img src={mail_icon} alt="" />ima7str@gmail.com</li>
            <li><img src={phone_icon} alt="" />+94-761234838</li>
            <li><img src={location_icon} alt="" />94, Masthar Road, Karuwattukkal-03, Sammanthurai</li>
        </ul>
      </div>
      <div className="contact-col">
        <form onSubmit={onSubmit}>
            <label>Your Name</label>
            <input type="text" name='name' placeholder='Enter Your Name' required/>
            <label>Contact Number</label>
            <input type="tel" name='phone' placeholder='Enter Your Contact Number' required/>
            <label>Write Your Messages Here</label>
            <textarea name="message" rows="6" placeholder='Enter Your Messages' required></textarea>
            <button type='submit' className='btn dark-btn'>Submit Now <img src={white_arrow} alt="" /></button>
        </form>
        <span>{result}</span>
      </div>
    </div>
  )
}

export default Contact
