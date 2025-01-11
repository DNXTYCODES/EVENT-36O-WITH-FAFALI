import { Title, TitleSm } from "@/components/common/Title";
import React, { useState } from "react";
import { AiFillBehanceCircle, AiFillInstagram, AiFillLinkedin, AiFillYoutube } from "react-icons/ai";
import { BiUserCircle } from "react-icons/bi";
import { BsFacebook } from "react-icons/bs";
import { FiHeadphones, FiHelpCircle } from "react-icons/fi";
import { IoLocationOutline } from "react-icons/io5";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("/api/send-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        alert("Message sent successfully!");
        setFormData({ name: "", email: "", message: "" });
      } else {
        alert("Failed to send message. Please try again.");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("Something went wrong. Please try again later.");
    }
  };

  return (
    <section className="contact bg-top">
      <div className="container">
        <div className="heading-title">
          <TitleSm title="CONTACT" /> <br />
          <br />
          <Title title="Let's start right now!" className="title-bg" />
        </div>
        <div className="content py flex1">
          <div className="left w-30">
            <div className="contact-deatils">
              <div className="box">
                <FiHeadphones size={30} className="icons" />
                <h3>+233 20 326 6081</h3>
                <span>Call us: Mon - Fri 9:00 - 19:00</span>
              </div>
              <div className="box">
                <IoLocationOutline size={30} className="icons" />
                <h3>GHANA</h3>
                <span>ADDRESS PLACEHOLDER</span>
              </div>
              <div className="box">
                <FiHelpCircle size={30} className="icons" />
                <h3>event360withfafali@gmail.com</h3>
                <span>Drop us a line anytime!</span>
              </div>
              <div className="box">
                <BiUserCircle size={30} className="icons" />
                <h3>event360withfafali@gmail.com</h3>
                <span>Career at Event360</span>
              </div>
            </div>
            <ul>
              <li className="icon">
                <BsFacebook size={25} />
              </li>
              <li className="icon">
                <AiFillYoutube size={25} />
              </li>
              <li className="icon">
                <AiFillInstagram size={25} />
              </li>
              <li className="icon">
                <AiFillLinkedin size={25} />
              </li>
            </ul>
          </div>
          <div className="right w-70">
            <TitleSm title="Make an online enquiry" />
            <p className="desc-p">
              Got questions? Ideas? Want to Partner with Us or Sponsor us? Fill out the form below to get our proposal.
            </p>

            <form onSubmit={handleSubmit}>
              <div className="inputs">
                <span>Name*</span>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="inputs">
                <span>Email (Your Email address)*</span>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="inputs">
                <span>Message*</span>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  cols="30"
                  rows="10"
                  required
                ></textarea>
              </div>
              <button type="submit" className="button-primary">
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
