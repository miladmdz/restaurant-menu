import React, { useState } from 'react';
import menu from './data';
import Menu from './Components/Menu';
import Categories from './Components/Categories';

const allCategorise=["all",...new Set(menu.map(men=>men.category))]

function App() {

  const [allMenus,setAllmenus]=useState(menu)
  const[categorise,setCategorise]=useState(allCategorise)

  const filterMenus=(category)=>{
    if(category==="all"){
      setAllmenus(menu)
      return
    }
    let filteredMenus=menu.filter(men=>men.category===category)
    setAllmenus(filteredMenus)
  }

  return (
    <main>
      <section className="menu section">
        <div className="title">
          <h2>our menu</h2>
          <div className="underline"></div>
        </div>
        <Categories categorise={categorise} filterMenus={filterMenus}/>
        <Menu allMenus={allMenus} />
      </section>
    </main>
  );
}

export default App;
