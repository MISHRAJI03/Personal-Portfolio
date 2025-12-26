import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import Title from '../layouts/Title';
import ContactLeft from './ContactLeft';

const Contact = () => {
  const [username, setUsername] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [errMsg, setErrMsg] = useState("");
  const [successMsg, setSuccessMsg] = useState("");

  // ========== Email Validation start here ==============
  const emailValidation = () => {
    return String(email)
      .toLocaleLowerCase()
      .match(/^\w+([-]?\w+)*@\w+([-]?\w+)*(\.\w{2,3})+$/);
  };
  // ========== Email Validation end here ================

  const handleSend = (e) => {
    e.preventDefault();
    setErrMsg("");
    setSuccessMsg("");
    if (username === "") {
      setErrMsg("Username is required!");
    } else if (phoneNumber === "") {
      setErrMsg("Phone number is required!");
    } else if (email === "") {
      setErrMsg("Please give your Email!");
    } else if (!emailValidation(email)) {
      setErrMsg("Give a valid Email!");
    } else if (subject === "") {
      setErrMsg("Plese give your Subject!");
    } else if (message === "") {
      setErrMsg("Message is required!");
    } else {
      // EmailJS integration
      emailjs.send(
        'service_xxxxxxx', // Replace with your EmailJS service ID
        'template_xxxxxxx', // Replace with your EmailJS template ID
        {
          from_name: username,
          from_email: email,
          phone: phoneNumber,
          subject: subject,
          message: message,
        },
        'user_xxxxxxxxxxxxxxxxx' // Replace with your EmailJS user/public key
      )
      .then(
        (result) => {
          setSuccessMsg('Message sent successfully!');
          setUsername("");
          setPhoneNumber("");
          setEmail("");
          setSubject("");
          setMessage("");
        },
        (error) => {
          setErrMsg('Failed to send message. Please try again.');
        }
      );
    }
  };

  return (
    <section
      id="contact"
      className="w-full py-8 border-b-[1px]"
    >
      <div className="flex justify-center items-center text-center">
        <Title title="CONTACT" des="Contact With Me" />
      </div>
      <div className="w-full flex flex-col lgl:flex-row justify-center items-stretch gap-8 lgl:gap-12">
        <ContactLeft />
        <div className="w-full lgl:w-[60%] h-full flex items-center">
          <form className="w-full bg-gradient-to-r from-[#1e2024] to-[#23272b] rounded-lg shadow-shadowOne sm:p-8 flex flex-col gap-6">
            {errMsg && (
              <p className="py-3 bg-gradient-to-r from-[#1e2024] to-[#23272b] shadow-shadowOne text-center text-orange-500 text-base tracking-wide animate-bounce">
                {errMsg}
              </p>
            )}
            {successMsg && (
              <p className="py-3 bg-gradient-to-r from-[#1e2024] to-[#23272b] shadow-shadowOne text-center text-green-500 text-base tracking-wide animate-bounce">
                {successMsg}
              </p>
            )}
            <div className="w-full flex flex-col sm:flex-row gap-6">
              <div className="w-full sm:w-1/2 flex flex-col gap-2">
                <label className="text-sm text-gray-400 uppercase tracking-wide font-semibold">Your Name</label>
                <input
                  onChange={(e) => setUsername(e.target.value)}
                  value={username}
                  className={`contactInput ${errMsg === "Username is required!" ? "outline-designColor border-designColor" : ""}`}
                  type="text"
                  placeholder="Enter your name"
                />
              </div>
              <div className="w-full sm:w-1/2 flex flex-col gap-2">
                <label className="text-sm text-gray-400 uppercase tracking-wide font-semibold">Phone Number</label>
                <input
                  onChange={(e) => setPhoneNumber(e.target.value)}
                  value={phoneNumber}
                  className={`contactInput ${errMsg === "Phone number is required!" ? "outline-designColor border-designColor" : ""}`}
                  type="text"
                  placeholder="Enter your phone number"
                />
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <label className="text-sm text-gray-400 uppercase tracking-wide font-semibold">Email</label>
              <input
                onChange={(e) => setEmail(e.target.value)}
                value={email}
                className={`contactInput ${errMsg === "Please give your Email!" || errMsg === "Give a valid Email!" ? "outline-designColor border-designColor" : ""}`}
                type="email"
                placeholder="Enter your email"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label className="text-sm text-gray-400 uppercase tracking-wide font-semibold">Subject</label>
              <input
                onChange={(e) => setSubject(e.target.value)}
                value={subject}
                className={`contactInput ${errMsg === "Plese give your Subject!" ? "outline-designColor border-designColor" : ""}`}
                type="text"
                placeholder="Enter subject"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label className="text-sm text-gray-400 uppercase tracking-wide font-semibold">Message</label>
              <textarea
                onChange={(e) => setMessage(e.target.value)}
                value={message}
                className={`contactTextArea ${errMsg === "Message is required!" ? "outline-designColor border-designColor" : ""}`}
                cols="30"
                rows="6"
                placeholder="Type your message here..."
              ></textarea>
            </div>
            <div className="w-full flex justify-end mt-2">
              <button
                onClick={handleSend}
                className="px-8 py-4 bg-gradient-to-r from-designColor to-[#6e3aff] text-white font-bold rounded-lg shadow-lg uppercase tracking-wider hover:scale-105 hover:shadow-xl transition-all duration-300 border-none outline-none"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Contact;