import React from "react";
import DinnerMenuContent from "../components/DinnerMenuContent.js";

function DinnerMenu() {
    return (
        <div className="menuBackgroundColor">
            <div className="menuTimes">
                <div className="menuTimesContent">
                    <div className="menuTimesSection">
                        <a href="/menu">&nbsp;&nbsp;ALL DAY&nbsp;&nbsp;</a>
                    </div>
                    <div className="menuTimesSection">
                        <a href="/menu/lunch">&nbsp;&nbsp;LUNCH&nbsp;&nbsp;</a>
                    </div>
                    <div className="menuTimesSection">
                        <a href="/menu/dinner">&nbsp;&nbsp;DINNER&nbsp;&nbsp;</a>
                    </div>
                    <div className="menuTimesSection">
                        <a href="/menu/drinks">&nbsp;&nbsp;DRINKS&nbsp;&nbsp;</a>
                    </div>
                </div>
            </div>
            <div className="menuHeader">
                <h2>DINNER MENU</h2>
            </div>
            <div className="menuHeaderTimes">
                <p>3PM TO CLOSE</p>
            </div>
            <div className="menuBackground">
                <DinnerMenuContent />
            </div>
        </div>
    );
}

export default DinnerMenu;