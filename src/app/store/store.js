import { configureStore } from "@reduxjs/toolkit";
import taskReducer from "../../entities/tasks/model/tasksSlice";

export default configureStore({
    reducer:{
        tasks: taskReducer,
    }
});