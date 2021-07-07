export const addTodoHelper = (todos, newTodo) => {
  return [...todos, newTodo];
};

export const editTodoHelper = (todos, editedTodo) => {
  return [
    ...todos.map((todo) => (todo.id === editedTodo.id ? editedTodo : todo)),
  ];
};

export const deleteTodoHelper = (todos, id) => {
  return todos.filter((todo) => todo.id !== id);
};

export const toggleCompleteTodoHelper = (todos, id) => {
  return [
    ...todos.map((todo) =>
      todo.id === id ? { ...todo, done: !todo.done } : todo
    ),
  ];
};
