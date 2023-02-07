import React from "react";
import './CreateTodoButton.css';

function CreateTodoButton(props){
    const onClickButton = (msj) => alert(msj);
    return(
        <button 
        className="CreateTodoButton"
        onClick={()=>onClickButton('aquí modal')}
        >
            +
        </button>
    )
}

export {CreateTodoButton};