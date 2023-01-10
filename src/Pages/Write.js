import React from "react"
// import Footer from "../component/Footer"
import Header from "../component/Header"
import "./Write.css"
import add from "../Image/addIcon.png"

function Write() {
    return (
        <>
            <Header />
            <div className="write">
                <h1>Blog</h1>
                <img src="https://thumbs.dreamstime.com/b/working-home-laptop-woman-writing-blog-female-hands-keyboard-65929526.jpg" alt="..." className="writemain_img" />
                <div className="write_first">
                    <img src={add} alt="..." className="write_img" />
                    <input type="file" className="write_input" />
                    <textarea rows={9} className="write_textarea" placeholder="Tell Your Story... " />
                </div>
                <button className="Write_btn">Publish</button>
            </div>

        </>
    )
}
export default Write