import React from "react"
import Footer from "../component/Footer"
import Header from "../component/Header"
import Post from "../component/Post"
import Section from "../component/Section"
import Sidebar from "../component/Sidebar"

function Home() {
    return (
        <>
            <Header />
            <Section />
            <div className='main'>
                <Sidebar />
                <Post />

            </div>
            <Footer />

        </>
    )
}

export default Home