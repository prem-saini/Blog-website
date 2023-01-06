import React from "react"
import "./Post.css"
import img from "../Image/_DSC0199.JPG"
import instagram from "../Image/instagram.png"
import github from "../Image/github.png"
import linkedIn from "../Image/linkedin.png"
function Post() {
    return (
        <>
            <div className="Post">
                {/* <h1>Post</h1> */}
                <div className="post">
                    <h1 style={{ textAlign: 'center', fontStyle: 'italic' }}>ABOUT US</h1>
                </div>
                <div className="Post_img">
                    <img src={img} alt="..." className="post_img" />
                    <p className="post_para">
                        Laboris sunt aute cupidatat velit magna velit ullamco dolore mollit
                        amet ex esse.Sunt eu ut nostrud id quis proident.
                    </p>
                </div>
                <div className="">
                    <h1 style={{ textAlign: 'center', fontStyle: 'italic' }}>CATEGORIES</h1>
                    <ul className="Post_ul">
                        <li className="Post_li">Life</li>
                        <li className="Post_li">Music</li>
                        <li className="Post_li">Sport</li>
                        <li className="Post_li">Style</li>
                        <li className="Post_li">Tech</li>
                        <li className="Post_li">Cienma</li>
                    </ul>
                </div>
                <div className="post_follow">
                    <h3 style={{
                        textAlign: 'center'
                    }}>FOLLOW US</h3>

                    <br />
                    <img src={instagram} alt="..." className="postfollow_img" />
                    <img src={github} alt="..." className="postfollow_img" />
                    <img src={linkedIn} alt="..." className="postfollow_img" />


                </div>
            </div>
        </>
    )
}
export default Post