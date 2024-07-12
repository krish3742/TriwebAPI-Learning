import Style from './Login.module.css';
function Login() {
    return (
        <div className={Style.outerContainer}>
            <div className={Style.innerContainer}>
                <div className={Style.heading}>
                    <h2>Quiz Manager Login</h2>
                </div>
                <div>
                    <p className={Style.para}>use your registered account to login</p>
                </div>
                <div>
                    <label for="Email ID"></label>
                    <input type="text" id="Name" placeholder="Email ID" className={Style.input}></input>
                </div>
                <div>
                    <label for="Password"></label>
                    <input type="password" id="Password" placeholder="Password" className={Style.input}></input>
                </div>
                <div>
                    <p className={Style.forgot}>Forgot your password?</p>
                </div>
                <div>
                    <button className={Style.button}>Login</button>
                </div>
            </div>
        </div>
    )
};

export default Login;