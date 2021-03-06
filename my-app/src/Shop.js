import react, { useState, useEffect } from 'react';
import './App.css';
import {Link} from 'react-router-dom';

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
        item.items.map(element => (
          <div className="shop-item">
            <img key={element.imgId} src={element.images.smallIcon} />
            <h1 key={element.nameId}>
            <Link to={`/shop/${element.nameId}`}>{element.name}</Link>
            </h1>
          </div>
        ))
      ))}
    </div>
  );
}

export default Shop;
