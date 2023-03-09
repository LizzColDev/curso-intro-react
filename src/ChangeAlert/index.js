import React from 'react';
import { WithStorageListener } from './withStorageListener';
import './ChangeAlert.css'
const ChangeAlert=({show,toggleShow})=>{
    if(show){
        return (
            <div className='ChangeAlert-bg'>
                <div className='ChangeAlert-container'>
                    <p>It seems like you changed your TODOs in another tab or window of the browser</p>
                    <p>Do you want to synchronize your TODOs?</p>
                    <button 
                        className="TodoForm-button TodoForm-button--add"
                        onClick={()=>toggleShow(false)}
                    >
                        Sync TODOs! 
                    </button>
                </div>
            </div>)}
    else{return null}
}
const ChangeAlertWithStorageListener = WithStorageListener(ChangeAlert)
export {ChangeAlertWithStorageListener}