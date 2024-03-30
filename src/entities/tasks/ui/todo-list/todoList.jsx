import React from 'react';
import TodoItem from "../todo-item/todoItem";
import { useSelector } from "react-redux";
import styles from "./styles.module.scss";

const TodoList = () => {
    const todos = useSelector((state)=>{
        return state.tasks;
    });

    return (
        <ul className={styles.taskslist}>
            {todos.map((todo) => (
                <TodoItem id={todo.id} title={todo.name} completed={todo.status} />
            ))}
        </ul>
    );
};

export default TodoList;
