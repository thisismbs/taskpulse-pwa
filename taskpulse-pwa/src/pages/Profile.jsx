import React from 'react';

export default function Profile() {
  const profileData = {
    nama: 'Malvin Bima Santiko',
    nim: '21120124130047',
    kelompok: 'Kelompok 14',
    kelas: 'Praktikum PPB 2026',
  };

  return (
    <div className="container">
      <div className="card" style={{ textAlign: 'center', padding: '28px 18px' }}>
        <div
          style={{
            width: '72px',
            height: '72px',
            borderRadius: '36px',
            backgroundColor: '#0f172a',
            border: '2px solid #38bdf8',
            margin: '0 auto 16px auto',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: '28px',
          }}
        >
          👤
        </div>
        <h2 style={{ fontSize: '18px', fontWeight: 'bold', color: '#fff' }}>{profileData.nama}</h2>
        <p style={{ color: '#38bdf8', fontSize: '14px', marginTop: '4px' }}>NIM: {profileData.nim}</p>
        <span className="badge" style={{ marginTop: '8px' }}>{profileData.kelompok}</span>
      </div>

      <div className="card">
        <h3 className="title" style={{ fontSize: '16px' }}>Informasi Sistem</h3>
        <div style={{ display: 'flex', justifyContent: 'space-between', padding: '8px 0', borderBottom: '1px solid #334155' }}>
          <span style={{ color: '#94a3b8' }}>Platform</span>
          <span>Progressive Web App (PWA)</span>
        </div>
        <div style={{ display: 'flex', justifyContent: 'space-between', padding: '8px 0', borderBottom: '1px solid #334155' }}>
          <span style={{ color: '#94a3b8' }}>Mode Offline</span>
          <span style={{ color: '#22c55e' }}>Didukung (Cache + LocalStorage)</span>
        </div>
        <div style={{ display: 'flex', justifyContent: 'space-between', padding: '8px 0' }}>
          <span style={{ color: '#94a3b8' }}>Instansi</span>
          <span>Teknik Komputer Undip</span>
        </div>
      </div>
    </div>
  );
}