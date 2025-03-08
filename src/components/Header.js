import { useState } from 'react';
import {Navbar, NavbarBrand, Collapse, NavbarToggler, Nav, NavItem } from 'reactstrap';
import { NavLink } from 'reactstrap';
import NucampLogo from '../app/assets/img/logo.png';
import UserLoginForm from '../features/user/UserLoginForm';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

    return (
        <Navbar dark color ='primary' sticky='top' expand='md'>
          <NavbarBrand className='ms-5' href='/'>
            <img src={NucampLogo} alt='nucamp logo' className='float-start'/>
            <h1 className='mt-1'>NuCamp</h1>
          </NavbarBrand>

          <NavbarToggler onClick={() => setMenuOpen(!menuOpen)} />
          <Collapse isOpen={menuOpen} navbar>

            <Nav className='ms-auto' navbar>
              <NavItem>
                  <NavLink className='nav-link' href='/'>
                      <i className='fa fa-home fa-lg' /> Home
                  </NavLink>
              </NavItem>
              <NavItem>
                  <NavLink className='nav-link' href='/directory'>
                      <i className='fa fa-list fa-lg' /> Directory
                  </NavLink>
              </NavItem>
              <NavItem>
                  <NavLink className='nav-link' href='/about'>
                      <i className='fa fa-info fa-lg' /> About
                  </NavLink>
              </NavItem>
              <NavItem>
                  <NavLink className='nav-link' href='/contact'>
                      <i className='fa fa-address-card fa-lg' /> Contact
                  </NavLink>
              </NavItem>
            </Nav>
            <UserLoginForm />
          </Collapse>
      </Navbar>
    )
}

export default Header;