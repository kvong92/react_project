import './App.css';
import { Routes, Route, useLocation } from "react-router-dom";

import ToDoList from './pages/ToDoList.js';
import Counter from './pages/Counter.js';
import UserProfile from './pages/UserProfile.js';
import Navbar from './components/Navbar.js';
import Home from './pages/Home';
import ProductsList from './pages/ProductsList';
import FilmsList from './pages/FilmsList';

import './assets/css/app.css'

function App() {
  const location = useLocation();

  return (
  <div className='app-main'>
      <Navbar/>
      <p>Current Location: {location.pathname}</p>
            <Routes>
              <Route path="/" exact element={<Home/>} />
              <Route path="/todolist" element={<ToDoList/>} />
              <Route path="/counter" element={<Counter/>} />
              <Route path="/userprofile" element={<UserProfile/>} />
              <Route path="/productslist" element={<ProductsList/>} />
              <Route path="/filmslist" element={<FilmsList/>} />
              <Route path='/filmslist/:page' element={<FilmsList/>} />
            </Routes>
  </div>
      
  );
}

export default App;