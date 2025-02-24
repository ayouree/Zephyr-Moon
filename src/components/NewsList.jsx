import React from 'react';

const NewsList = ({ berita }) => {
  if (!Array.isArray(berita) || berita.length === 0) {
    return <p>No news found.</p>; // Menangani kasus tidak ada berita
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {berita.map((item) => (
        <div key={item.berita_id} className="bg-gray-800 p-4 rounded-2xl shadow-md">
          <img src={"https://jkt48.com" + item.badge_url} alt="Badge" className="news-badge mb-2 rounded-md" />
          <h3 className="text-lg font-bold">{item.judul}</h3>
          <p className="text-sm text-gray-400">{item.waktu}</p>
        </div>
      ))}
    </div>
  );
};

export default NewsList;
