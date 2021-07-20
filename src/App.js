import React, { useState } from 'react';
import Menu from './Menu';
import Categories from './Categories';
import items from './data';
import menu from './data';

function App() {
  const [menuitems, setmenuitems] = useState(items);
  const [ctegories, setctegories] = useState([]);
  return <main>
      <section className ='menu'>
      <div className='title'> 
        <h2>Our Menu</h2>
        <div className='underline'></div>
      </div>
      <Categories/>
      <Menu item = {menuitems}/>
    </section>;
  </main>
  
}

export default App;
