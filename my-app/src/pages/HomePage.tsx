import type { FC } from 'react';
import { Link } from "react-router-dom";
import { ROUTES } from "../../Routes";
import { Button, Col, Container, Row, Carousel } from "react-bootstrap";
import CustomNavbar from '../../components/Navbar/Navbar'
import './HomePage.css'


// import BasicExample from "../components/BasicExample/BasicExample";
// import { dest_root } from "../../target_config";
// import "./HomePage.css";

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
            {/* <Link to={ROUTES.DATASETS}> */}
              {/* <Button variant="primary">Просмотреть модели</Button> */}
              <Carousel className="homepage-carousel">
                <Carousel.Item>
                  <img
                    className="d-block w-100 carousel-img"
                    src="http://localhost:9000/datasets/images/2025/11/03/bef5ca1f-bebe-4805-aeae-5af02d3fc81a.png"
                    alt="Слайд 1"
                  />
                </Carousel.Item>

                <Carousel.Item>
                  <img
                    className="d-block w-100 carousel-img"
                    src="http://localhost:9000/datasets/images/2025/11/03/2ac5c2e8-e8a5-4b06-b175-78257139c72c.png"
                    alt="Слайд 2"
                  />
                </Carousel.Item>
              </Carousel>
            {/* </Link> */}
          </Col>
        </Row>
      </Container>
    </Container>
  );
};