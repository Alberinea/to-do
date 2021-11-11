import { useState } from 'react';
import users from '../data/users';
import todos from '../data/todos';

const Main = () => {
  const [newTodo, setNewTodo] = useState('');

  const addNewTodo = (userId) => {
    todos.push({
      userId: userId,
      id: todos.length + 1,
      title: newTodo,
      completed: false,
    });
    setNewTodo('');
  };

  return (
    <main className="w-100 py-5">
      <section className="container">
        {users.map((user) => {
          return (
            <div className="py-4" key={user.id}>
              <h2 className="pb-3">{user.name}</h2>
              <div className="flex flex-row">
                <input
                  type="text"
                  placeholder="Add new todo"
                  className="form-control my-3"
                  onChange={(e) => setNewTodo(e.target.value)}
                />
                <button
                  onClick={() => addNewTodo(user.id)}
                  className="btn btn-primary mb-3"
                >
                  Confirm
                </button>
              </div>
              {todos.map((todo) => {
                if (todo.userId === user.id) {
                  return (
                    <div className="form-check" key={todo.id}>
                      <input
                        className="form-check-input"
                        type="checkbox"
                        defaultChecked={todo.completed}
                        id={todo.id}
                      />
                      <div>
                        <label htmlFor={todo.id} className="form-check-label">
                          {todo.title}
                        </label>
                      </div>
                    </div>
                  );
                }
                return null; // return null if the userId doesn't match
              })}
            </div>
          );
        })}
      </section>
    </main>
  );
};

export default Main;
