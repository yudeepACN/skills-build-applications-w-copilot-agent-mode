import { useEffect, useState } from 'react';

function Leaderboard() {
  const [entries, setEntries] = useState([]);
  const [error, setError] = useState('');

  useEffect(() => {
    const apiUrl = import.meta.env.VITE_CODESPACE_NAME
      ? `https://${import.meta.env.VITE_CODESPACE_NAME}-8000.app.github.dev/api/leaderboard`
      : 'http://localhost:8000/api/leaderboard';

    fetch(apiUrl)
      .then((response) => response.json())
      .then((data) => {
        if (Array.isArray(data)) {
          setEntries(data);
        } else if (data && Array.isArray(data.results)) {
          setEntries(data.results);
        } else {
          setEntries([]);
        }
      })
      .catch(() => setError('Unable to load leaderboard.'));
  }, []);

  return (
    <section className="card shadow-sm border-0">
      <div className="card-body">
        <h2 className="h4 mb-3">Leaderboard</h2>
        {error ? <p className="text-danger">{error}</p> : null}
        <ul className="list-group">
          {entries.map((entry, index) => (
            <li className="list-group-item" key={entry._id || `${entry.name}-${index}`}>
              {entry.name || entry.user || 'Entry'}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export default Leaderboard;
