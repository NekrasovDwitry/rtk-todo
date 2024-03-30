import React, { useState } from 'react';
import { useDispatch } from "react-redux";
import {addTask} from "../../model/tasksSlice";
import styles from "./styles.module.scss";
const AddTodo = () => {
    const [value, setValue] = useState('');

    const dispatch = useDispatch();

    const onSubmit = (event) => {
        event.preventDefault();

        if(value.trim().length === 0)
        {
            alert("Enter a task before adding !!");
            setValue("");
            return;
        }

        dispatch(
            addTask({
                task: value
            })
        );

        setValue("");
    };

    return (
        <div className={styles.addtodo}>
            <input
                type="text"
                className={styles.taskinput}
                placeholder="Add task"
                value={value}
                onChange={(event) => setValue(event.target.value)}
            ></input>

            <button className={styles.taskbutton} onClick={onSubmit}>
                Add task
            </button>
        </div>
    );
};

export default AddTodo;