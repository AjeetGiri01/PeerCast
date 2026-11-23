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
                <div></div>
                <div></div>
            </div>

        </div>
    );
}
