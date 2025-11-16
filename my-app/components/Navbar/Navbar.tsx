import type { FC } from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { ROUTES } from '../../Routes';
import './Navbar.css';

interface CustomNavbarProps {
}

const CustomNavbar: FC<CustomNavbarProps> = () => {
  return (
    
    <Navbar className="black-bar">
      <Container fluid>
        <Navbar.Collapse className="justify-content-end">
          <Nav>
            <Nav.Link 
              as={Link} 
              to={ROUTES.DATASETS}
              className="text-wrapper"
            >
              Модели
            </Nav.Link>
            <Nav.Link 
              as={Link} 
              to={ROUTES.HOME}
              className="text-wrapper"
            >
              Домой
            </Nav.Link>
          </Nav>``
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default CustomNavbar;