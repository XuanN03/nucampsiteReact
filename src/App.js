import { Routes, Route } from 'react-router-dom';
import ContactPage from './pages/ContactPage';
import HomePage from './pages/HomePage';
import CampsitesDirectoryPage from './pages/CampsitesDirectoryPage';
// import React from 'react';s
// import { Container, Navbar, NavbarBrand } from 'reactstrap';
// import NucampLogo from './app/assets/img/logo.png';
import Header from './components/Header';
import Footer from './components/Footer';
import CampsiteDetailPage from './pages/CampsiteDetailPage';
import './App.css';
import { Form } from 'reactstrap';
import AboutPage from './pages/AboutPage';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchCampsites } from './features/campsites/campsitesSlice';
import { fetchPartners } from './features/partners/partnersSlice';
import { fetchPromotions } from './features/promotions/promotionsSlice';
import { fetchComments } from './features/comments/commentsSlice';

function App() {
  const dispatch = useDispatch();

  useEffect(()=> {
    dispatch(fetchCampsites());
    dispatch(fetchPartners());
    dispatch(fetchPromotions());
    dispatch(fetchComments());
  }, [dispatch]);

  return (
    <div className="App">
      <Header/>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='contact' element={<ContactPage />} />
        <Route path='directory' element={<CampsitesDirectoryPage />}/>
        <Route path='directory/:campsiteId' element={<CampsiteDetailPage />} />
        <Route path='about' element={<AboutPage />} />
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
