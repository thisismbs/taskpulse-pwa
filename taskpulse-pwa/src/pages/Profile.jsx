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
      {/* Kartu Profil Utama */}
      <div className="card" style={{ textAlign: 'center', padding: '30px 18px', backgroundColor: '#FFFDF0' }}>
        <div
          style={{
            width: '84px',
            height: '84px',
            borderRadius: '9999px',
            backgroundColor: '#FFDA00',
            border: '3.5px solid #00002D',
            boxShadow: '3px 4px 0px #00002D',
            margin: '0 auto 16px auto',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: '36px',
          }}
        >
          🎓
        </div>
        <h2 style={{ fontSize: '20px', fontWeight: 900, color: '#00002D' }}>{profileData.nama}</h2>
        <p style={{ color: '#5400C1', fontSize: '15px', fontWeight: 800, marginTop: '4px' }}>NIM: {profileData.nim}</p>
        <div style={{ marginTop: '12px' }}>
          <span className="badge" style={{ backgroundColor: '#DB0F76', color: '#FFF' }}>{profileData.kelompok}</span>
        </div>
      </div>
      </div>
  );
}