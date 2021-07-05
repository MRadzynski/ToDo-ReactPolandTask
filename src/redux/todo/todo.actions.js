import { TodoActionTypes } from "./todo.types";

export const addTodo = (todo) => ({
    type: TodoActionTypes.ADD_TODO,
    payload: todo,
});

export const editTodo = () => ({
    type: TodoActionTypes.EDIT_TODO,
});

export const deleteTodo = (id) => ({
    type: TodoActionTypes.DELETE_TODO,
    payload: id
});