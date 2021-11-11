const Todos = ({
  users,
  todosList,
  newTodo,
  setNewTodo,
  addNewTodo,
  toggleTodo,
  deleteTodo,
}) => {
  return users.map((user) => {
    return (
      <div className="py-4" key={user.id}>
        <h1 className="pb-2 text-danger">
          {user.username}{' '}
          <span className="fs-6 text-black opacity-50 fst-italic">
            {user.email}
          </span>
          <div className="bg-light my-1 p-2 fs-6 text-black">
            <p>Phone: {user.phone}</p>
            <p>Website: {user.website}</p>
            <p>Company: {user.company.name}</p>
          </div>
        </h1>
        <div className="input-group pb-3">
          <input
            type="text"
            placeholder="Add new todo"
            className="form-control"
            onChange={(e) => setNewTodo(e.target.value)}
            value={newTodo === '' ? newTodo : null}
          />
          <button
            onClick={() => addNewTodo(user.id)}
            className="btn btn-outline-primary px-4"
          >
            Add
          </button>
        </div>
        <h4 className="mb-3">
          <mark>
            {
              todosList.filter(
                (todo) => todo.userId === user.id && !todo.completed
              ).length
            }{' '}
            Todos remaining{' '}
          </mark>
        </h4>
        {todosList.map((todo) => {
          if (todo.userId === user.id) {
            return (
              <div
                className="form-check border-bottom py-2 ms-0 ms-sm-3"
                key={todo.id}
              >
                <input
                  className="form-check-input"
                  type="checkbox"
                  defaultChecked={todo.completed}
                  id={todo.id}
                  onChange={() => toggleTodo(todo.id)}
                />
                <div className="position-relative">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="22"
                    height="28"
                    fill="currentColor"
                    className="bi bi-trash position-absolute"
                    viewBox="0 0 16 14"
                    onClick={() => deleteTodo(todo.id)}
                  >
                    <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z" />
                    <path
                      fillRule="evenodd"
                      d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"
                    />
                  </svg>
                  <label
                    style={{
                      paddingLeft: '2rem',
                      textDecoration: todo.completed ? 'line-through' : 'none',
                      color: todo.completed ? '#ccc' : '#000',
                    }}
                    htmlFor={todo.id}
                    className="form-check-label"
                  >
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
  });
};

export default Todos;
