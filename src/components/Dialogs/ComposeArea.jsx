import React from 'react';
import classes from "./ComposeArea.module.css";

import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faPaperclip, faPaperPlane, faSmile} from '@fortawesome/free-solid-svg-icons'

const ComposeArea = (props) => {
    return (
        <div className={classes.composeWrapper}>
            <FontAwesomeIcon icon={faPaperclip}/>
            <input type="text" placeholder="Write a message..."></input>
            <FontAwesomeIcon icon={faSmile}/>
            <FontAwesomeIcon icon={faPaperPlane} color={"#6690C1"}/>
        </div>
    );
}

export default ComposeArea;