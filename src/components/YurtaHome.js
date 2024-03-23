import { useState } from 'react';
import { data } from './data';
import React from 'react';
import FilterItems from './FilterItems';
import ItemsForm from './ItemsForm';


function YurtaHome(){ 

const [items, setItems] = useState (data);

  const chosenItem = (searchTerm)=>{
    const newItem = data.filter (element =>element.searchTerm === searchTerm);
    setItems( newItem);
  }


  return (
    <div>
    <div className='cont'>
<h2 className='back'>Free Standard Shipping</h2>
    </div>
    <FilterItems filteredItems={chosenItem}/>
<ItemsForm elegante = {items}/>
    </div>
  )

}


  export default YurtaHome;