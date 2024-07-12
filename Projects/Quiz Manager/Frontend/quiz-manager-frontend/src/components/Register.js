import { Link } from 'react-router-dom';
import Style from './Register.module.css';
function Register() {
    return (
        <div className={Style.outerContainer}>
            <div className={Style.innerContainer}>
                <div className={Style.heading}>
                    <h2>Quiz Manager Registration</h2>
                </div>
                <div>
                    <p className={Style.para}>use your account to register</p>
                </div>
                <div>
                    <label htmlFor="Name"></label>
                    <input type="text" id="Name" placeholder="Name" className={Style.input}></input>
                </div>
                <div>
                    <label htmlFor="Email ID"></label>
                    <input type="text" id="EmailId" placeholder="Email ID" className={Style.input}></input>
                </div>
                <div>
                    <label htmlFor="Password"></label>
                    <input type="password" id="Password" placeholder="Password" className={Style.input}></input>
                </div>
                <div>
                    <button className={Style.button}>Register</button>
                </div>
                <div>
                    <button className={Style.button}>
                        <Link to='/login' className={Style.link}>Login</Link>
                    </button>
                </div>
            </div>
        </div>
    )
};

export default Register;