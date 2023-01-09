import React from "react"
import "./Header.css"
import Img from "../Image/_DSC0199.JPG"
import Search from "../Image/search.png"
import { Link } from "react-router-dom"

function Header() {
    return (
        <>
            <div className="Header">
                <div className="header_left">
                    <p className="headerleft_span">B</p>
                    <p className="headerleft_span">L</p>
                    <p className="headerleft_span">O</p>
                    <p className="headerleft_span">G</p>

                </div>
                <div className="header_center">
                    <ul className="headercenter_ul">
                        <Link to="/" style={{ textDecoration: 'none', color: 'black' }}> <li className="headercenter_li">Home</li></Link>
                        <Link to="/about" style={{ textDecoration: 'none', color: 'black' }}><li className="headercenter_li" >About</li> </Link>
                        <Link to="/contact" style={{ textDecoration: 'none', color: 'black' }}><li className="headercenter_li">Contact</li></Link>
                        <li className="headercenter_li">Service</li>
                        <li className="headercenter_li">Write</li>
                    </ul>
                </div>
                <div className="header_right">
                    <img src={Img} alt="..." className="headerright_img" />
                    <span> <img src={Search} alt="..." className="Search_img" /></span>

                </div>
            </div>
        </>
    )
}
export default Header