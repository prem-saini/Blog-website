import React from "react"
import Footer from "../component/Footer"
import Header from "../component/Header"
import "./Contact.css"

function Contact() {
    return (
        <>
            <div className="Contact">
                <Header />
                <div className="contact">
                    <img src="https://burst.shopifycdn.com/photos/contact-us-image.jpg?width=1200&format=pjpg&exif=1&iptc=1" style={{ width: '100%' }} alt="..." className="contact_img" />

                    <h3 className="contact_heading">Contact Us</h3>

                    <div className="contact_form">
                        <div>
                            <input type="text" placeholder="Enter your FirstName" />
                            <input type="text" placeholder="Enter your LastName" />
                            <input type="e-mail" placeholder="Enter your Email" />
                            <input type="password" placeholder="Enter your Password" />
                        </div>

                        <div className="contact_form_des">
                            <input type="text" placeholder="Enter Your Mobile No." />
                            <input type="text" placeholder="Enter Your Address " />
                            {/* <textarea /> */}
                        </div>

                        <button className="Contact_btn" >Submit</button>
                    </div>
                </div>
                <Footer />
            </div>

        </>
    )
}

export default Contact