import react, { useState, useEffect } from 'react';
import './App.css';

function Shop() {

  useEffect(() => {
    fetchItems();
  }, []);

  const [items, setItems] = useState([]);

  const fetchItems = async () => {
    const data = await fetch(
      'https://fortnite-api.com/v2/shop/br'
    );

    const items = await data.json();
    console.log(items.data.daily.entries);
    setItems(items.data.daily.entries);
  };

  return (
    <div className="shop">
      {items.map(item => (
        item.items.map(el => (
          <div className="shop-item">
          <img src={el.images.smallIcon}/>
          <h1>{el.name}</h1>
          </div>
          ))
      ))}
    </div>
  );
}

export default Shop;
