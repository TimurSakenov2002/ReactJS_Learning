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
    return(
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                <DialogItem name="Timur" id="1"/>
                <DialogItem name="Alex" id="2"/>
                <DialogItem name="John" id="3"/>
                <DialogItem name="Chris" id="4"/>
                <DialogItem name="Ryan" id="5"/>
            </div>
            <div className={s.messages}>
                <Message message="Helloooooooooo"/>
                <Message message="Hi!"/>
                <Message message="What's up?"/>
                <Message message="Qq"/>
                <Message message="Privet"/>
            </div>
        </div>
    )
}
export default Dialogs;