const compare = (a, b) => {
  const timestampA = a.timestamp;
  const timestampB = b.timestamp;
  const timeInMilisecondsA = Date.parse(timestampA);
  const timeInMilisecondsB = Date.parse(timestampB);

  return timeInMilisecondsA - timeInMilisecondsB;
};

export const addAndSortTodoHelper = (todos, newTodo) => {
  todos.push(newTodo);
  return todos.sort(compare);
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
