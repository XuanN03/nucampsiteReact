import CampsiteDirectoryPage from './pages/CampsitesDirectoryPage';
// import React from 'react';
// import { Container, Navbar, NavbarBrand } from 'reactstrap';
// import NucampLogo from './app/assets/img/logo.png';
import Header from './components/Header';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header/>
      <CampsiteDirectoryPage/>
      <Footer/>
    </div>
  );
}

export default App;
