import React, { useContext } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom'; // Import useLocation
import { ClothingProvider, ClothingContext } from './ClothingContext';
import Home from './Home';
import Register from './register';
import Work from './Work';
import Chef from './work/chef';
import Designer from './work/designer';
import Pharmacist from './work/pharmacist';
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
      { name: 'Hair 1', thumbnail: '/thumbnails/hair1.png', overlay: '/images/hair1.png' },
      { name: 'Hair 2', thumbnail: '/thumbnails/hair2.png', overlay: '/images/hair2.png' },
      { name: 'Hair 3', thumbnail: '/thumbnails/hair3.png', overlay: '/images/hair3.png' },
      { name: 'Hair 4', thumbnail: '/thumbnails/hair4.png', overlay: '/images/hair4.png' },
      { name: 'Hair 5', thumbnail: '/thumbnails/hair5.png', overlay: '/images/hair5.png' },
      { name: 'Hair 6', thumbnail: '/thumbnails/hair6.png', overlay: '/images/hair6.png' },
      { name: 'Hair 7', thumbnail: '/thumbnails/hair7.png', overlay: '/images/hair7.png' },
      { name: 'Hair 8', thumbnail: '/thumbnails/hair8.png', overlay: '/images/hair8.png' },
      { name: 'Hair 9', thumbnail: '/thumbnails/hair9.png', overlay: '/images/hair9.png' },
      { name: 'Hair 10', thumbnail: '/thumbnails/hair10.png', overlay: '/images/hair10.png' },
    ],
    top: [
      { name: 'Top 1', thumbnail: '/thumbnails/top1.png', overlay: '/images/top1.png' },
      { name: 'Top 2', thumbnail: '/thumbnails/top2.png', overlay: '/images/top2.png' },
      { name: 'Top 3', thumbnail: '/thumbnails/top3.png', overlay: '/images/top3.png' },
      { name: 'Top 4', thumbnail: '/thumbnails/top4.png', overlay: '/images/top4.png' },
      { name: 'Top 5', thumbnail: '/thumbnails/top5.png', overlay: '/images/top5.png' },
      { name: 'Top 6', thumbnail: '/thumbnails/top6.png', overlay: '/images/top6.png' },
      { name: 'Top 7', thumbnail: '/thumbnails/top7.png', overlay: '/images/top7.png' },
      { name: 'Top 8', thumbnail: '/thumbnails/top8.png', overlay: '/images/top8.png' },
      { name: 'Top 9', thumbnail: '/thumbnails/top9.png', overlay: '/images/top9.png' },
      { name: 'Top 10', thumbnail: '/thumbnails/top10.png', overlay: '/images/top10.png' },
    ],
    bottom: [
      { name: 'Bottom 1', thumbnail: '/thumbnails/bottom1.png', overlay: '/images/bottom1.png' },
      { name: 'Bottom 2', thumbnail: '/thumbnails/bottom2.png', overlay: '/images/bottom2.png' },
      { name: 'Bottom 3', thumbnail: '/thumbnails/bottom3.png', overlay: '/images/bottom3.png' },
      { name: 'Bottom 4', thumbnail: '/thumbnails/bottom4.png', overlay: '/images/bottom4.png' },
      { name: 'Bottom 5', thumbnail: '/thumbnails/bottom5.png', overlay: '/images/bottom5.png' },
      { name: 'Bottom 6', thumbnail: '/thumbnails/bottom6.png', overlay: '/images/bottom6.png' },
      { name: 'Bottom 7', thumbnail: '/thumbnails/bottom7.png', overlay: '/images/bottom7.png' },
      { name: 'Bottom 8', thumbnail: '/thumbnails/bottom8.png', overlay: '/images/bottom8.png' },
      { name: 'Bottom 9', thumbnail: '/thumbnails/bottom9.png', overlay: '/images/bottom9.png' },
      { name: 'Bottom 10', thumbnail: '/thumbnails/bottom10.png', overlay: '/images/bottom10.png' },
      { name: 'Bottom 11', thumbnail: '/thumbnails/bottom11.png', overlay: '/images/bottom11.png' },

    ],
    jacket: [
      { name: 'Jacket 1', thumbnail: '/thumbnails/jacket1.png', overlay: '/images/jacket1.png' },
      { name: 'Jacket 2', thumbnail: '/thumbnails/jacket2.png', overlay: '/images/jacket2.png' },
      { name: 'Jacket 3', thumbnail: '/thumbnails/jacket3.png', overlay: '/images/jacket3.png' },
      { name: 'Jacket 4', thumbnail: '/thumbnails/jacket4.png', overlay: '/images/jacket4.png' },
      { name: 'Jacket 5', thumbnail: '/thumbnails/jacket5.png', overlay: '/images/jacket5.png' },
      { name: 'Jacket 6', thumbnail: '/thumbnails/jacket6.png', overlay: '/images/jacket6.png' },
      { name: 'Jacket 7', thumbnail: '/thumbnails/jacket7.png', overlay: '/images/jacket7.png' },
      { name: 'Jacket 8', thumbnail: '/thumbnails/jacket8.png', overlay: '/images/jacket8.png' },
      { name: 'Jacket 9', thumbnail: '/thumbnails/jacket9.png', overlay: '/images/jacket9.png' },
      { name: 'Jacket 10', thumbnail: '/thumbnails/jacket10.png', overlay: '/images/jacket10.png' },
    ],
    
    dress: [
      { name: 'Dress 1', thumbnail: '/thumbnails/dress1.png', overlay: '/images/dress1.png' },
      { name: 'Dress 2', thumbnail: '/thumbnails/dress2.png', overlay: '/images/dress2.png' },
      { name: 'Dress 3', thumbnail: '/thumbnails/dress3.png', overlay: '/images/dress3.png' },
      { name: 'Dress 4', thumbnail: '/thumbnails/dress4.png', overlay: '/images/dress4.png' },
      { name: 'Dress 5', thumbnail: '/thumbnails/dress5.png', overlay: '/images/dress5.png' },
      { name: 'Dress 6', thumbnail: '/thumbnails/dress6.png', overlay: '/images/dress6.png' },
      { name: 'Dress 7', thumbnail: '/thumbnails/dress7.png', overlay: '/images/dress7.png' },
      { name: 'Dress 8', thumbnail: '/thumbnails/dress8.png', overlay: '/images/dress8.png' },
      { name: 'Dress 9', thumbnail: '/thumbnails/dress9.png', overlay: '/images/dress9.png' },
      { name: 'Dress 10', thumbnail: '/thumbnails/dress10.png', overlay: '/images/dress10.png' },
    ],
    shoes: [
      { name: 'Shoes 1', thumbnail: '/thumbnails/shoes1.png', overlay: '/images/shoes1.png' },
      { name: 'Shoes 2', thumbnail: '/thumbnails/shoes2.png', overlay: '/images/shoes2.png' },
      { name: 'Shoes 3', thumbnail: '/thumbnails/shoes3.png', overlay: '/images/shoes3.png' },
      { name: 'Shoes 4', thumbnail: '/thumbnails/shoes4.png', overlay: '/images/shoes4.png' },
      { name: 'Shoes 5', thumbnail: '/thumbnails/shoes5.png', overlay: '/images/shoes5.png' },
      { name: 'Shoes 6', thumbnail: '/thumbnails/shoes6.png', overlay: '/images/shoes6.png' },
      { name: 'Shoes 7', thumbnail: '/thumbnails/shoes7.png', overlay: '/images/shoes7.png' },
      { name: 'Shoes 8', thumbnail: '/thumbnails/shoes8.png', overlay: '/images/shoes8.png' },
      { name: 'Shoes 9', thumbnail: '/thumbnails/shoes9.png', overlay: '/images/shoes9.png' },
      { name: 'Shoes 10', thumbnail: '/thumbnails/shoes10.png', overlay: '/images/shoes10.png' },
      { name: 'Shoes 11', thumbnail: '/thumbnails/shoes11.png', overlay: '/images/shoes11.png' },

    ],
    glasses: [
      { name: 'Glasses 1', thumbnail: '/thumbnails/glasses1.png', overlay: '/images/glasses1.png' },
      { name: 'Glasses 2', thumbnail: '/thumbnails/glasses2.png', overlay: '/images/glasses2.png' },
      { name: 'Glasses 3', thumbnail: '/thumbnails/glasses3.png', overlay: '/images/glasses3.png' },
      { name: 'Glasses 4', thumbnail: '/thumbnails/glasses4.png', overlay: '/images/glasses4.png' },
      { name: 'Glasses 5', thumbnail: '/thumbnails/glasses5.png', overlay: '/images/glasses5.png' },
      { name: 'Glasses 6', thumbnail: '/thumbnails/glasses6.png', overlay: '/images/glasses6.png' },
      { name: 'Glasses 7', thumbnail: '/thumbnails/glasses7.png', overlay: '/images/glasses7.png' },
      { name: 'Glasses 8', thumbnail: '/thumbnails/glasses8.png', overlay: '/images/glasses8.png' },
      { name: 'Glasses 9', thumbnail: '/thumbnails/glasses9.png', overlay: '/images/glasses9.png' },
      { name: 'Glasses 10', thumbnail: '/thumbnails/glasses10.png', overlay: '/images/glasses10.png' },
    ],
    belt: [
      { name: 'Belt 1', thumbnail: '/thumbnails/belt1.png', overlay: '/images/belt1.png' },
      { name: 'Belt 2', thumbnail: '/thumbnails/belt2.png', overlay: '/images/belt2.png' },
      { name: 'Belt 3', thumbnail: '/thumbnails/belt3.png', overlay: '/images/belt3.png' },
      { name: 'Belt 4', thumbnail: '/thumbnails/belt4.png', overlay: '/images/belt4.png' },
      { name: 'Belt 5', thumbnail: '/thumbnails/belt5.png', overlay: '/images/belt5.png' },
      { name: 'Belt 6', thumbnail: '/thumbnails/belt6.png', overlay: '/images/belt6.png' },
      { name: 'Belt 7', thumbnail: '/thumbnails/belt7.png', overlay: '/images/belt7.png' },
      { name: 'Belt 8', thumbnail: '/thumbnails/belt8.png', overlay: '/images/belt8.png' },
      { name: 'Belt 9', thumbnail: '/thumbnails/belt9.png', overlay: '/images/belt9.png' },
      { name: 'Belt 10', thumbnail: '/thumbnails/belt10.png', overlay: '/images/belt10.png' },
    ],
    accessory: [
      { name: 'Accessory 1', thumbnail: '/thumbnails/accessory1.png', overlay: '/images/accessory1.png' },
      { name: 'Accessory 2', thumbnail: '/thumbnails/accessory2.png', overlay: '/images/accessory2.png' },
      { name: 'Accessory 3', thumbnail: '/thumbnails/accessory3.png', overlay: '/images/accessory3.png' },
      { name: 'Accessory 4', thumbnail: '/thumbnails/accessory4.png', overlay: '/images/accessory4.png' },
      { name: 'Accessory 5', thumbnail: '/thumbnails/accessory5.png', overlay: '/images/accessory5.png' },
      { name: 'Accessory 6', thumbnail: '/thumbnails/accessory6.png', overlay: '/images/accessory6.png' },
      { name: 'Accessory 7', thumbnail: '/thumbnails/accessory7.png', overlay: '/images/accessory7.png' },
      { name: 'Accessory 8', thumbnail: '/thumbnails/accessory8.png', overlay: '/images/accessory8.png' },
      { name: 'Accessory 9', thumbnail: '/thumbnails/accessory9.png', overlay: '/images/accessory9.png' },
      { name: 'Accessory 10', thumbnail: '/thumbnails/accessory10.png', overlay: '/images/accessory10.png' },
    ],
    necklace: [
      { name: 'Necklace 1', thumbnail: '/thumbnails/necklace1.png', overlay: '/images/necklace1.png' },
      { name: 'Necklace 2', thumbnail: '/thumbnails/necklace2.png', overlay: '/images/necklace2.png' },
      { name: 'Necklace 3', thumbnail: '/thumbnails/necklace3.png', overlay: '/images/necklace3.png' },
      { name: 'Necklace 4', thumbnail: '/thumbnails/necklace4.png', overlay: '/images/necklace4.png' },
      { name: 'Necklace 5', thumbnail: '/thumbnails/necklace5.png', overlay: '/images/necklace5.png' },
      { name: 'Necklace 6', thumbnail: '/thumbnails/necklace6.png', overlay: '/images/necklace6.png' },
      { name: 'Necklace 7', thumbnail: '/thumbnails/necklace7.png', overlay: '/images/necklace7.png' },
      { name: 'Necklace 8', thumbnail: '/thumbnails/necklace8.png', overlay: '/images/necklace8.png' },
      { name: 'Necklace 9', thumbnail: '/thumbnails/necklace9.png', overlay: '/images/necklace9.png' },
      { name: 'Necklace 10', thumbnail: '/thumbnails/necklace10.png', overlay: '/images/necklace10.png' },
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
  const location = useLocation();

  // List of routes that do NOT use the main layout
  const fullPageRoutes = ['/register', '/work', '/work/chef', '/work/designer', '/work/pharmacist'];

  const isFullPage = fullPageRoutes.includes(location.pathname);

  return (
    <Routes>
      <Route path="/" element={<LayoutPage />} />
      <Route path="/register" element={<Register />} />
      <Route path="/work" element={<Work />} />
      <Route path="/work/chef" element={<Chef />} />
      <Route path="/work/designer" element={<Designer />} />
      <Route path="/work/pharmacist" element={<Pharmacist />} />
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
