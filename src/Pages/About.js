import React from "react"
import "./About.css"
import Header from "../component/Header"
import Post from "../component/Post"
import Edit from "../Image/edit.png"
import Delete from "../Image/delete.png"
import Footer from "../component/Footer"

function About() {
    return (

        <>
            <Header />
            <div className="About">

                <div className="About_left">
                    <img src="https://marketinginsidergroup.com/wp-content/uploads/2020/08/iStock-1198931639-scaled.jpg" alt="..." className="about_img" />
                    <h1 style=
                        {{ textAlign: 'center' }}>this is a very most powerful wapon</h1>
                    <div className="about_icon">
                        <img src={Edit} alt="..." style={{ width: '40px', margin: "5px", }} />
                        <img src={Delete} alt="..." style={{ width: '40px', margin: "5px", }} /> </div>
                    <div className="">
                        <h5 style={{ margin: '5px' }}>Author : Prem saini</h5>
                        <p style=
                            {{ width: "90%", textAlign: 'center', }}>Measuring Your Goals It’s that time of year again. The time when everybody is setting goals…and usually failing at them. One of the biggest mistakes
                            I see people making when they set goals is not measuring them, or not measuring them very well.
                            Typically, if we measure our goals,we only have one way of Measuring Your Goals It’s that time of year again. The time when everybody is setting goals…and usually failing at them. One of the biggest mistakes
                            I see people making when they set goals is not measuring them, or not measuring them very well.
                            Typically, if we measure our goals,we only have one way of…</p></div>

                </div>
                <div className="About_right">
                    <Post />
                </div>


            </div>
            <Footer />
        </>
    )
}
export default About