import classes from './../Dialogs.module.css';
import { NavLink } from 'react-router-dom';

const DialogItem = (props) => {
    return (
      <NavLink to={'/dialogs/' + props.preview}>
        <div className={classes.dialog}>
          <div className={classes.circle}>{props.id}</div>
          <div className={classes.person}>{props.preview}</div>
        </div>
      </NavLink>
    );
  };

  export default DialogItem;