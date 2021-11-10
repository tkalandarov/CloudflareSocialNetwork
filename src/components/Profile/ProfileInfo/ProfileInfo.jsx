import classes from './ProfileInfo.module.css';
import avatar from "../../../img/avatar.jpg"

const ProfileInfo = () => {
    return (
        <div className={classes.content__header}>
            <img className={classes.content__avatar} src={avatar} alt="avatar"/>
            <span className={classes.content__nickname}>@tkalandarov<br/></span>
            <span className={classes.content__author}>Timur Kalandarov</span>
        </div>
    )
};


export default ProfileInfo;