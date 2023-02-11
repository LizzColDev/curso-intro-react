import React from "react";
import { IconCompleted } from "../IconCompleted";
import { IconDeleted } from "../IconDeleted";
import './TodoItem.css';

function TodoItem(props){
    return(
        <li className="TodoItem">
            <span 
                className={`Icon Icon-check ${props.completed && 'Icon-check--active'}`}
                onClick={props.onComplete}
            >
                <IconCompleted />
            </span>
            <p className={`TodoItem-p ${props.completed && 'TodoItem-p--complete'}`}>
                {props.text}
            </p>
            <span 
                className="Icon Icon-delete"
                onClick={props.onDelete}
            >
                <IconDeleted />
            </span>
        </li>
    );
}

export {TodoItem};