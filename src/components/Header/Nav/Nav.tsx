import s from './Nav.module.css';
import {NavLink} from 'react-router-dom';
import Search from '../Search/Search';

function Nav() {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light " role={'navbar'}>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav mr-auto ms-5">
                    <li className="nav-item">
                        <NavLink to='/' className={`${s.noDecoration} nav-link`}>Home</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink to='/aboutUs' className={`${s.noDecoration} nav-link`}>About Us</NavLink>
                    </li>
                </ul>
            </div>
            <Search/>
        </nav>
    )
}

export default Nav