import React from "react";
import DrinksMenuContent from "../components/DrinksMenuContent.js";

function DrinksMenu() {
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
                <h2>DRINKS MENU</h2>
            </div>
            <div className="menuBackground">
                <DrinksMenuContent />
            </div>
        </div>
    );
}

export default DrinksMenu;