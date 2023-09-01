import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons";
import { faMapMarker } from "@fortawesome/free-solid-svg-icons"; // Example for a solid (non-brands) icon

import "react-toastify/dist/ReactToastify.css";
// import firebaseDB from 'firebase'
import "../css/contact.css"
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { db } from "./firebase";

export default function Contacts() {
  const [state, setState] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const { name, email, subject, message } = state;
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!name || !email || !subject || !message) {
      toast.error("Please provide value in each input field");
    } else {
      await addDoc(collection(db,"name,email,subject,message"),{
                name: name,
                email:email,
                subject: subject,
                message:message

      })
      // setState({ name: "", email: "", subject: "", message: "" });
      toast.success("Form Submitted Successfully");
    }
  };

  const handleInputChange = (e) => {
    let { name, value } = e.target;
    setState({ ...state, [name]: value });
  };
  return (

    <div>
  
    <section  className="contact-section">
      <div className="">
        <ToastContainer position="top-center" />
        <div className="row justify-content-center">
          <div className="col-md-10">
            <div className="wrapper">
              <div className="row no-gutters">
                <div className="col-md-6">
                  <div style={{backgroundColor:"#f0f4f8"}}className=" w-100 p-lg-5 p-4">
                    <h3 className="mb-4">Send us a message</h3>
                    <form
                      id="contactForm"
                      className="contactForm"
                      onSubmit={handleSubmit}
                    >
                      <div className="row">
                        <div className="col-md-12">
                          <div className="form-group">
                            <input
                              type="text"
                              className="form-control"
                              name="name"
                              placeholder="Name"
                              onChange={handleInputChange}
                              value={name}
                              style={{ color: 'black' ,backgroundColor: 'white'}} // Set text color to black

                            />
                          </div>
                        </div>
                        <br/>                        <br/>
                        <br/>
                        <br/>
                        <div className="col-md-12">
                          <div className="form-group">
                            <input
                              type="email"
                              className="form-control"
                              name="email"
                              placeholder="Email"
                              onChange={handleInputChange}
                              value={email}
                              style={{ color: 'black' ,backgroundColor: 'white'}} // Set text color to black

                              
                            />
                          </div>
                        </div>
                        <br/>                        <br/>
                        <br/>
                        <br/>
                        <div className="col-md-12">
                          <div className="form-group">
                            <input
                              type="text"
                              className="form-control"
                              name="subject"
                              placeholder="Subject"
                              onChange={handleInputChange}
                              value={subject}
                              style={{ color: 'black' ,backgroundColor: 'white'}} // Set text color to black

                            />
                          </div>
                        </div>
                        <br/>                        <br/>
                        <br/>
                        <br/>

                        <div className="col-md-12">
                          <div className="form-group">
                            <textarea
                              type="text"
                              className="form-control"
                              name="message"
                              placeholder="Message"
                              cols="30"
                              rows="6"
                              onChange={handleInputChange}
                              value={message}
                              style={{ color: 'black' ,backgroundColor: 'white'}} // Set text color to black

                            ></textarea>
                          </div>
                        </div>
                        
                        <div className="col-md-12">
                          <div className="form-group">
                            <input
                              type="submit"
                              value="Send Message"
                              className="btn btn-primary"
                            />
                          </div>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
                <div className="col-md-6 d-flex align-items-stretch">
                  <div className="info-wrap w-100 p-lg-5 p-4 img">
                    <h3>Contact us</h3>
                    <p className="mb-4">
                      We're open for any suggestion or just to have a chat
                    </p>
                    <div className="dbox w-100 d-flex align-items-start">
                      <div className="icon d-flex align-items-center justify-content-center">
                      <FontAwesomeIcon icon={faMapMarkerAlt} />
                      </div>

                      <div className="text pl-3">
                        <p>
                          <span>Address: <br/> Thane- Head Office <br/></span> 11, Puraniks Capitol, Opp. Hyper city mall, Kasarvadvali, Ghodbunder road, Thane W 400615
                        </p>
                        <p>
                          <span>Phone:</span>
                          <a style={{color:"grey"}}  href="tel://123456789">+91 8291996675</a>
                        </p>
                        <p>
                          <span>Email:</span>
                          <a style={{color:"grey"}}  href="info@Kumarinfotech.net">
                          info@studioelements.in                         
                          </a> 
                         
                        </p>
                      </div>
                      
                    </div>
                    <div className="dbox w-100 d-flex align-items-start">

                    <div className="icon d-flex align-items-center justify-content-center">
                    <FontAwesomeIcon icon={faMapMarkerAlt} />
                      </div>
                    <div className="text pl-3">
                        <p>
                          <span>Address: <br/> Hyderabad- Branch Office <br/></span> Office No. 217, floor- Level 2, Oval Building, Inorbit Mall Road, Telangana – 500081.
                        </p>
                        <p>
                          <span>Phone:</span>
                          <a style={{color:"grey"}}  href="tel://123456789">+91 8291996675</a>
                        </p>
                        <p>
                          <span>Email:</span>
                          <a style={{color:"grey"}}  href="info@Kumarinfotech.net">
                          info@studioelements.in                           
                          </a> 
                         
                        </p>
                      </div>
                      </div>
                      <div className="dbox w-100 d-flex align-items-start">
                      <div className="icon d-flex align-items-center justify-content-center">
                      <FontAwesomeIcon icon={faMapMarkerAlt} />
                      </div>
                      <div className="text pl-3">
                        <p>
                          <span>Address: <br/> Panvel- Branch Office <br/></span> The address will provide soon
                        </p>
                        <p>
                          <span>Phone:</span>
                          <a style={{color:"grey"}} href="tel://123456789">+91 8291996675</a>
                        </p>
                        <p>
                          <span>Email:</span>
                          <a style={{color:"grey"}}  href="info@Kumarinfotech.net">
                          info@studioelements.in                          
                          </a> 
                         
                        </p>
                      </div>
                      </div>
                      <div className="dbox w-100 d-flex align-items-start">
                      <div className="icon d-flex align-items-center justify-content-center">
                      <FontAwesomeIcon icon={faMapMarkerAlt} />
                      </div>
                      <div className="text pl-3">
                        <p>
                          <span>Address: <br/> Bangalore- Branch Office <br/></span> The address will provide soon
                        </p>
                        <p>
                          <span>Phone:</span>
                          <a style={{color:"grey"}} href="tel://123456789">+91 9820086129</a>
                        </p>
                        <p>
                          <span>Email:</span>
                          <a style={{color:"grey"}}  href="info@Kumarinfotech.net">
                          info@studioelements.in                          
                          </a> 
                         
                        </p>
                      </div>
                      </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
      
    </section>
   
    </div>
  );
}

