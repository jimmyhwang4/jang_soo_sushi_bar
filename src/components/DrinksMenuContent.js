import React from "react";

function DrinksMenuContent() {
    return (
        <div className="menuContainerThin">

            <div className="menuSingleRow">
                <div className="menuSingleSectionTitle">
                    <h2>Special Sake</h2>
                    <div className="menuSection">
                        <div className="menuColumn">
                            <p>Kubota (L)</p>
                            <p>Kubota (M)</p>
                            <p>Onikoroshi (L)</p>
                            <p>Onikoroshi (M)</p>
                        </div>
                        <div className="menuColumn">
                            <p>$220</p>
                            <p>$90</p>
                            <p>$150</p>
                            <p>$70</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="menuSingleRow">
                <div className="menuSingleSectionTitle">
                    <h2>Sake</h2>
                    <div className="menuSection">
                        <div className="menuColumn">
                            <p>Bottle (L)</p>
                            <p>Bottle (S)</p>
                            <p>Cup</p>
                        </div>
                        <div className="menuColumn">
                            <p>$8.50</p>
                            <p>$4.50</p>
                            <p>$8.50</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="menuSingleRow">
                <div className="menuSingleSectionTitle">
                    <h2>Soju</h2>
                    <div className="menuSection">
                        <div className="menuColumn">
                            <p>Chamisul</p>
                            <p>Chum Churum</p>
                        </div>
                        <div className="menuColumn">
                            <p>$10.00</p>
                            <p>$10.00</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="menuSingleRow">
                <div className="menuSingleSectionTitle">
                    <h2>Beer</h2>
                    <div className="menuSection">
                        <div className="menuColumn">
                            <p>Cass</p>
                            <p>Hite</p>
                            <p>Kloud</p>
                            <p>OB</p>
                            <p>Asahi Sapporo (L)</p>
                            <p>Asahi Sapporo (M)</p>
                            <p>Coors Light (S)</p>
                            <p>Sapporo Draft (Pitcher)</p>
                            <p>Sapporo Draft (Glass)</p>
                        </div>
                        <div className="menuColumn">
                            <p>$6.00</p>
                            <p>$6.00</p>
                            <p>$6.00</p>
                            <p>$6.00</p>
                            <p>$7.00</p>
                            <p>$4.00</p>
                            <p>$4.00</p>
                            <p>$12.99</p>
                            <p>$2.99</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="menuSingleRow">
                <div className="menuSingleSectionTitle">
                    <h2>Soda</h2>
                    <div className="menuSection">
                        <div className="menuColumn">
                            <p>Coca Cola</p>
                            <p>7UP</p>
                            <p>Diet Coke</p>
                            <div className="br">
                                <p><br /></p>
                            </div>
                        </div>
                        <div className="menuColumn">
                            <p>$2.00</p>
                            <p>$2.00</p>
                            <p>$2.00</p>
                            <div className="br">
                                <p><br /></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
        </div>
    );
}

export default DrinksMenuContent;