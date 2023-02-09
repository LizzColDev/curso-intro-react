import React from "react";
import { AppUI } from "./AppUI";

// const defaultTodos = [ 
//   {text: 'Meterse a bañar a las 6pm', completed: false},
//   {text: 'Cenar 6:45pm', completed: false},
//   {text: 'Dormir 7:20pm', completed: false},
//   {text: 'Levantarse 5:20am', completed: false},
// ]

function useLocalStorage(itemName, initialValue){
  const [loading, setLoading] = React.useState(true);
  const[item, setItem] = React.useState(initialValue);
  
  React.useEffect(() => {
    setTimeout(() => {
      const localStorageItem = localStorage.getItem(itemName);
      let parsedItem;
      
      if(!localStorageItem){
        localStorage.setItem(itemName, JSON.stringify(initialValue));
        parsedItem = [];
      }else{
        parsedItem = JSON.parse(localStorageItem);
      }

      setItem(parsedItem);
      setLoading(false);
    }, 1000);
  }, [initialValue, itemName])
  
    const saveItem = (newItem) =>{
    const stringifiedItem = JSON.stringify(newItem);
    localStorage.setItem(itemName, stringifiedItem);
    setItem(newItem);
  }
  return {
    item, 
    saveItem,
    loading
  }
}

function App() {
  const {
    item : todos,
    saveItem: saveTodos,
    loading,    
  } = useLocalStorage('TODOS_V1', []);

  const [searchValue, setSearchValue] = React.useState('');

  const completedTodos = todos.filter(todo => !!todo.completed).length;
  const totalTodos = todos.length;

  let searchedTodos = [];

  if(!searchValue.length >= 1){
    searchedTodos = todos;
  } else {
    searchedTodos = todos.filter(todo => {
      const todoText = todo.text.toLowerCase();
      const searchText = searchValue.toLowerCase();
      return todoText.includes(searchText);
;    })
  }


  const toogleTodo = (text) => {
    const todoIndex = todos.findIndex(todo => todo.text === text);
    const newTodos = [...todos];
    const todoSelected = newTodos[todoIndex]
    if(!todoSelected.completed){
      todoSelected.completed= true;  
    } else{
      todoSelected.completed= false;
    }
    saveTodos(newTodos);
  };

  const deleteTodo = (text) => {
    const todoIndex = todos.findIndex(todo => todo.text === text);
    const newTodos = [...todos];
    newTodos.splice(todoIndex, 1)
    saveTodos(newTodos);
  };

  return (
      <AppUI
      loading={loading}
      totalTodos = {totalTodos}
      completedTodos = {completedTodos}
      searchValue={searchValue}
      setSearchValue = {setSearchValue}
      searchedTodos = {searchedTodos}
      completeTodo = {toogleTodo}
      deleteTodo = {deleteTodo}
      />      
  );
}

export default App;

