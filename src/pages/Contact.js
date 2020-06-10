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
                            <p>12591 E Carson Street<br>
                            </br>
                            Hawaiian Gardens, CA 90716</p>
                        <p><br></br></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Contact;