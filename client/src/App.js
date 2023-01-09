import './App.css';
import { Routes, Route } from 'react-router-dom';

import Home from './pages/Home';
import Kitchens from './pages/Kitchens';
import Wardrobes from './pages/Wardrobes';
import Tables from './pages/Tables';
import Chairs from './pages/Chairs';
import Beds from './pages/Beds';
import Accessories from './pages/Accessories';
import Choose from './pages/Choose';


import Layout from './components/Layout/Layout';


function App() {


  return (
    <>
    <Routes>
      <Route path='/' element = {<Layout />}>
          <Route index element={< Home />}></Route>
          <Route path='kitchens' element={< Kitchens />}></Route>

          <Route path='kitchens/choose' element={ < Choose /> }></Route>
          <Route path='kitchens/write' element={ < Kitchens /> }></Route>
          <Route path='kitchens/materials' element={ < Kitchens /> }></Route>
          <Route path='kitchens/accessories' element={ < Accessories /> }></Route>

          <Route path='wardrobes' element={< Wardrobes />}></Route>
          <Route path='tables' element={< Tables />}></Route>
          <Route path='chairs' element={< Chairs />}></Route>
          <Route path='beds' element={< Beds />}></Route>
          {/* <Route path = 'about' element = { < About/> }></Route> */}
      </Route>
    </Routes>
    </>
  );
}

export default App;
