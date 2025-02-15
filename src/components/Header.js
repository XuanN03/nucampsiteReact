import {Navbar, NavbarBrand} from 'reactstrap'
import NucampLogo from '../app/assets/img/logo.png'

const Header = () => {
    return (
        <Navbar dark color ='primary' stick='top' expand='md'>
          <NavbarBrand href='/'>
            <img src={NucampLogo} alt='nucamp logo' />
          </NavbarBrand>
      </Navbar>
    )
}

export default Header;