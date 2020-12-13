import react, {useState, useEffect} from 'react';
import './App.css';

function Shop() {

  useEffect(() => {
      fetchItems();
  },[]);

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
    <div>
        {items.map(item => (
          <h1> {items.devName} </h1>
        ))}
    </div>
  );
}

export default Shop;
