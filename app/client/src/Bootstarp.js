import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from 'react-router-dom';

function CollapsibleExample(params) {
    return (
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Container>
                <Navbar.Brand as={Link} to="home">Health click</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link as={Link} to="NewAppointment">make an appointment</Nav.Link>
                        <Nav.Link href="ViewAppointment"> view all appointments</Nav.Link>
                        <Nav.Link href="CancelAppointment">cancel appointment</Nav.Link>

                    </Nav>
                </Navbar.Collapse>
            </Container>
            <Navbar.Brand as={Link} to="Profile">{<NavDropdown title="Profile" id="collasible-nav-dropdown" >
                <NavDropdown.Item as={Link} to="EditProfile">Edit Profile</NavDropdown.Item>
                <NavDropdown.Item as={Link} to="Prescriptions">my Prescriptions</NavDropdown.Item>
                <NavDropdown.Item as={Link} to="Alerts">Alerts</NavDropdown.Item>
                <NavDropdown.Divider />
      
                {params.IsSign ?  <NavDropdown.Item as={Link} to="logOut" >Log-out</NavDropdown.Item>:  <NavDropdown.Item as={Link} to="SignUp" >Sign in</NavDropdown.Item> }
                {/* <NavDropdown.Item as={Link} to="logOut" >Log-out</NavDropdown.Item> */}
            </NavDropdown>}</Navbar.Brand>
        </Navbar>
    );
}

export default CollapsibleExample;