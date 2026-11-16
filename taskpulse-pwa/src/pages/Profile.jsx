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
    </div>
  );
}