import { useEffect, useState } from 'react';

function Activities() {
  const [activities, setActivities] = useState([]);
  const [error, setError] = useState('');

  useEffect(() => {
    const apiUrl = import.meta.env.VITE_CODESPACE_NAME
      ? `https://${import.meta.env.VITE_CODESPACE_NAME}-8000.app.github.dev/api/activities`
      : 'http://localhost:8000/api/activities';

    fetch(apiUrl)
      .then((response) => response.json())
      .then((data) => {
        if (Array.isArray(data)) {
          setActivities(data);
        } else if (data && Array.isArray(data.results)) {
          setActivities(data.results);
        } else {
          setActivities([]);
        }
      })
      .catch(() => setError('Unable to load activities.'));
  }, []);

  return (
    <section className="card shadow-sm border-0">
      <div className="card-body">
        <h2 className="h4 mb-3">Activities</h2>
        {error ? <p className="text-danger">{error}</p> : null}
        <ul className="list-group">
          {activities.map((activity, index) => (
            <li className="list-group-item" key={activity._id || `${activity.type}-${index}`}>
              {activity.type || 'Activity'}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export default Activities;
