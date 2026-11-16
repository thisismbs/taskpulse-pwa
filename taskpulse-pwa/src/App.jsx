import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route, NavLink } from 'react-router-dom';
import Home from './pages/Home';
import Tasks from './pages/Tasks';
import Profile from './pages/Profile';

export default function App() {
  const [tasks, setTasks] = useState(() => {
    const saved = localStorage.getItem('taskpulse_data');
    return saved ? JSON.parse(saved) : [
      { id: '1', title: 'Mengerjakan Responsi Modul 5', category: 'Praktikum', completed: false, createdAt: '17/11/2026' },
      { id: '2', title: 'Uji Coba PWA Offline di Chrome', category: 'Kuliah', completed: true, createdAt: '17/11/2026' },
    ];
  });

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home tasks={tasks} />} />
        <Route path="/tasks" element={<Tasks tasks={tasks} setTasks={setTasks} />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>

      <nav className="navbar">
        <NavLink to="/" className={({ isActive }) => `nav-item ${isActive ? 'active' : ''}`}>
          <span>🏠</span>
          <span>Beranda</span>
        </NavLink>
        <NavLink to="/tasks" className={({ isActive }) => `nav-item ${isActive ? 'active' : ''}`}>
          <span>📋</span>
          <span>Tugas</span>
        </NavLink>
        <NavLink to="/profile" className={({ isActive }) => `nav-item ${isActive ? 'active' : ''}`}>
          <span>👤</span>
          <span>Profil</span>
        </NavLink>
      </nav>
    </BrowserRouter>
  );
}