import {NavLink} from 'react-router-dom';
import classes from './Navbar.module.css';

const Navbar = (props) => {
    let links = [
        {id: 1, src: '/profile', name: 'Profile'},
        {id: 1, src: '/dialogs', name: 'Messages'},
        {id: 1, src: '/news', name: 'News'},
        {id: 1, src: '/music', name: 'Music'},
        {id: 1, src: '/settings', name: 'Settings'},
    ];
    let navList = links.map((el) => {
        return (
            <div className={classes.nav__link}>
                <NavLink to={el.src} activeClassName={classes.active_link} className="my-2">
                    {el.name}
                </NavLink>
            </div>
        );
    });

    return (
        <nav className={classes.nav}>
            <div>{navList}</div>
        </nav>
    );
};

export default Navbar;
