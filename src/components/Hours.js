import React from "react";

function Hours() {
    return (
        <div className="hoursContainer">
            <div className="mobileTitle">
                <h3>HOURS</h3>
            </div>
            <div className="hoursDay">
                <p>MON</p>
                <p>CLOSED</p>
            </div>
            <div className="hoursDay">
                <p>TUE</p>
                <p>11:30AM - 8PM</p>
            </div>
            <div className="hoursDay">
                <p>WED</p>
                <p>11:30AM - 8PM</p>
            </div>
            <div className="hoursDay">
                <p>THU</p>
                <p>11:30AM - 8PM</p>
            </div>
            <div className="hoursDay">
                <p>FRI</p>
                <p>11:30AM - 8PM</p>
            </div>
            <div className="hoursDay">
                <p>SAT</p>
                <p>11:30AM - 8PM</p>
            </div>
            <div className="hoursDay">
                <p>SUN</p>
                <p>12PM - 8PM</p>
            </div>
        </div>
    );
}

export default Hours;