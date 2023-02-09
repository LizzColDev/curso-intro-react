import React from "react";
import { TodoContext } from "../TodoContext";
import { TodoCounter } from "../TodoCounter";
import { TodoSearch } from "../TodoSearch";
import { TodoList } from "../TodoList";
import { CreateTodoButton } from "../CreateTodoButton";
import { TodoItem } from "../TodoItem";


function AppUI(){
    return(
      <React.Fragment>
        <TodoCounter/>
        <TodoSearch/>

        <TodoContext.Consumer>
          {({error, loading, searchedTodos, toogleTodo, deleteTodo})=> (
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
          )}
        </TodoContext.Consumer>
        <CreateTodoButton/>
          
      </React.Fragment>
    );
}

export {AppUI};