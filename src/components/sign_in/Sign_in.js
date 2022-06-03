import "./sign_in.css";

const SignIn = ({ isShowSignIn }) => {

    var form_position = isShowSignIn ? "sign-in__form_active" : "sign-in__form_inactive";

    return (
        <div className= { form_position }>
            <div className="sign-in__title">
                <p>Sign in</p>
            </div>

            <div className="sign-in__section">
                <label className="form-text sign-in__label">First Name</label>
                <input className="form-text form-input sign-in__firstname-input"></input>
            </div>

            <div className="sign-in__section">
                <label className="form-text sign-in__label">Last Name</label>
                <input className="form-text form-input sign-in__lastname-input"></input>
            </div>

            <div className="sign-in__section">
                <label className="form-text sign-in__label">Email</label>
                <input className="form-text form-input sign-in__email-input"></input>
            </div>
            
            <div className="sign-in__section"> 
                <label className="form-text sign-in__label">Password</label>
                <input className="form-text form-input sign-in__password-input"></input>
            </div>
            
            <div className="sign-in__section">
                <label className="form-text sign-in__label">Confirm Password</label>
                <input className="form-text form-input sign-in__confirm-password-input"></input>
            </div>

            <div className="sign-in__buttons">
                <button className="button sign-in__cancel-button">Cancel</button>
                <button className="button sign-in__sign-button">Sign in</button>
            </div>
            
        </div>
    );
}
 
export default SignIn;