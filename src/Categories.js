import React from 'react';

const Categories = ({filteritems}) => {

  return <div className='btn-container'>
      <button className='filter-btn' onClick={() => {filteritems('all')}}>all</button>
      <button className='filter-btn' onClick={() => {filteritems('breakfast')}}>Breakfast</button>
    </div>
};

export default Categories;
