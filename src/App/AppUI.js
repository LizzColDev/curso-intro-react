import React from "react";
import { TodoContext } from "../TodoContext";
import { TodoCounter } from "../TodoCounter";
import { TodoSearch } from "../TodoSearch";
import { TodoList } from "../TodoList";
import { CreateTodoButton } from "../CreateTodoButton";
import { TodoItem } from "../TodoItem";


function AppUI(){
  const {
    error,
    loading, 
    searchedTodos, 
    toogleTodo, 
    deleteTodo
  } = React.useContext(TodoContext);
  
    return(
      <React.Fragment>
        <TodoCounter/>
        <TodoSearch/>
        <TodoList>
          {error && <p>Pailander el inmortal</p>}
          {loading && <p>Estamos cargando</p>}
          {(!loading && !searchedTodos.length) && <p>Crea tu primer TODO!</p>}


          {searchedTodos.map(todo => (
          <TodoItem 
            key={todo.text} 
            text={todo.text} 
            completed={todo.completed}
            onComplete={()=> toogleTodo(todo.text)}
            onDelete={() => deleteTodo(todo.text)}
            />
          ))} 
        </TodoList>

        <CreateTodoButton/>
          
      </React.Fragment>
    );
}

export {AppUI};