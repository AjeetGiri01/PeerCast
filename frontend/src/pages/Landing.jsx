import "../App.css";

export default function LandingPage() {
    return (
        <div className="landingPageContainer">
            <nav>
                <div className="navHeader">
                    <h2>PeerCast</h2>
                </div>
                <div className="navlist">
                    <p>Join as guest</p>
                    <p>Register</p>
                    <div role="button">
                        <p>Login</p>
                    </div>
                </div>
            </nav>

            <div className="landingMainContainer">
                <div>
                    <h1> <span style={{ color: 'orange' }}>Connect</span> with your loved Ones</h1>
                    <p>Cover a distance by PeerCast</p>
                    {/* <div role="button">
                        <Link to={"/home"}>Get Started</Link>
                    </div> */}
                    <div role="button">
                        <a href="/auth">Get Started</a>
                    </div>
                </div>
                <div>
                    <img src="/mobile.png" alt="Mobile App" />
                </div>
            </div>

        </div>
    );
}
