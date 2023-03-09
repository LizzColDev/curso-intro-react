import React from 'react';
import { WithStorageListener } from './withStorageListener';

const ChangeAlert=({show,toggleShow})=>{
    if(show){
        return (
            <div>
        <p>Hubo cambios</p>
        <button
            onClick={()=>toggleShow(false)}
            >
                Volver a cargar la información 
        </button>
            </div>)}
    else{return null}
}
const ChangeAlertWithStorageListener = WithStorageListener(ChangeAlert)
export {ChangeAlertWithStorageListener}