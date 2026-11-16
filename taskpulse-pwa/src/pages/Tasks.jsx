import React, { useState } from 'react';

export default function Tasks({ tasks, setTasks }) {
  const [title, setTitle] = useState('');
  const [category, setCategory] = useState('Kuliah');
  const [editingId, setEditingId] = useState(null);
  const [editTitle, setEditTitle] = useState('');

  // CREATE
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

  // UPDATE (Toggle Status)
  const handleToggle = (id) => {
    const updated = tasks.map((t) => (t.id === id ? { ...t, completed: !t.completed } : t));
    setTasks(updated);
    localStorage.setItem('taskpulse_data', JSON.stringify(updated));
  };

  // UPDATE (Edit Title)
  const handleSaveEdit = (id) => {
    if (!editTitle.trim()) return;
    const updated = tasks.map((t) => (t.id === id ? { ...t, title: editTitle } : t));
    setTasks(updated);
    localStorage.setItem('taskpulse_data', JSON.stringify(updated));
    setEditingId(null);
  };

  // DELETE
  const handleDelete = (id) => {
    const updated = tasks.filter((t) => t.id !== id);
    setTasks(updated);
    localStorage.setItem('taskpulse_data', JSON.stringify(updated));
  };

  return (
    <div className="container">
      <div className="card">
        <h2 className="title">Tambah Tugas Baru</h2>
        <form onSubmit={handleAdd}>
          <input
            className="input"
            type="text"
            placeholder="Nama kegiatan atau tugas..."
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <select className="input" value={category} onChange={(e) => setCategory(e.target.value)}>
            <option value="Kuliah">Kuliah</option>
            <option value="Praktikum">Praktikum</option>
            <option value="Pribadi">Pribadi</option>
          </select>
          <button type="submit" className="btn">Simpan Tugas</button>
        </form>
      </div>

      <h3 style={{ fontSize: '16px', marginBottom: '12px', color: '#94a3b8' }}>Daftar Tugas ({tasks.length})</h3>

      {tasks.length === 0 ? (
        <p style={{ textAlign: 'center', color: '#64748b', marginTop: '24px' }}>Belum ada tugas tercatat.</p>
      ) : (
        tasks.map((task) => (
          <div key={task.id} className="card" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <div style={{ flex: 1, marginRight: '10px' }}>
              {editingId === task.id ? (
                <div style={{ display: 'flex', gap: '6px' }}>
                  <input
                    className="input"
                    style={{ marginBottom: 0 }}
                    value={editTitle}
                    onChange={(e) => setEditTitle(e.target.value)}
                  />
                  <button className="btn" style={{ width: 'auto' }} onClick={() => handleSaveEdit(task.id)}>OK</button>
                </div>
              ) : (
                <>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <input
                      type="checkbox"
                      checked={task.completed}
                      onChange={() => handleToggle(task.id)}
                    />
                    <span style={{ textDecoration: task.completed ? 'line-through' : 'none', color: task.completed ? '#64748b' : '#fff' }}>
                      {task.title}
                    </span>
                  </div>
                  <div style={{ marginTop: '6px', display: 'flex', gap: '8px' }}>
                    <span className="badge">{task.category}</span>
                    <span style={{ fontSize: '11px', color: '#64748b' }}>{task.createdAt}</span>
                  </div>
                </>
              )}
            </div>

            <div style={{ display: 'flex', gap: '6px' }}>
              <button
                style={{ background: 'none', border: 'none', color: '#38bdf8', cursor: 'pointer', fontSize: '12px' }}
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