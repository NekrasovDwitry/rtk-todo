import AddTodo from "../../entities/tasks/ui/add-todo/addTodo";
import TodoList from "../../entities/tasks/ui/todo-list/todoList";
import styles from "./styles.module.scss";

export function TasksPage() {
    return (
        <div>
            <h1 className={styles.apptitle}>My Tasks</h1>
            <AddTodo />
            <TodoList />
        </div>
    );
}