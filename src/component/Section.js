import React from "react"
import "./Section.css"
function Section() {
    return (
        <>
            <div className="Section">
                <div className="Section_top">
                    <div className="section">React & Node</div>
                    <div className="section_text">Blog</div>
                </div>
                {/* <div className="Section_bootom"> */}
                <img src="https://images.pexels.com/photos/1167355/pexels-photo-1167355.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="..." className="sectionImg" />
                {/* </div> */}
            </div>

        </>
    )
}

export default Section