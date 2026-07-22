import { useEffect, useState } from 'react';

function Teams() {
  const [teams, setTeams] = useState([]);
  const [error, setError] = useState('');

  useEffect(() => {
    const apiUrl = import.meta.env.VITE_CODESPACE_NAME
      ? `https://${import.meta.env.VITE_CODESPACE_NAME}-8000.app.github.dev/api/teams`
      : 'http://localhost:8000/api/teams';

    fetch(apiUrl)
      .then((response) => response.json())
      .then((data) => {
        if (Array.isArray(data)) {
          setTeams(data);
        } else if (data && Array.isArray(data.results)) {
          setTeams(data.results);
        } else {
          setTeams([]);
        }
      })
      .catch(() => setError('Unable to load teams.'));
  }, []);

  return (
    <section className="card shadow-sm border-0">
      <div className="card-body">
        <h2 className="h4 mb-3">Teams</h2>
        {error ? <p className="text-danger">{error}</p> : null}
        <ul className="list-group">
          {teams.map((team, index) => (
            <li className="list-group-item" key={team._id || `${team.name}-${index}`}>
              {team.name || 'Team'}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export default Teams;
