import { Link } from 'react-router-dom';
import Style from './HomePage.module.css';
function HomePage() {
    return (
        <div className={Style.outerContainer}> 
            <p className={Style.para}>Hello, Welcome to Quiz Manager Application!!</p>
            <button className={Style.button}>
                <Link to='/register' className={Style.link}>
                    Register
                </Link>
            </button>
            <button className={Style.button}>
                <Link to='/login' className={Style.link}>
                    Login
                </Link>
            </button>
        </div>
    )
};

export default HomePage;