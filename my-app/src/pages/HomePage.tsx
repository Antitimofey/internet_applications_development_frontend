import type { FC } from 'react';
import { Link } from "react-router-dom";
import { ROUTES } from "../../Routes";
import { Button, Col, Container, Row } from "react-bootstrap";
import CustomNavbar from '../../components/Navbar/Navbar'
import './HomePage.css'

export const HomePage: FC = () => {
  return (
    <Container fluid className="full-page-container">
      <CustomNavbar/>
      <Container>
        <Row>
          <Col md={6}>
            <h1 className='dataset-market-logo'>N-Видео</h1>
            <p>
              Добро пожаловать в N-Видео! Здесь вы можете подобрать модели для
              машинного обучения и датасеты к ним.
            </p>
            <Link to={ROUTES.ALBUMS}>
              <Button variant="primary">Просмотреть модели</Button>
            </Link>
          </Col>
        </Row>
      </Container>
    </Container>
  );
};