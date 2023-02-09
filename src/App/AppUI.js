import React from "react";
import { TodoCounter } from "../TodoCounter";
import { TodoSearch } from "../TodoSearch";
import { TodoList } from "../TodoList";
import { CreateTodoButton } from "../CreateTodoButton";
import { TodoItem } from "../TodoItem";

function AppUI({
    loading,
    error,
    totalTodos,
    completedTodos,
    searchValue,
    setSearchValue,
    searchedTodos,
    completeTodo,
    deleteTodo,
}){
    return(
        <React.Fragment>
        <TodoCounter
          total = {totalTodos}
          completed = {completedTodos}
        />
        <TodoSearch
          searchValue={searchValue}
          setSearchValue = {setSearchValue}
        />
  
        <TodoList>
          {error && <p>Pailander el inmortal</p>}
          {loading && <p>Estamos cargando</p>}
          {(!loading && !searchedTodos.length) && <p>Crea tu primer TODO!</p>}


          {searchedTodos.map(todo => (
          <TodoItem 
            key={todo.text} 
            text={todo.text} 
            completed={todo.completed}
            onComplete={()=> completeTodo(todo.text)}
            onDelete={() => deleteTodo(todo.text)}
            />
          ))} 
        </TodoList>
        <CreateTodoButton/>
          
      </React.Fragment>
    );
}

export {AppUI};