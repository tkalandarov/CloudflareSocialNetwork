import classes from './../Dialogs.module.css';
import {NavLink} from 'react-router-dom';

const DialogItem = (props) => {
    return (
        <NavLink to={'/dialogs/' + props.id} className={classes.link}>
            <div className={classes.dialog}>
                <img className={classes.preview} src={props.preview} alt="profile_picture"/>
                <div className={classes.name}>{props.name}</div>
            </div>
        </NavLink>
    );
};

export default DialogItem;