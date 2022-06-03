import React from "react";


function TodoList({todoList}){
    
    return (
        <div>
            <ul>
                {todoList.map((todo) => (
                    <li key={todo.id}>{todo.title}</li>
                    )
                )}
            </ul>
        </div>
    );
}

export default TodoList;