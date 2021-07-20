import React, { useState } from 'react';
import Menu from './Menu';
import Categories from './Categories';
import items from './data';
import menu from './data';

const allCategories = ['all',...new Set(items.map((item)=> item.category))]

function App() {
  const [menuitems, setmenuitems] = useState(items);
  const [ctegories, setctegories] = useState([allCategories]);
  //maual aproach
  const filteritems = (category) => {
    if(category === 'all'){
      setmenuitems(items)
      return; 
    }
    const newitems = items.filter((item) => item.category === category)
      setmenuitems(newitems)
    } 
  return <main>
      <section className ='menu'>
      <div className='title'> 
        <h2>Our Menu</h2>
        <div className='underline'></div>
      </div>
      <Categories allCategories={allCategories} filteritems={filteritems} />
      <Menu item = {menuitems}/>
    </section>;
  </main>
  
}

export default App;
