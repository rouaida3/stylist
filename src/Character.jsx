import React from 'react';

function Character({ clothing, selectionOrder }) {
  const imageStyle = {
    position: 'absolute',
    width: '100%',
    height: '100%',
    top: 0,
    left: 0,
  };

  // Define the order of layers (base, selected items, accessory, glasses, shoes)
  const baseOrder = ['base', ...selectionOrder, 'accessory', 'glasses', 'shoes'];

  // Define the image sources based on selected clothing
  const layerSources = {
    base: '/images/base.webp',
    hair: clothing.hair,
    top: clothing.top,
    bottom: clothing.bottom,
    dress: clothing.dress,
    jacket: clothing.jacket,
    glasses: clothing.glasses,
    shoes: clothing.shoes,
    belt: clothing.belt,
    accessory: clothing.accessory,
    necklace: clothing.necklace,

  };

  return (
    <div
      className="character"
      style={{
        position: 'relative',
        width: '350px',
        height: '500px',
        margin: 'auto',
      }}
    >
      {/* Loop through the baseOrder and render the corresponding image layers */}
      {baseOrder.map((key) =>
        layerSources[key] ? (
          <img
            key={key}
            src={layerSources[key]}
            alt={key}
            style={imageStyle}
          />
        ) : null
      )}
    </div>
  );
}

export default Character;
