import React from 'react';
import { Link } from 'react-router-dom';

export default function Home({ tasks }) {
  const total = tasks.length;
  const completed = tasks.filter((t) => t.completed).length;
  const pending = total - completed;
  const percent = total > 0 ? Math.round((completed / total) * 100) : 0;

  return (
    <div className="container">
      <div className="card">
        <h2 className="title">TaskPulse Dashboard</h2>
        <p style={{ color: '#94a3b8', fontSize: '14px', marginBottom: '16px' }}>
          Ringkasan progres aktivitas harian Anda. Bekerja secara penuh saat offline.
        </p>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px' }}>
          <div className="card" style={{ textAlign: 'center', marginBottom: 0 }}>
            <span style={{ fontSize: '24px', fontWeight: 'bold', color: '#38bdf8' }}>{total}</span>
            <p style={{ fontSize: '12px', color: '#94a3b8' }}>Total Tugas</p>
          </div>
          <div className="card" style={{ textAlign: 'center', marginBottom: 0 }}>
            <span style={{ fontSize: '24px', fontWeight: 'bold', color: '#22c55e' }}>{completed}</span>
            <p style={{ fontSize: '12px', color: '#94a3b8' }}>Selesai</p>
          </div>
        </div>

        <div style={{ marginTop: '16px' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '13px', marginBottom: '6px' }}>
            <span>Penyelesaian</span>
            <span>{percent}%</span>
          </div>
          <div style={{ width: '100%', height: '8px', backgroundColor: '#334155', borderRadius: '4px', overflow: 'hidden' }}>
            <div style={{ width: `${percent}%`, height: '100%', backgroundColor: '#38bdf8' }} />
          </div>
        </div>
      </div>

      <Link to="/tasks" style={{ textDecoration: 'none' }}>
        <button className="btn">Buka Daftar Tugas</button>
      </Link>
    </div>
  );
}