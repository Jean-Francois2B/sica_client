import "./register.css"

export default function Register() {
    return (
        <div className="register">
            <div className="registerWrapper">
                <div className="registerLeft">
                    <h3 className="registerLogo">Sica</h3>
                    <span className="registerDesc">Connect with the musical world on Sica</span>
                </div>
                <div className="registerRight">
                    <div className="registerBox">
                        <input placeholder="Username" className="registerInput" />
                        <input placeholder="Email" className="registerInput" />
                        <input placeholder="Password" className="registerInput" />
                        <input placeholder="Confirm password" className="registerInput" />
                        <button className="registerButton">Sign up</button>
                        <button className="registerRegisterButton">Log into account</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
