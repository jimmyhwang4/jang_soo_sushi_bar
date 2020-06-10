import React from "react";
import GalleryContent from "../components/GalleryContent.js";

function Gallery() {
    return (
        <div className="menuBackgroundColor">
            <div className="menuBackground">
                <div className="column">
                    <div className="menuHeader">
                        <h2>GALLERY</h2>
                    </div>
                    <div className="gallerySize">
                        <GalleryContent />
                    </div>
                    <p><br></br></p>
                </div>
            </div>
        </div>
    );
}

export default Gallery;