import React from "react";
import { useLocalStorage } from "./useLocalStorage";
const TodoContext = React.createContext()

function TodoProvider(props){
    const {
        item : todos,
        saveItem: saveTodos,
        loading,    
      } = useLocalStorage('TODOS_V1', []);
    
      const [searchValue, setSearchValue] = React.useState('');
      const [openModal, setOpenModal] = React.useState(false);

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
      const addTodo = (text) => {
        const newTodos = [...todos];
        newTodos.push({
          completed: false,
          text
        });        
        saveTodos(newTodos);
      };
    
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
        <TodoContext.Provider value={{
          loading,
          totalTodos,
          completedTodos,
          searchValue,
          setSearchValue,
          searchedTodos,
          addTodo,
          toogleTodo,
          deleteTodo,
          openModal,
          setOpenModal
          }}>
          
          {props.children}
        </TodoContext.Provider>

    )
};

export {TodoContext, TodoProvider};