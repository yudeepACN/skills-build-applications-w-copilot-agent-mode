import { useEffect, useState } from 'react';

function Workouts() {
  const [workouts, setWorkouts] = useState([]);
  const [error, setError] = useState('');

  useEffect(() => {
    const apiUrl = import.meta.env.VITE_CODESPACE_NAME
      ? `https://${import.meta.env.VITE_CODESPACE_NAME}-8000.app.github.dev/api/workouts`
      : 'http://localhost:8000/api/workouts';

    fetch(apiUrl)
      .then((response) => response.json())
      .then((data) => {
        if (Array.isArray(data)) {
          setWorkouts(data);
        } else if (data && Array.isArray(data.results)) {
          setWorkouts(data.results);
        } else {
          setWorkouts([]);
        }
      })
      .catch(() => setError('Unable to load workouts.'));
  }, []);

  return (
    <section className="card shadow-sm border-0">
      <div className="card-body">
        <h2 className="h4 mb-3">Workouts</h2>
        {error ? <p className="text-danger">{error}</p> : null}
        <ul className="list-group">
          {workouts.map((workout, index) => (
            <li className="list-group-item" key={workout._id || `${workout.name}-${index}`}>
              {workout.name || 'Workout'}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export default Workouts;
