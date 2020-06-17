import React from "react";

function Location() {
    return (
        <div className="locationContainer">
            <div className="mobileTitle">
                <h3>LOCATION</h3>
            </div>
            <div className="locationImage">
                <a href="https://www.google.com/maps/place/Jang+Soo+Sushi+Bar+Restaurant/@33.8336871,-118.0705251,14.72z/data=!4m5!3m4!1s0x0:0x5414563e9a071725!8m2!3d33.8319322!4d-118.0636317" target="_blank" rel="noopener noreferrer">
                    <img alt="google_map" src="location.jpg" width="100%" height="auto"></img>
                </a>
            </div>
            <div className="locationText">
                <p>12591 E Carson Street<br>
                </br>
                Hawaiian Gardens, CA 90716</p>
                <div className="whiteTelephone">
                    <a href="tel:562-924-2498">✆ (562) 924-2498</a>
                </div>
            </div>
        </div>
    );
}

export default Location;