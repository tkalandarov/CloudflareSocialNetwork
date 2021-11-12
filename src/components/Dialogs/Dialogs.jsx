import React from 'react';
import classes from './Dialogs.module.css';

import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';
import ComposeArea from "./ComposeArea";

import {connect} from "react-redux";
import {sendMessage} from "../../redux/dialogsAction";

import preview1 from "../../img/st1.jpg"
import preview2 from "../../img/st2.jpg"
import preview3 from "../../img/st3.jpg"
import preview4 from "../../img/st4.jpg"
import preview5 from "../../img/st5.jpg"


const Dialogs = (props) => {
    const dialogsData = [
        {id: 1, name: 'James', preview: preview1},
        {id: 2, name: 'Daniel', preview: preview2},
        {id: 3, name: 'Jim', preview: preview3},
        {id: 4, name: 'Anna', preview: preview4},
        {id: 5, name: 'Kirill', preview: preview5},
    ];

    let dialogElements = dialogsData.map(el => <DialogItem id={el.id} preview={el.preview} name={el.name} key={el.id}/>);
    // let messageElements = props.messages.map(el => <Message message={el.msg} id={el.id}/>)

    return (
        <div className={classes.Dialogs}>
            <div className={classes.DialogList}>
                {dialogElements}
            </div>
            <div className={classes.ActiveDialog}>
                <div className="alert alert-warning" role="alert">
                    This functionality is not implemented yet =)
                </div>
                <ComposeArea/>
            </div>
        </div>
    );
};

const mapDispatchToProps = {
    sendMessage
}

const mapStateToProps = state => {
    return {
        messages: state.dialogsReducer.messages
    };
}
export default connect(mapStateToProps, mapDispatchToProps)(Dialogs);