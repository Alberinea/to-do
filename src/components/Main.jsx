import { useState } from 'react';
import Todos from '../components/Todos';
import users from '../data/users';
import todos from '../data/todos';

const Main = () => {
  const [newTodo, setNewTodo] = useState('');
  const [todosList, setTodosList] = useState(todos);
  const [triggerArray, setTriggerArray] = useState([]);

  const addNewTodo = (userId) => {
    if (newTodo === '') return;

    const todosCopy = [...todosList];
    todosCopy.push({
      userId: userId,
      id: todos.length + 1,
      title: newTodo,
      completed: false,
    });
    setTodosList(todosCopy);
    setNewTodo('');
  };

  const toggleTodo = (todoId) => {
    const todosCopy = [...todosList];
    const todo = todosCopy.find((todo) => todo.id === todoId);
    todo.completed = !todo.completed;
    setTodosList(todosCopy);
  };

  const deleteTodo = (todoId) => {
    const todosCopy = [...todosList];
    todosCopy.splice(
      todosCopy.findIndex((todo) => todo.id === todoId),
      1
    );
    setTodosList(todosCopy);
  };

  const mutateTriggerArray = (userId) => {
    const triggerArrayCopy = [...triggerArray];
    if (triggerArrayCopy.includes(userId)) {
      triggerArrayCopy.splice(triggerArrayCopy.indexOf(userId), 1);
    } else {
      triggerArrayCopy.push(userId);
    }
    setTriggerArray(triggerArrayCopy);
  };

  return (
    <main className="w-100 py-5">
      <section className="container">
        <Todos
          users={users}
          todosList={todosList}
          newTodo={newTodo}
          triggerArray={triggerArray}
          setNewTodo={setNewTodo}
          addNewTodo={addNewTodo}
          toggleTodo={toggleTodo}
          deleteTodo={deleteTodo}
          mutateTriggerArray={mutateTriggerArray}
        />
      </section>
    </main>
  );
};

export default Main;
