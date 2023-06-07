import './App.css';
import { Routes, Route } from 'react-router-dom';

import Layout from './components/Layout/Layout';
import { authRoutes, publicRoutes } from './routes';
import Home from './pages/Home/Home';
import { useContext } from 'react';
import {Context} from './index';


function App() {

  const {user} = useContext(Context)

  return (
    <>
    <Routes>
      <Route path='/' element = {<Layout />}>
          {user.isAuth && authRoutes.map(({path, element}) =>
            <Route key={path} path={path} element={element}/>
          )}
          {publicRoutes.map(({path, element}) =>
            <Route key={path} path={path} element={element}/>
          )}
          <Route path="*" element= {<Home/>}/>
      </Route>
    </Routes>
    </>
  );
}

export default App;
