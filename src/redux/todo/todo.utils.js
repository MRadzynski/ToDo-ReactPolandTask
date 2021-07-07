export const addTodo = (todos, newTodo) => {
  return [...todos, newTodo];
};

export const deleteTodo = (todos, id) => {
  return todos.filter((todo) => todo.id !== id);
};
