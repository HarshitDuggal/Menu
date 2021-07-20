import React, { useState } from 'react';
import Menu from './Menu';
import Categories from './Categories';
import items from './data';
import menu from './data';

function App() {
  const [menuitems, setmenuitems] = useState(items);
  const [ctegories, setctegories] = useState([]);
  const filteritems = (category) => {
    const newitems = items.filter((item) => item.category === category)
      setmenuitems(newitems)
    } 
  return <main>
      <section className ='menu'>
      <div className='title'> 
        <h2>Our Menu</h2>
        <div className='underline'></div>
      </div>
      <Categories filteritems={filteritems}/ >
      <Menu item = {menuitems}/>
    </section>;
  </main>
  
}

export default App;
