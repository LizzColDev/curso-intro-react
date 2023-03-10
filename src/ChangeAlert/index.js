import React from 'react';
import { useStorageListener } from './useStorageListener';
import './ChangeAlert.css'
const ChangeAlert=({synchronize})=>{
    const {show, toogleShow} = useStorageListener(synchronize);
    if(show){
        return (
            <div className='ChangeAlert-bg'>
                <div className='ChangeAlert-container'>
                    <p>It seems like you changed your TODOs in another tab or window of the browser</p>
                    <p>Do you want to synchronize your TODOs?</p>
                    <button 
                        className="TodoForm-button TodoForm-button--add"
                        onClick={toogleShow}
                    >
                        Sync TODOs! 
                    </button>
                </div>
            </div>)}
    else{return null}
}
export {ChangeAlert}