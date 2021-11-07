import classes from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';
import React from 'react';


import { changeCommentAC } from '../../redux/dialogsReducer';
import { addCommentAC } from '../../redux/dialogsReducer';


const Dialogs = (props) => {
  // let dialogsData = [
  //   { id: 1, name: 'dimich1' },
  //   { id: 2, name: 'dimich2' },
  //   { id: 3, name: 'dimich3' },
  //   { id: 4, name: 'hi hitler' },
  // ];
  
  // let messagesData = [
  //   { id: 1, msg: 'heheheh' },
  //   { id: 2, msg: 'How is your it kamasutra???' },
  //   { id: 3, msg: 'Yo' },
  //   { id: 4, msg: 'Yo' },
  // ];


  let dialogElements = props.dialogsData.map( el => <DialogItem preview={el.name} id={el.id}/> );
  let messageElements = props.messagesData.map( el => <Message message={el.msg} id={el.id}/>)


  let addMessage = (e) => {
    let txt = e.target.value;
    props.dispatch(addCommentAC());
  }

  let inputChanging = (e) => {
    
    let txt =e.target.value;
    props.dispatch(changeCommentAC(txt));
  }

  return (
    <div className={classes.Dialogs}>
      <div className={classes.DialogList}>
        {dialogElements}
      </div>

      <div className={classes.ActiveDialog}>
        {messageElements}

        <textarea value={props.newMessageBody}
                onChange={inputChanging}
                />
        <button onClick={ addMessage }> ADD MSG!!! </button>
      </div>
    </div>
  );
};

export default Dialogs;
