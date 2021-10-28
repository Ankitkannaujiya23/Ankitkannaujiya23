import React, { useState } from 'react'

export default function About() {

    const [darkModeStyle, setDarkModeStyle] = useState({
        color: "black",
        backgroundColor: "white"
    })
    const [btnDark, setBtnDark] = useState("Enable Dark Mode")

    const toggleDark = () => {
        if (darkModeStyle.color === "black") {
            setDarkModeStyle({
                color: "white",
                backgroundColor: "black",
                border: "1px solid white"
            })
            setBtnDark("Disable Dark Mode")
        }
        else {

            setDarkModeStyle({
                color: "black",
                backgroundColor: "white"
            })
            setBtnDark("Enable Dark Mode")
        }
    }


    return (
        <div>
            <div className="container" style={darkModeStyle}>
                <h1>About Us</h1>
                <div className="my-3">
                    {/* <button onClick={toggleDark} type="button" className="btn btn-dark my-3">{btnDark}</button> */}

                    <div class="form-check form-switch">
                        <input class="form-check-input" type="checkbox" role="switch" onClick={toggleDark} id="flexSwitchCheckDefault" />
                        <label class="form-check-label" for="flexSwitchCheckDefault">{btnDark}</label>
                    </div>  
                </div>
                <div className="accordion" id="accordionExample">
                    <div className="accordion-item" style={darkModeStyle}>
                        <h2 className="accordion-header" id="headingOne">
                            <button className="accordion-button" type="button" data-bs-toggle="collapse" style={darkModeStyle} data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                Accordion Item #1
                            </button>
                        </h2>
                        <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                            <div className="accordion-body">
                                <strong>This is the first item's accordion body.</strong> It is shown by default, until the collapse plugin adds the appropriate classNamees that we use to style each element. These classNamees control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                            </div>
                        </div>
                    </div>
                    <div className="accordion-item" style={darkModeStyle}>
                        <h2 className="accordion-header" id="headingTwo">
                            <button className="accordion-button collapsed" type="button" style={darkModeStyle} data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                Accordion Item #2
                            </button>
                        </h2>
                        <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                            <div className="accordion-body">
                                <strong>This is the second item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classNamees that we use to style each element. These classNamees control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                            </div>
                        </div>
                    </div>
                    <div className="accordion-item" style={darkModeStyle}>
                        <h2 className="accordion-header" id="headingThree">
                            <button className="accordion-button collapsed" type="button" style={darkModeStyle} data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                Accordion Item #3
                            </button>
                        </h2>
                        <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                            <div className="accordion-body">
                                <strong>This is the third item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classNamees that we use to style each element. These classNamees control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}
