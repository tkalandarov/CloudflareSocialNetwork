import {NavLink} from 'react-router-dom';
import classes from './Navbar.module.css';

const Navbar = (props) => {
    const links = [
        {id: 1, src: '/feed', name: 'Feed'},
        {id: 2, src: '/profile', name: 'Profile'},
        {id: 3, src: '/dialogs', name: 'Messages'},
        {id: 4, src: '/music', name: 'Music'},
        {id: 5, src: '/settings', name: 'Settings'},
    ];
    let navList = links.map((el) => {
        return (
            <div className={classes.nav__link} key={el.id}>
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
