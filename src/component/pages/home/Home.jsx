import React from 'react';
import "./Home.scss";
import Navbar from '../../narbar/Navbar';
import Featured from '../../featured/Featured';
import List from '../../list/List';

function Home() {
  return (
    <div className='home'>  
        
        <Navbar/>
        <Featured type="movie"/>
        <List/>
        <List/>
        <List/>
        <List/>
    </div>
  )
}

export default Home