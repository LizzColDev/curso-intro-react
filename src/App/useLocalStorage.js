import React, { useReducer } from "react";

function useLocalStorage(itemName, initialValue){
  const [state, dispatch] = useReducer(reducer, initialState({initialValue}));

  const {
    synchronizedItem,
    error,
    loading,
    item,
  } = state

  // action creators
  const onError = (error) => dispatch({type: actionTypes.error, payload: error}) 
  const onSucces = (item) => dispatch({type: actionTypes.succes, payload: item}) 
  const onSave = (item) => dispatch({type: actionTypes.save, payload: item}) 
  const onSynchronize = () => dispatch({type: actionTypes.synchronize}) 
    
  React.useEffect(() => {
      setTimeout(() => {
        try {
          const localStorageItem = localStorage.getItem(itemName);
          let parsedItem;
          
          if(!localStorageItem){
            localStorage.setItem(itemName, JSON.stringify(initialValue));
            parsedItem =initialValue;
          }else{
            parsedItem = JSON.parse(localStorageItem);
          }
    
          onSucces(parsedItem);

        } catch (error){
          onError(error) 

        }

      }, 3000);
    }, [synchronizedItem])
    
    
    const synchronizeItem = () =>{
      onSynchronize()
    }


      const saveItem = (newItem) =>{
        try{
          const stringifiedItem = JSON.stringify(newItem);
          localStorage.setItem(itemName, stringifiedItem);
          onSave(newItem)
    } catch(error){
      onError(error)
    }
    };



    return {
      item, 
      saveItem,
      loading,
      error,
      synchronizeItem,
    }
  };

  const initialState = ({initialValue}) =>({
    synchronizedItem: true,
    error: false,
    loading: true,
    item: initialValue
  });

  const actionTypes ={
    error: 'ERROR',
    succes: 'SUCCES',
    save: 'SAVE',
    synchronize: 'SYNCHRONIZE'
  }
  const reducerObject = (state, payload) => ({
    [actionTypes.error]: {
      ...state,
      error: true
    },
    [actionTypes.succes]: {
      ...state,
      error: false,
      succes: true,
      loading: false,
      synchronizedItem: true,
      item: payload 
    },
    [actionTypes.save]: {
      ...state,
      item: payload 
    },
    [actionTypes.synchronize]: {
      ...state,
      loading: true,
      synchronizedItem: false, 
    }
  })

  const reducer = (state, action) => {
    return reducerObject(state, action.payload)[action.type] || state;
  }

  export {useLocalStorage};