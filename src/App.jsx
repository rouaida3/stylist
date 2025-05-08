import React, { useContext } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ClothingProvider, ClothingContext } from './ClothingContext';
import Home from './Home';
import Register from './register';
import Header from './Header';
import ClothingSelector from './ClothingSelector';
import Character from './Character';
import './App.css';

function LayoutPage() {
  const {
    clothing,
    selectedCategory,
    setSelectedCategory,
    selectionOrder,
    handleWear,
    handleRemove,
  } = useContext(ClothingContext);

  const allItems = {
    hair: [
      { name: 'Hair 1', thumbnail: '/thumbnails/hair1.webp', overlay: '/images/hair1.webp' },
      { name: 'Hair 2', thumbnail: '/thumbnails/hair2.webp', overlay: '/images/hair2.webp' },
      { name: 'Hair 3', thumbnail: '/thumbnails/hair3.webp', overlay: '/images/hair3.webp' },
      { name: 'Hair 4', thumbnail: '/thumbnails/hair4.webp', overlay: '/images/hair4.webp' },
      { name: 'Hair 5', thumbnail: '/thumbnails/hair5.webp', overlay: '/images/hair5.webp' },
      { name: 'Hair 6', thumbnail: '/thumbnails/hair6.webp', overlay: '/images/hair6.webp' },
      { name: 'Hair 7', thumbnail: '/thumbnails/hair7.webp', overlay: '/images/hair7.webp' },
      { name: 'Hair 8', thumbnail: '/thumbnails/hair8.webp', overlay: '/images/hair8.webp' },
      { name: 'Hair 9', thumbnail: '/thumbnails/hair9.webp', overlay: '/images/hair9.webp' },
      { name: 'Hair 10', thumbnail: '/thumbnails/hair10.webp', overlay: '/images/hair10.webp' },
      { name: 'Hair 11', thumbnail: '/thumbnails/hair11.webp', overlay: '/images/hair11.webp' },

    ],
    top: [
      { name: 'Top 1', thumbnail: '/thumbnails/top1.webp', overlay: '/images/top1.webp' },
      { name: 'Top 2', thumbnail: '/thumbnails/top2.webp', overlay: '/images/top2.webp' },
      { name: 'Top 3', thumbnail: '/thumbnails/top3.webp', overlay: '/images/top3.webp' },
      { name: 'Top 4', thumbnail: '/thumbnails/top4.webp', overlay: '/images/top4.webp' },
      { name: 'Top 5', thumbnail: '/thumbnails/top5.webp', overlay: '/images/top5.webp' },
      { name: 'Top 6', thumbnail: '/thumbnails/top6.webp', overlay: '/images/top6.webp' },
      { name: 'Top 7', thumbnail: '/thumbnails/top7.webp', overlay: '/images/top7.webp' },
      { name: 'Top 8', thumbnail: '/thumbnails/top8.webp', overlay: '/images/top8.webp' },
      { name: 'Top 9', thumbnail: '/thumbnails/top9.webp', overlay: '/images/top9.webp' },
      { name: 'Top 10', thumbnail: '/thumbnails/top10.webp', overlay: '/images/top10.webp' },
      { name: 'Top 11', thumbnail: '/thumbnails/top11.webp', overlay: '/images/top11.webp' },

    ],
    bottom: [
      { name: 'Bottom 1', thumbnail: '/thumbnails/bottom1.webp', overlay: '/images/bottom1.webp' },
      { name: 'Bottom 2', thumbnail: '/thumbnails/bottom2.webp', overlay: '/images/bottom2.webp' },
      { name: 'Bottom 3', thumbnail: '/thumbnails/bottom3.webp', overlay: '/images/bottom3.webp' },
      { name: 'Bottom 4', thumbnail: '/thumbnails/bottom4.webp', overlay: '/images/bottom4.webp' },
      { name: 'Bottom 5', thumbnail: '/thumbnails/bottom5.webp', overlay: '/images/bottom5.webp' },
      { name: 'Bottom 6', thumbnail: '/thumbnails/bottom6.webp', overlay: '/images/bottom6.webp' },
      { name: 'Bottom 7', thumbnail: '/thumbnails/bottom7.webp', overlay: '/images/bottom7.webp' },
      { name: 'Bottom 8', thumbnail: '/thumbnails/bottom8.webp', overlay: '/images/bottom8.webp' },
      { name: 'Bottom 9', thumbnail: '/thumbnails/bottom9.webp', overlay: '/images/bottom9.webp' },
      { name: 'Bottom 10', thumbnail: '/thumbnails/bottom10.webp', overlay: '/images/bottom10.webp' },
      { name: 'Bottom 11', thumbnail: '/thumbnails/bottom11.webp', overlay: '/images/bottom11.webp' },
      { name: 'Bottom 12', thumbnail: '/thumbnails/bottom12.webp', overlay: '/images/bottom12.webp' },

    ],
    jacket: [
      { name: 'Jacket 1', thumbnail: '/thumbnails/jacket1.webp', overlay: '/images/jacket1.webp' },
      { name: 'Jacket 2', thumbnail: '/thumbnails/jacket2.webp', overlay: '/images/jacket2.webp' },
      { name: 'Jacket 3', thumbnail: '/thumbnails/jacket3.webp', overlay: '/images/jacket3.webp' },
      { name: 'Jacket 4', thumbnail: '/thumbnails/jacket4.webp', overlay: '/images/jacket4.webp' },
      { name: 'Jacket 5', thumbnail: '/thumbnails/jacket5.webp', overlay: '/images/jacket5.webp' },
      { name: 'Jacket 6', thumbnail: '/thumbnails/jacket6.webp', overlay: '/images/jacket6.webp' },
      { name: 'Jacket 7', thumbnail: '/thumbnails/jacket7.webp', overlay: '/images/jacket7.webp' },
      { name: 'Jacket 8', thumbnail: '/thumbnails/jacket8.webp', overlay: '/images/jacket8.webp' },
      { name: 'Jacket 9', thumbnail: '/thumbnails/jacket9.webp', overlay: '/images/jacket9.webp' },
      { name: 'Jacket 10', thumbnail: '/thumbnails/jacket10.webp', overlay: '/images/jacket10.webp' },
    ],
    dress: [
      { name: 'Dress 1', thumbnail: '/thumbnails/dress1.webp', overlay: '/images/dress1.webp' },
      { name: 'Dress 2', thumbnail: '/thumbnails/dress2.webp', overlay: '/images/dress2.webp' },
      { name: 'Dress 3', thumbnail: '/thumbnails/dress3.webp', overlay: '/images/dress3.webp' },
      { name: 'Dress 4', thumbnail: '/thumbnails/dress4.webp', overlay: '/images/dress4.webp' },
      { name: 'Dress 5', thumbnail: '/thumbnails/dress5.webp', overlay: '/images/dress5.webp' },
      { name: 'Dress 6', thumbnail: '/thumbnails/dress6.webp', overlay: '/images/dress6.webp' },
      { name: 'Dress 7', thumbnail: '/thumbnails/dress7.webp', overlay: '/images/dress7.webp' },
      { name: 'Dress 8', thumbnail: '/thumbnails/dress8.webp', overlay: '/images/dress8.webp' },
      { name: 'Dress 9', thumbnail: '/thumbnails/dress9.webp', overlay: '/images/dress9.webp' },
      { name: 'Dress 10', thumbnail: '/thumbnails/dress10.webp', overlay: '/images/dress10.webp' },
    ],
    shoes: [
      { name: 'Shoes 1', thumbnail: '/thumbnails/shoes1.webp', overlay: '/images/shoes1.webp' },
      { name: 'Shoes 2', thumbnail: '/thumbnails/shoes2.webp', overlay: '/images/shoes2.webp' },
      { name: 'Shoes 3', thumbnail: '/thumbnails/shoes3.webp', overlay: '/images/shoes3.webp' },
      { name: 'Shoes 4', thumbnail: '/thumbnails/shoes4.webp', overlay: '/images/shoes4.webp' },
      { name: 'Shoes 5', thumbnail: '/thumbnails/shoes5.webp', overlay: '/images/shoes5.webp' },
      { name: 'Shoes 6', thumbnail: '/thumbnails/shoes6.webp', overlay: '/images/shoes6.webp' },
      { name: 'Shoes 7', thumbnail: '/thumbnails/shoes7.webp', overlay: '/images/shoes7.webp' },
      { name: 'Shoes 8', thumbnail: '/thumbnails/shoes8.webp', overlay: '/images/shoes8.webp' },
      { name: 'Shoes 9', thumbnail: '/thumbnails/shoes9.webp', overlay: '/images/shoes9.webp' },
      { name: 'Shoes 10', thumbnail: '/thumbnails/shoes10.webp', overlay: '/images/shoes10.webp' },
      { name: 'Shoes 11', thumbnail: '/thumbnails/shoes11.webp', overlay: '/images/shoes11.webp' },
    ],
    glasses: [
      { name: 'Glasses 1', thumbnail: '/thumbnails/glasses1.webp', overlay: '/images/glasses1.webp' },
      { name: 'Glasses 2', thumbnail: '/thumbnails/glasses2.webp', overlay: '/images/glasses2.webp' },
      { name: 'Glasses 3', thumbnail: '/thumbnails/glasses3.webp', overlay: '/images/glasses3.webp' },
      { name: 'Glasses 4', thumbnail: '/thumbnails/glasses4.webp', overlay: '/images/glasses4.webp' },
      { name: 'Glasses 5', thumbnail: '/thumbnails/glasses5.webp', overlay: '/images/glasses5.webp' },
      { name: 'Glasses 6', thumbnail: '/thumbnails/glasses6.webp', overlay: '/images/glasses6.webp' },
      { name: 'Glasses 7', thumbnail: '/thumbnails/glasses7.webp', overlay: '/images/glasses7.webp' },
      { name: 'Glasses 8', thumbnail: '/thumbnails/glasses8.webp', overlay: '/images/glasses8.webp' },
      { name: 'Glasses 9', thumbnail: '/thumbnails/glasses9.webp', overlay: '/images/glasses9.webp' },
      { name: 'Glasses 10', thumbnail: '/thumbnails/glasses10.webp', overlay: '/images/glasses10.webp' },
    ],
    necklace: [
      { name: 'necklace 1', thumbnail: '/thumbnails/necklace1.webp', overlay: '/images/necklace1.webp' },
      { name: 'necklace 2', thumbnail: '/thumbnails/necklace2.webp', overlay: '/images/necklace2.webp' },
      { name: 'necklace 3', thumbnail: '/thumbnails/necklace3.webp', overlay: '/images/necklace3.webp' },
      { name: '4', thumbnail: '/thumbnails/necklace4.webp', overlay: '/images/necklace4.webp' },
      { name: '5', thumbnail: '/thumbnails/necklace5.webp', overlay: '/images/necklace5.webp' },
      { name: '6', thumbnail: '/thumbnails/necklace6.webp', overlay: '/images/necklace6.webp' },
      { name: '7', thumbnail: '/thumbnails/necklace7.webp', overlay: '/images/necklace7.webp' },
      { name: '8', thumbnail: '/thumbnails/necklace8.webp', overlay: '/images/necklace8.webp' },
      { name: '9', thumbnail: '/thumbnails/necklace9.webp', overlay: '/images/necklace9.webp' },
      { name: '10', thumbnail: '/thumbnails/necklace10.webp', overlay: '/images/necklace10.webp' },
    ],
    earrings: [
      { name: '1', thumbnail: '/thumbnails/earrings1.webp', overlay: '/images/earrings1.webp' },
      { name: '2', thumbnail: '/thumbnails/earrings2.webp', overlay: '/images/earrings2.webp' },
      { name: '3', thumbnail: '/thumbnails/earrings3.webp', overlay: '/images/earrings3.webp' },
      { name: '4', thumbnail: '/thumbnails/earrings4.webp', overlay: '/images/earrings4.webp' },
      { name: '5', thumbnail: '/thumbnails/earrings5.webp', overlay: '/images/earrings5.webp' },
      { name: '6', thumbnail: '/thumbnails/earrings6.webp', overlay: '/images/earrings6.webp' },
      { name: '7', thumbnail: '/thumbnails/earrings7.webp', overlay: '/images/earrings7.webp' },
      { name: '8', thumbnail: '/thumbnails/earrings8.webp', overlay: '/images/earrings8.webp' },
      { name: '9', thumbnail: '/thumbnails/earrings9.webp', overlay: '/images/earrings9.webp' },
      { name: '10', thumbnail: '/thumbnails/earrings10.webp', overlay: '/images/earrings10.webp' },
    ],
    accessories: [
      { name: 'Accessory 1', thumbnail: '/thumbnails/accessory1.webp', overlay: '/images/accessory1.webp' },
      { name: 'Accessory 2', thumbnail: '/thumbnails/accessory2.webp', overlay: '/images/accessory2.webp' },
      { name: 'Accessory 3', thumbnail: '/thumbnails/accessory3.webp', overlay: '/images/accessory3.webp' },
      { name: 'Accessory 4', thumbnail: '/thumbnails/accessory4.webp', overlay: '/images/accessory4.webp' },
      { name: 'Accessory 5', thumbnail: '/thumbnails/accessory5.webp', overlay: '/images/accessory5.webp' },
      { name: 'Accessory 6', thumbnail: '/thumbnails/accessory6.webp', overlay: '/images/accessory6.webp' },
      { name: 'Accessory 7', thumbnail: '/thumbnails/accessory7.webp', overlay: '/images/accessory7.webp' },
      { name: 'Accessory 8', thumbnail: '/thumbnails/accessory8.webp', overlay: '/images/accessory8.webp' },
      { name: 'Accessory 9', thumbnail: '/thumbnails/accessory9.webp', overlay: '/images/accessory9.webp' },
      { name: 'Accessory 10', thumbnail: '/thumbnails/accessory10.webp', overlay: '/images/accessory10.webp' },
    ],
  };
  
  

  return (
    <>
      <Header />
      <div className="app-container">
        {/* Left Sidebar: Categories and items */}
        <div className="sidebar left">
          <h3>Categories</h3>
          {Object.keys(allItems).map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`category-button ${selectedCategory === cat ? 'active' : ''}`}
            >
              {cat.toUpperCase()}
            </button>
          ))}
        </div>

        {/* New Middle Sidebar: Items for selected category */}
        <div className="sidebar middle">
          <h3>Items</h3>
          {selectedCategory && (
            <ClothingSelector
              items={allItems[selectedCategory]}
              onItemClick={handleWear}
            />
          )}
        </div>

        {/* Center Content: Character */}
        <div className="main-content">
          <Character clothing={clothing} selectionOrder={selectionOrder} />
        </div>

        {/* Right Sidebar: Selected items */}
        <div className="sidebar right">
          <h3>Selected Items</h3>
          {Object.keys(clothing).map(
            (key) =>
              clothing[key] && (
                <img
                  key={key}
                  src={clothing[key]}
                  alt={key}
                  onClick={() => handleRemove(key)}
                  className="item-icon"
                />
              )
          )}
        </div>
      </div>
    </>
  );
}

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<LayoutPage />} />
      <Route path="/register" element={<Register />} />
    </Routes>
  );
}

function App() {
  return (
    <ClothingProvider>
      <Router>
        <AppRoutes />
      </Router>
    </ClothingProvider>
  );
}

export default App;