import React from "react";
import "./Contact.css";
import {MdCall} from 'react-icons/md'
import {BsFillChatDotsFill} from 'react-icons/bs'
import { FaEnvelope } from 'react-icons/fa';
const Contact = () => {
  return (
    <div>
      <section className="c-wrapper">
        <div className="paddings innerwidth flexCenter c-container">
          {/* left section*/}
          <div className="left-side">
            <div className="image-container">
              <img src="../image-2.jpg" alt="" />
            </div>
          </div>
          {/*right section*/}
          <div className=" flexColStart right-side">
            <span className="orangeText"> Our Contacts</span>
            <span className="primaryText">Easy to contact us</span>
            <span className="secondaryText">
              {" "}
              We always ready to help you by providing the best services
            </span>
            <span className="secondaryText">
              We value your feedback, questions, and inquiries. Feel free to get
              in touch with us using the contact information below. We are here
              to assist you.
            </span>
            <div className="flexColStart contactModes">
              {/*first row*/}
              <div className="flexStart row">
                <div className="flexColCenter mode">
                  <div className="flexStart">
                    <div className="flexCenter icon">
                         <MdCall size={25}/>
                    </div>
                    <div className="flexColStart detail">
                     <span className="primaryText">Call</span>
                     <span className="secondaryText">+91-12345678</span>
                    </div>
                  </div>
                  <div className="flexCenter button">Call Now</div>
                </div>
              {/*second mode*/ }
                <div className="flexColCenter mode">
                <div className="flexStart">
                  <div className="flexCenter icon">
                       <BsFillChatDotsFill size={25}/>
                  </div>
                  <div className="flexColStart detail">
                   <span className="primaryText">Message</span>
                   <span className="secondaryText">+91-12345678</span>
                  </div>
                </div>
                <div className="flexCenter button">Chat Now</div>
              </div>
              </div>
            {/*second row*/}
            <div className="flexStart row">
            <div className="flexColCenter mode">
              <div className="flexStart">
                <div className="flexCenter icon">
                     <BsFillChatDotsFill size={25}/>
                </div>
                <div className="flexColStart detail">
                 <span className="primaryText"> Video Call</span>
                 <span className="secondaryText">+91-12345678</span>
                </div>
              </div>
              <div className="flexCenter button">Video Call Now</div>
            </div>
            <div className="flexColCenter mode">
            <div className="flexStart">
              <div className="flexCenter icon">
              <FaEnvelope size={25} />
              </div>
              <div className="flexColStart detail">
               <span className="primaryText">E-mail</span>
               <span className="secondaryText">abc@gmail.com</span>
              </div>
            </div>
            <div className="flexCenter button">E-mail Now</div>
          </div>
          </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
