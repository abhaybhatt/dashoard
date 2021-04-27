import { useState } from 'react';
import Navbar from './components/navbar/Navbar.js';
import Sidebar from './components/sidebar/Sidebar.js';
import Main from './components/main/Main.js';
import './App.css';

const App = () =>{
  const[sidebar, setSidebar] = useState(false);

  const openSidebar = () =>{
    setSidebar(true);
  }

  const closeSidebar = () =>{
    setSidebar(false);
  }
  return (
    <div className="container">
      <Navbar sidebar={sidebar} openSidebar={openSidebar}/>
      <Main />
      <Sidebar sidebar={sidebar} closeSidebar={closeSidebar} />
    </div>
  );
}

export default App;
