import React,{ useState} from 'react'
import { Nav, NavItem, NavLink, Navbar, NavbarBrand, Dropdown, DropdownToggle, DropdownItem, DropdownMenu} from 'reactstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import  '../style.css';


const Navigation = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggle = () => setDropdownOpen(!dropdownOpen);
  
  
  

  return (
    <div className='container'>
    <Nav tabs>
      <NavItem>
        <NavLink href="#" active>
          Link
        </NavLink>
      </NavItem>
      <Dropdown nav isOpen={dropdownOpen} toggle={toggle}>
        <DropdownToggle nav caret>
          Dropdown
        </DropdownToggle>
        <DropdownMenu>
          <DropdownItem header>Header</DropdownItem>
          <DropdownItem disabled>Action</DropdownItem>
          <DropdownItem>Another Action</DropdownItem>
          <DropdownItem divider />
          <DropdownItem>Another Action</DropdownItem>
        </DropdownMenu>
      </Dropdown>
      <NavItem>
        <NavLink href="#">Link</NavLink>
      </NavItem>
      <NavItem>
        <NavLink href="#">Another Link</NavLink>
      </NavItem>
      <NavItem>
        <NavLink disabled href="#">
          Disabled Link
        </NavLink>
      </NavItem>
    </Nav>
  
</div>
  
    

  );
  
}

export default Navigation;