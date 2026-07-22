import { NavLink, Route, Routes } from 'react-router-dom';
import './App.css';
import Activities from './components/Activities';
import Leaderboard from './components/Leaderboard';
import Teams from './components/Teams';
import Users from './components/Users';
import Workouts from './components/Workouts';

const navItems = [
  { to: '/', label: 'Overview' },
  { to: '/activities', label: 'Activities' },
  { to: '/leaderboard', label: 'Leaderboard' },
  { to: '/teams', label: 'Teams' },
  { to: '/users', label: 'Users' },
  { to: '/workouts', label: 'Workouts' },
];

function Home() {
  return (
    <section>
      <div className="row g-4 align-items-stretch">
        <div className="col-lg-7">
          <div className="card shadow-sm border-0 h-100">
            <div className="card-body p-4">
              <h2 className="h4">OctoFit Tracker</h2>
              <p className="text-muted">
                A modern multi-tier fitness app for tracking activity, building teams,
                and staying motivated.
              </p>
              <div className="d-flex flex-wrap gap-2">
                <a className="btn btn-primary" href="http://localhost:8000/api/health">
                  Check API health
                </a>
                <a className="btn btn-outline-secondary" href="https://vite.dev/">
                  Vite Docs
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-5">
          <div className="card shadow-sm border-0 h-100">
            <div className="card-body p-4">
              <h2 className="h4">Getting started</h2>
              <ul className="mb-0">
                <li>React 19 + Vite frontend</li>
                <li>Express + TypeScript backend</li>
                <li>MongoDB via Mongoose</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function App() {
  return (
    <main className="container py-5">
      <nav className="navbar navbar-expand-lg navbar-light bg-white rounded shadow-sm mb-4 px-3 py-2">
        <span className="navbar-brand fw-bold">OctoFit</span>
        <div className="navbar-nav ms-auto flex-row gap-2 flex-wrap">
          {navItems.map((item) => (
            <NavLink key={item.to} to={item.to} className={({ isActive }) => `nav-link ${isActive ? 'active fw-semibold' : ''}`} end={item.to === '/'}>
              {item.label}
            </NavLink>
          ))}
        </div>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/activities" element={<Activities />} />
        <Route path="/leaderboard" element={<Leaderboard />} />
        <Route path="/teams" element={<Teams />} />
        <Route path="/users" element={<Users />} />
        <Route path="/workouts" element={<Workouts />} />
      </Routes>
    </main>
  );
}

export default App;
