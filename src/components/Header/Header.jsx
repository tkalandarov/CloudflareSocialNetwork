import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faSearch} from '@fortawesome/free-solid-svg-icons'

import classes from './Header.module.css';
import logo from "../../img/logo.png"
import avatar from "../../img/avatar.jpg";

const Header = () => {
    return (
        <header className={classes.header}>
            <div className="d-flex align-items-center">
                <img className={classes.logo} src={logo} alt="logo"/>
                <div className={classes.search}>
                    <FontAwesomeIcon icon={faSearch}/>
                    <input type="search" placeholder="Search"/>
                </div>
            </div>
            <div className={classes.profileSection}>
                <span className="ml-4 mr-2">Timur</span>
                <img className={classes.avatar} src={avatar} alt="avatar"/>
            </div>
        </header>
    );
};

export default Header;
