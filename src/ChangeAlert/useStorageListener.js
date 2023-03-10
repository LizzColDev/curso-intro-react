import React from 'react';

const useStorageListener=(synchronize)=>
{

 const [storageChange,setStorageChange]= React.useState(false)
 
 React.useEffect(() =>{
    const onChange = (change)=>{
        if(change.key === 'TODOS_V1'){
            console.log('hubo cambios')
            setStorageChange(true)
        }
         }
 window.addEventListener('storage', onChange);
 return()=>{
 window.removeEventListener('storage', onChange);
 } }, [])   

 const toogleShow=()=>{
    setStorageChange(false);
    synchronize();
 }
 
 return {
    show:storageChange,
    toogleShow,
    }
}
    


export {useStorageListener}