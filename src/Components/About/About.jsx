import React from "react";
import data from '../../accordion.jsx'
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from "react-accessible-accordion"; // Remove duplicate import
import "react-accessible-accordion/dist/fancy-example.css";
import { MdOutlineArrowDropDown, MdTitle } from "react-icons/md";
import "./About.css";

const About = () => {
  return (
    <section className="v-wrapper">
      <div className="paddings innerWidth flexCenter v-container">
        <div className="flexStart v-content">
          {/* Left section with text */}
          <div className="flexColStart v-left">
            <span className="primaryText">About - us</span>
            <span className="secondaryText">
              Welcome to StudySphere, your academic companion and study-focused social media platform.<span />
              <br />
              <span>StudySphere is designed to revolutionize the way students approach their education.</span>
              <span> Whether you're struggling with a tough subject, seeking study buddies, or looking to expand your academic network, StudySphere has you covered.</span>
            </span>

            <Accordion className="accordion" 
            allowMultipleExpanded={false}
            >
              {data.map((item, i) => {
                return (
                  <AccordionItem  className="accordionItem" key={i} uuid={i}>
                    <AccordionItemHeading>
                      <AccordionItemButton className="flexCenter accordionButton">
                      
                        <div className="flexCenter icon">{item.icon}</div>
                        <span className="primaryText">
                          {item.heading}
                        </span>
                        <div className="flexCenter icon">
                          <MdOutlineArrowDropDown size={20} />
                        </div>
                      </AccordionItemButton>
                    </AccordionItemHeading>

                    <AccordionItemPanel>
                    <p className="secondaryText">{item.detail}</p>
                      {/* Content for the panel */}
                    </AccordionItemPanel>
                  </AccordionItem>
                );
              })}
            </Accordion>
          </div>
          {/* Right section with image */}
          <div className="v-right">
            <div className="image-container">
              <img src="./image-3.jpg" alt="" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
