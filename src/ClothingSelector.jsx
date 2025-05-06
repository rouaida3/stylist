import React from 'react';

function ClothingSelector({ items, onItemClick }) {
  return (
    <div className="clothing-selector" style={{ marginTop: '20px', textAlign: 'center' }}>
      {items.map((item, index) => (
        <button
          key={index}
          onClick={() => onItemClick(item.overlay)}
          style={{
            margin: '5px',
            padding: '10px',
            borderRadius: '8px',
            border: '1px solid #333',
            cursor: 'pointer',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center'
          }}
        >
          <img
            src={item.thumbnail}
            alt={item.name}
            style={{ width: '40px', height: '40px', marginBottom: '5px' }}
          />
          {item.name}
        </button>
      ))}
    </div>
  );
}

export default ClothingSelector;
