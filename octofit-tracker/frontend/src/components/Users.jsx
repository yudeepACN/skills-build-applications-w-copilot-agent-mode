import { useEffect, useState } from 'react';

function Users() {
  const [users, setUsers] = useState([]);
  const [error, setError] = useState('');

  useEffect(() => {
    const apiUrl = import.meta.env.VITE_CODESPACE_NAME
      ? `https://${import.meta.env.VITE_CODESPACE_NAME}-8000.app.github.dev/api/users`
      : 'http://localhost:8000/api/users';

    fetch(apiUrl)
      .then((response) => response.json())
      .then((data) => {
        if (Array.isArray(data)) {
          setUsers(data);
        } else if (data && Array.isArray(data.results)) {
          setUsers(data.results);
        } else {
          setUsers([]);
        }
      })
      .catch(() => setError('Unable to load users.'));
  }, []);

  return (
    <section className="card shadow-sm border-0">
      <div className="card-body">
        <h2 className="h4 mb-3">Users</h2>
        {error ? <p className="text-danger">{error}</p> : null}
        <ul className="list-group">
          {users.map((user, index) => (
            <li className="list-group-item" key={user._id || `${user.name}-${index}`}>
              {user.name || user.username || 'User'}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export default Users;
