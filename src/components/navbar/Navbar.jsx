import "./navbar.scss"

function Navbar() {
    return (
        <nav>
            <div className="left">
                <a href="/">
                    <img src="./logo.png" alt="" srcset="" />
                    <span>Property Consultant</span>
                </a>
            </div>
            <div className="right">
                <a href="/">Home</a>
                <a href="/">Buy Property</a>
                <a href="/">Sell Property</a>
                <a href="/">About Us</a>
                <a href="/">Contact</a>
            </div>
        </nav>
    )
}

export default Navbar;