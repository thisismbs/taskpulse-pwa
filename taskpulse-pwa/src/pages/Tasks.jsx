import React, { useState } from 'react';

export default function Tasks({ tasks, setTasks }) {
  const [title, setTitle] = useState('');
  const [category, setCategory] = useState('Kuliah');
  const [editingId, setEditingId] = useState(null);
  const [editTitle, setEditTitle] = useState('');

  const handleAdd = (e) => {
    e.preventDefault();
    if (!title.trim()) return;
    const newTask = {
      id: Date.now().toString(),
      title,
      category,
      completed: false,
      createdAt: new Date().toLocaleDateString('id-ID'),
    };
    const updated = [newTask, ...tasks];
    setTasks(updated);
    localStorage.setItem('taskpulse_data', JSON.stringify(updated));
    setTitle('');
  };

  const handleToggle = (id) => {
    const updated = tasks.map((t) => (t.id === id ? { ...t, completed: !t.completed } : t));
    setTasks(updated);
    localStorage.setItem('taskpulse_data', JSON.stringify(updated));
  };

  const handleSaveEdit = (id) => {
    if (!editTitle.trim()) return;
    const updated = tasks.map((t) => (t.id === id ? { ...t, title: editTitle } : t));
    setTasks(updated);
    localStorage.setItem('taskpulse_data', JSON.stringify(updated));
    setEditingId(null);
  };

  const handleDelete = (id) => {
    const updated = tasks.filter((t) => t.id !== id);
    setTasks(updated);
    localStorage.setItem('taskpulse_data', JSON.stringify(updated));
  };

  return (
    <div className="container">
      {/* Form Tambah */}
      <div className="card">
        <h2 className="title">Tambah Tugas Baru ✍️</h2>
        <form onSubmit={handleAdd}>
          <input
            className="input"
            type="text"
            placeholder="Ketik tugas atau rencana..."
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <select className="input" value={category} onChange={(e) => setCategory(e.target.value)}>
            <option value="Kuliah">Kuliah</option>
            <option value="Praktikum">Praktikum</option>
            <option value="Pribadi">Pribadi</option>
          </select>
          <button type="submit" className="btn">Simpan Tugas!</button>
        </form>
      </div>

      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '14px', padding: '0 4px' }}>
        <h3 style={{ fontSize: '18px', fontWeight: 900, color: '#00002D' }}>Daftar Tugas</h3>
        <span className="badge">{tasks.length} Catatan</span>
      </div>

      {tasks.length === 0 ? (
        <div className="card" style={{ textAlign: 'center', backgroundColor: '#FFF5C8', color: '#7A5800' }}>
          <p style={{ fontWeight: 700 }}>Belum ada tugas. Nikmati waktu luangmu!</p>
        </div>
      ) : (
        tasks.map((task) => (
          <div
            key={task.id}
            className="card"
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              backgroundColor: task.completed ? '#E9D5FF' : '#FFF7CA',
              borderStyle: task.completed ? 'dashed' : 'solid',
            }}
          >
            <div style={{ flex: 1, marginRight: '10px' }}>
              {editingId === task.id ? (
                <div style={{ display: 'flex', gap: '6px' }}>
                  <input
                    className="input"
                    style={{ marginBottom: 0 }}
                    value={editTitle}
                    onChange={(e) => setEditTitle(e.target.value)}
                  />
                  <button className="btn" style={{ width: 'auto', padding: '6px 14px' }} onClick={() => handleSaveEdit(task.id)}>OK</button>
                </div>
              ) : (
                <>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                    <input
                      type="checkbox"
                      checked={task.completed}
                      onChange={() => handleToggle(task.id)}
                      style={{ width: '18px', height: '18px', accentColor: '#5400C1', cursor: 'pointer' }}
                    />
                    <span
                      style={{
                        fontSize: '15px',
                        fontWeight: 700,
                        textDecoration: task.completed ? 'line-through' : 'none',
                        color: task.completed ? '#53065B' : '#00002D',
                      }}
                    >
                      {task.title}
                    </span>
                  </div>
                  <div style={{ marginTop: '8px', display: 'flex', gap: '8px', alignItems: 'center' }}>
                    <span className="badge" style={{ backgroundColor: '#FFFCF3' }}>{task.category}</span>
                    <span style={{ fontSize: '11px', color: '#7A5800', fontWeight: 600 }}>{task.createdAt}</span>
                  </div>
                </>
              )}
            </div>

            <div style={{ display: 'flex', gap: '6px', alignItems: 'center' }}>
              <button
                style={{
                  background: 'none',
                  border: 'none',
                  color: '#5400C1',
                  cursor: 'pointer',
                  fontSize: '12px',
                  fontWeight: 800,
                  textDecoration: 'underline',
                }}
                onClick={() => { setEditingId(task.id); setEditTitle(task.title); }}
              >
                Edit
              </button>
              <button className="btn-danger" onClick={() => handleDelete(task.id)}>Hapus</button>
            </div>
          </div>
        ))
      )}
    </div>
  );
}