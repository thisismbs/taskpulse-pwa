import React from 'react';
import { Link } from 'react-router-dom';

export default function Home({ tasks }) {
  const total = tasks.length;
  const completed = tasks.filter((t) => t.completed).length;
  const percent = total > 0 ? Math.round((completed / total) * 100) : 0;

  return (
    <div className="container">
      {/* Kartu Header Utama */}
      <div className="card card-purple" style={{ textAlign: 'center', position: 'relative' }}>
        <span style={{ fontSize: '12px', fontWeight: 800, color: '#FFEA6C', textTransform: 'uppercase', letterSpacing: '1px' }}>
          ★ TaskPulse Tracker ★
        </span>
        <h2 style={{ fontSize: '26px', fontWeight: 900, color: '#FFFCF3', margin: '8px 0' }}>
          Halo, Malvin!
        </h2>
        <p style={{ color: '#E9D5FF', fontSize: '13px', fontWeight: 500 }}>
          Siap selesaikan tugas harianmu hari ini?
        </p>
      </div>

      {/* Grid Statistik */}
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '14px', marginBottom: '14px' }}>
        <div className="card" style={{ textAlign: 'center', marginBottom: 0, backgroundColor: '#FFF5C8' }}>
          <span style={{ fontSize: '32px', fontWeight: 900, color: '#5400C1' }}>{total}</span>
          <p style={{ fontSize: '12px', fontWeight: 800, color: '#7A5800', marginTop: '4px' }}>Total Tugas</p>
        </div>
        <div className="card" style={{ textAlign: 'center', marginBottom: 0, backgroundColor: '#FFF5C8' }}>
          <span style={{ fontSize: '32px', fontWeight: 900, color: '#DB0F76' }}>{completed}</span>
          <p style={{ fontSize: '12px', fontWeight: 800, color: '#7A5800', marginTop: '4px' }}>Terselesaikan</p>
        </div>
      </div>

      {/* Progres Bar Playful */}
      <div className="card">
        <div style={{ display: 'flex', justifyContent: 'space-between', fontWeight: 800, fontSize: '14px', marginBottom: '8px' }}>
          <span>Target Selesai</span>
          <span style={{ color: '#5400C1' }}>{percent}%</span>
        </div>
        <div style={{ width: '100%', height: '18px', backgroundColor: '#FFFCF3', border: '2.5px solid #00002D', borderRadius: '9999px', overflow: 'hidden', padding: '2px' }}>
          <div style={{ width: `${percent}%`, height: '100%', backgroundColor: '#05B865', borderRadius: '9999px', transition: 'width 0.3s ease' }} />
        </div>
      </div>

      <Link to="/tasks" style={{ textDecoration: 'none' }}>
        <button className="btn">Buka Semua Tugas ★</button>
      </Link>
    </div>
  );
}