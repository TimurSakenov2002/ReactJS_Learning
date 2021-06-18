import s from './Dialogs.module.css';
import {NavLink} from 'react-router-dom'

function DialogItem(props){
    let path = "/dialogs/" + props.id;

    return(
        <div className={s.active}>
             <NavLink to={path}>{props.name}</NavLink>
        </div>
    )
}

function Message(props){
    return(
        <div className={s.message}>{props.message}</div>
    )
}

function Dialogs(props){

    let dialogs = [
        {id : 1, name : 'Timur'},
        {id : 2, name : 'Alex'},
        {id : 3, name : 'John'},
        {id : 4, name : 'Chris'},
        {id : 5, name : 'Ryan'}
    ]
    
    let messages = [
        {id : 1, message : 'Helloooooooooo'},
        {id : 2, message : 'Hi'},
        {id : 3, message : 'Whats up?'},
        {id : 4, message : 'Qq'},
        {id : 5, message : 'Privet'}
    ]
    
    let dialogsElement = dialogs.map(d => <DialogItem name={d.name} id={d.id}/>);
    let messagesElements = messages.map(m => <Message message={m.message}/>);

    return(
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElement}
            </div>
            <div className={s.messages}>
                {messagesElements}
            </div>
        </div>
    )
}
export default Dialogs;