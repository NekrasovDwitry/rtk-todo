import React from 'react';
import { useDispatch } from "react-redux";
import { deleteTask } from "../../model/tasksSlice";
import styles from "./styles.module.scss";

const TodoItem = ({ id, title }) => {

    const dispatch = useDispatch();

    const removeTask=()=>{
        dispatch(
            deleteTask({
                id: id
            })
        )
    }

    return (
        <li className={styles.taskitem}>
            <div>
                {title}
            </div>
            <div>
                <button className={styles.removetaskbutton} onClick={()=>{
                    removeTask();
                }}>Delete</button>
            </div>
        </li>
    );
};

export default TodoItem;