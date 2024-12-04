
import "./Header.css"
import  Netflixlogo from"../../assets/Images/NetflixLogo (2).png"
import SearchIcon from "@mui/icons-material/Search";
import CircleNotificationsIcon from "@mui/icons-material/CircleNotifications";
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
function Header() {
  return (
    <div className="header_outer_container  ">
      <div className="header_container">
        <div className="header_left">
          <ul>
            
            <li>
              <img src={Netflixlogo} alt="Netflixlogo" width={100} />
            </li>
            <li>Home</li>
            <li>Tvshows</li>
            <li>Movies</li>
            <li>Latest</li>
            <li>MyList</li>
            <li>Browser by Languages</li>
          </ul>
        </div>
        <div className="header_right">
          <ul>
            <li>
              <SearchIcon />
            </li>
            <li>
              <CircleNotificationsIcon />
            </li>
            <li>
              <AccountBoxIcon />
            </li>
            <li>
              <ArrowDropDownIcon />
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Header



// import Container from "react-bootstrap/Container";
// import { Navbar, Nav, NavDropdown } from "react-bootstrap";

// function BasicExample() {
//   return (
//     <Navbar expand="sm" className="bg-body-tertiary  ">
//       <Container className="header_outer_container">
//         <Navbar.Brand>
//           <img src={Netflixlogo} alt="Netflixlogo" width={100} />
//         </Navbar.Brand>
        
        
//           <Nav className="me-auto">
//             <NavDropdown title="Netflix" id="basic-nav-dropdown">
//               <NavDropdown.Item href="#home">Home</NavDropdown.Item>
//               <NavDropdown.Item href="#">Tvshows</NavDropdown.Item>
//               <NavDropdown.Item href="#">Movies</NavDropdown.Item>

//               <NavDropdown.Item href="#">Latest</NavDropdown.Item>
//               <NavDropdown.Item href="#">Browser by Languages</NavDropdown.Item>
//             </NavDropdown>
            
//           </Nav>
       
//       </Container>
//       <Navbar.Brand>
//         <SearchIcon />
//         <CircleNotificationsIcon />
//         <AccountBoxIcon />
//         <ArrowDropDownIcon />
//       </Navbar.Brand>
//     </Navbar>
//   );
// }

// export default BasicExample;
