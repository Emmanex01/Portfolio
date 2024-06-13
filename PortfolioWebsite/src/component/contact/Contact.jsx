import React from 'react';
import './Contact.css';
import { FaRegMessage } from "react-icons/fa6";
import { BiMessageRounded } from "react-icons/bi";
import { FaWhatsapp } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";

const Contact = () => {
  return (
    <div id='contact'>
        <h3>Get in Touch</h3>
        <h1>Contact Me</h1>
        <div className='main_container'>
            <div className="contact_container">
                <div className="contact_box">
                    <FaRegMessage/>
                    <h2>Email</h2>
                    <h3>nwanosiketochukwu@gmail.com</h3>
                    <p>send a message</p>
                </div>
                <div className="contact_box">
                    <BiMessageRounded />
                    <h2>Messenger</h2>
                    <h3>Emmanuel Tochukwu</h3>
                    <p>send a message</p>
                </div>
                <div className="contact_box">
                    <FaWhatsapp/>
                    <h2>Whatsapp</h2>
                    <h3>+234 8148 28 0097 </h3>
                    <p>send a message</p>
                </div>
            </div>
            <div className="form_container">
                <form action="" method="get">
                    <div>
                        <label htmlFor="Name">Name</label>
                        <input type="text" name="Name" id="Name" placeholder='Full Name' />
                    </div>
                    <div>
                        <label htmlFor="Email">Email</label>
                        <input type="Email" name="email" id="Email" placeholder='Your Email'/>
                    </div>
                    <div>
                        <label htmlFor="Msg">Message</label>
                        <textarea name="Msg" id="Msg" placeholder='Write your Message here'></textarea>
                    </div>
                    <div>
                        <button>SUBMIT</button>
                    </div>
                    
                </form>
            </div>
        </div>
      
    </div>
  )
}

export default Contact
