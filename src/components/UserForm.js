const GoToLogIn = () => <p>Already a user? <a href='/login'>Sign in</a></p>;

const GoToSignUp = () => <p>Already a user? <a href='/login'>Sign in</a></p>;

export default function UserForm({type = "sign-up", onSubmit = f => f}) {
    const isSignInForm = type === 'sign-in';

    return <form id={type} >
        <div className="input-row">
            <label htmlFor="login">Username</label>
            <input type="text" id="login" name="login" placeholder="johndoe_91"/>
        </div>
        <div className="input-row">
            <label htmlFor="password">Password</label>
            <input type="password" id="password" name="password" placeholder={isSignInForm ? "Enter Your Password" : "Choose Password"}/>
        </div>
        <button type="submit" className="primary-btn">{isSignInForm ? "Login" : "Create an account"}</button>
        {isSignInForm && <GoToSignUp />}
        {!isSignInForm && <GoToLogIn />}
    </form>
}