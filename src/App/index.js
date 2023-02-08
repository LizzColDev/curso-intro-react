import React from "react";
import { AppUI } from "./AppUI";

// const defaultTodos = [ 
//   {text: 'Meterse a bañar a las 6pm', completed: false},
//   {text: 'Cenar 6:45pm', completed: false},
//   {text: 'Dormir 7:20pm', completed: false},
//   {text: 'Levantarse 5:20am', completed: false},
// ]
function App() {
  const localStorageTodos = localStorage.getItem('TODOS_V1');
  let parsedTodos;
  
  if(!localStorageTodos){
    localStorage.setItem('TODOS_V1', JSON.stringify([]));
    parsedTodos = [];
  }else{
    parsedTodos = JSON.parse(localStorageTodos);
  }
  const [todos, setTodos] = React.useState(parsedTodos);
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

  const saveTodos = (newTodos) =>{
    const stringifiedTodos = JSON.stringify(newTodos);
    localStorage.setItem('TODOS_V1', stringifiedTodos);
    setTodos(newTodos);
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
  }

  return (
      <AppUI
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
