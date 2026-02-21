import React, { useState } from 'react';
import emailjs from '@emailjs/browser'; 
import '../styles/Contact.css';

const SERVICE_ID = "service_4uzxmv8";
const TEMPLATE_ID = "template_jj4qz2x"; 
const PUBLIC_KEY = "AgdIQK_T1RIbrwo5Z";

function Contact() {
  const [username, setUsername] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [errMsg, setErrMsg] = useState("");
  const [successMsg, setSuccessMsg] = useState("");
  const [isSending, setIsSending] = useState(false); 

  const emailValidation = () => {
    
    return String(email)
      .toLocaleLowerCase()
      .match(/^\w+([-]?\w+)*@\w+([-]?\w+)*(\.\w{2,3})+$/);
  };

  const handleSend = (e) => {
    e.preventDefault();
    setErrMsg("");
    setSuccessMsg("");
    if (username === "") {
      setErrMsg("Username is required!");
      return;
    } else if (phoneNumber === "") {
      setErrMsg("Phone number is required!");
      return;
    } else if (email === "") {
      setErrMsg("Please give your Email!");
      return;
    } else if (!emailValidation()) {
      setErrMsg("Give a valid Email!");
      return;
    } else if (subject === "") {
      setErrMsg("Plese give your Subject!");
      return;
    } else if (message === "") {
      setErrMsg("Message is required!");
      return;
    }
  
setIsSending(true);


const templateParams = {
  
  name: username, 
  
  
  user_phone: phoneNumber, 
  message_subject: subject,
  
 
  email: email, 
  
  
  message: message, 
};

    emailjs.send(SERVICE_ID, TEMPLATE_ID, templateParams, PUBLIC_KEY)
      .then((response) => {
        console.log('SUCCESS!', response.status, response.text);
        setSuccessMsg(
          `Thank you dear ${username}, Your Message has been sent Successfully!`
        );
       
        setUsername("");
        setPhoneNumber("");
        setEmail("");
        setSubject("");
        setMessage("");
      })
      .catch((err) => {
        console.error('FAILED...', err);
        setErrMsg("Something went wrong. Please try again later.");
      })
      .finally(() => {
        setIsSending(false); 
      });
  };

  return (
    <div className="contactPage">
      <div className="contactContainer">
        
        
        <div className="contactInfo">
          <h2>Get in Touch</h2>
          <p className="infoText">
            I am currently open to new opportunities and collaboration. Whether you have a project in mind or just want to say hello, feel free to reach out!
          </p>
          <div className="detail">
            <p>Phone: <span>+251941785111</span></p>
            <p>Email: <span>robelalex95@gmail.com</span></p>
          </div>
        </div>

        
        <div className="contactForm">
          <h1>Send Me a Message</h1>
          
         
          {(errMsg || successMsg) && (
            <p className={`messageBox ${errMsg ? 'error' : 'success'}`}>
              {errMsg || successMsg}
            </p>
          )}

          <form onSubmit={handleSend}>
            
           
            
            <div className="formGroup">
              <label htmlFor="username">Your Name</label>
              <input
                onChange={(e) => setUsername(e.target.value)}
                value={username}
                className={errMsg === "Username is required!" ? "inputError" : ""}
                type="text"
                disabled={isSending} 
              />
            </div>
            
            <div className="formGroup">
              <label htmlFor="phoneNumber">Phone Number</label>
              <input
                onChange={(e) => setPhoneNumber(e.target.value)}
                value={phoneNumber}
                className={errMsg === "Phone number is required!" ? "inputError" : ""}
                type="text"
                disabled={isSending}
              />
            </div>
            
            <div className="formGroup">
              <label htmlFor="email">Email</label>
              <input
                onChange={(e) => setEmail(e.target.value)}
                value={email}
                className={(errMsg === "Please give your Email!" || errMsg === "Give a valid Email!") ? "inputError" : ""}
                type="email"
                disabled={isSending}
              />
            </div>
            
            <div className="formGroup">
              <label htmlFor="subject">Subject</label>
              <input
                onChange={(e) => setSubject(e.target.value)}
                value={subject}
                className={errMsg === "Plese give your Subject!" ? "inputError" : ""}
                type="text"
                disabled={isSending}
              />
            </div>
            
            <div className="formGroup fullWidth">
              <label htmlFor="message">Message</label>
              <textarea
                onChange={(e) => setMessage(e.target.value)}
                value={message}
                className={errMsg === "Message is required!" ? "inputError" : ""}
                rows="6"
                disabled={isSending}
              ></textarea>
            </div>
            
            <button type="submit" className="submitButton fullWidth" disabled={isSending}>
              {isSending ? 'Sending...' : 'Send Message'}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contact;