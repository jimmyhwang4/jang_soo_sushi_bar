import React from "react";

function Contact() {
    return (
        <div className="menuBackgroundColor">
            <div className="menuBackground">
                <div className="column">
                    <div className="menuHeader">
                        <h2>CONTACT US</h2>
                    </div>
                    <div className="contactText">
                        <p>To make a reservation or to order for take-out, please call:</p>
                        <div className="yellowText">
                            <a href="tel:562-924-2498">(562) 924-2498</a>
                        </div>
                        <p><br></br></p>
                        <p>For questions, comments, or suggestions, please reach us at:</p>
                        <div className="yellowText">
                            <p>jangsoosushibar@gmail.com</p>
                        </div>
                        <p><br></br></p>
                        <p>For press inquiries, please reach us at:</p>
                        <div className="yellowText">
                            <p>jangsoo.press@gmail.com</p>
                        </div>
                        <p><br></br></p>
                        <p>Jang Soo Sushi Bar</p>
                        <div className="yellowText">
                            <a href="https://www.google.com/maps/place/Jang+Soo+Sushi+Bar+Restaurant/@33.8336871,-118.0705251,14.72z/data=!4m5!3m4!1s0x0:0x5414563e9a071725!8m2!3d33.8319322!4d-118.0636317" target="_blank" rel="noopener noreferrer">
                            <p>12591 E Carson Street<br>
                            </br>
                            Hawaiian Gardens, CA 90716</p>
                            </a>
                        <p><br></br></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Contact;