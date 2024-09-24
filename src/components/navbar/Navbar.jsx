import React, { useState } from "react";
import "./navbar.scss";

function Navbar() {
    const [isPropertyDropdownOpen, setIsPropertyDropdownOpen] = useState(false);
    const [isContactDropdownOpen, setIsContactDropdownOpen] = useState(false);

    return (
        <nav>
            {/* Left side with Logo */}
            <div className="left">
                <a href="/">
                    <img src="./logo.png" alt="Logo" />
                </a>
            </div>

            {/* Right side with navigation links */}
            <div className="right">
                <a href="/">Beranda</a>
                
                {/* Daftar Property with dropdown */}
                <div 
                    className="dropdown"
                    onMouseEnter={() => setIsPropertyDropdownOpen(true)}
                    onMouseLeave={() => setIsPropertyDropdownOpen(false)}
                >
                    <a href="/property">
                        Daftar Property
                        {/* Panah yang berbentuk huruf 'v' */}
                        <span className={`arrow ${isPropertyDropdownOpen ? "rotate" : ""}`}>v</span>
                    </a>
                    {isPropertyDropdownOpen && (
                        <div className="dropdown-menu">
                            <a href="/rumah">Rumah</a>
                            <a href="/tanah">Tanah</a>
                            <a href="/gudang">Gudang</a>
                            <a href="/semua-property">Semua Properti</a>
                        </div>
                    )}
                </div>

                <a href="/titip-listing">Titip Listing</a>
                <a href="/joint-agent">Joint Agent</a>

                {/* Kontak Kami with dropdown */}
                <div
                    className="dropdown"
                    onMouseEnter={() => setIsContactDropdownOpen(true)}
                    onMouseLeave={() => setIsContactDropdownOpen(false)}
                >
                    <a href="/kontak" className="contact-button">Kontak Kami</a>
                    {isContactDropdownOpen && (
                        <div className="dropdown-menu">
                            <a href="/admin1">Admin 1</a>
                            <a href="/admin2">Admin 2</a>
                        </div>
                    )}
                </div>
            </div>
        </nav>
    );
}

export default Navbar;