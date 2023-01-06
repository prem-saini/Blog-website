import React from "react"
import "./Sidebar.css"
import Data from "../Data"

function Sidebar() {
    return (
        <>
            <div className="Sidebar">

                {
                    Data.map((val) => {
                        return (
                            <>
                                <div className="Card">
                                    <div className="card">
                                        <img src={val.image} alt="..." />
                                    </div>

                                    <div className="description">
                                        <p>{val.description}</p>
                                    </div>
                                </div>
                            </>
                        )
                    })

                }
            </div>

        </>
    )
}

export default Sidebar