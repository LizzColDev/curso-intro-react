import React from 'react';

const WithStorageListener=(WrappedComponent)=>
{
return function WrappComponentWithStorageListener(props){
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
    props.synchronize();
 }
 
 return (
    <WrappedComponent
    show={storageChange}
    toggleShow={toogleShow}
    />
    )
}
}

export {WithStorageListener}