import s from './Header.module.css';
import {NavLink} from "react-router-dom";

function Header(props) {
    return (
        <header className={s.header}>
            <img src="https://cdn.worldvectorlogo.com/logos/swift-logo-with-text.svg"/>
            <div className={s.loginBlock}>
                {props.isAuth
                    ? <div>{props.login} - <button onClick={props.logout}>Log-out</button></div>
                    : <NavLink to={'/login'}>
                        <span className={s.loginText}>Login</span>
                    </NavLink>}
            </div>
        </header>
    )
}

export default Header;