import "./DatasetPage.css";
import './metacss.css';
import type { FC } from 'react';
import {useEffect, useState } from "react";
import { ROUTES, ROUTE_LABELS } from "../../Routes.tsx";
import CustomNavbar from '../../components/Navbar/Navbar.tsx'
import { BreadCrumbs } from "../../components/BreadCrumbs/BreadCrumbs.tsx";
import { useParams } from "react-router-dom";
import defaultImage from "../assets/default-img.jpg";
import { Container, Row, Col, Spinner, Image } from "react-bootstrap";;
import type { Dataset } from "../../components/DatasetCard/DatasetCard";
import { getDatasetById } from '../../modules/itunesApi.ts'
import { DATASETS_MOCK} from '../../modules/datasetMock.ts'


export const DatasetPage: FC = () => {
  const [dataset, setDataset] = useState<Dataset>();
  const [loading, setLoading] = useState(true);
  
  const { id } = useParams(); // id страницы: "/datasets/12"

  useEffect(() => {
    if (!id) return;
    
    const loadDataset = async () => {
      setLoading(true);
      try {
        const datasetData = await getDatasetById(id);
        setDataset(datasetData);
      } catch (error) {
        console.error('Error loading dataset, using mock data:', error);
        // Fallback на mock данные
        const mockDataset = DATASETS_MOCK.find(
          (item: Dataset) => String(item.id) === id
        );
        setDataset(mockDataset);
      } finally {
        setLoading(false);
      }
    };

    loadDataset();
  }, [id]);

  if (loading) {
    return (
      <div className="dataset-page-loader">
        <Spinner animation="border" />
      </div>
    );
  }

  if (!dataset) {
    return (
      <div className="dataset-page-error">
        <h1>Датасет не найден</h1>
      </div>
    );
  }

  return (
    <div className="dataset-page">

      <CustomNavbar/>

      <BreadCrumbs
        crumbs={[
          { label: ROUTE_LABELS.DATASETS, path: ROUTES.DATASETS },
          { label: dataset.label },
        ]}
      />
      
      <Container className="dataset-container">
        <div className="dataset-card-detailed">
          <Row className="align-items-center">
            <Col md={6}>
              <Image
                src={dataset.img || defaultImage}
                alt={dataset.label}
                className="dataset-image"
                fluid
              />
            </Col>
            
            <Col md={6}>
              <div className="dataset-info">
                <h1 className="dataset-title">{dataset.label}</h1>
                
                <div className="dataset-characteristics">
                  <h3>Характеристики:</h3>
                  <div className="characteristic-item">
                    <span className="char-label">Эталонная производительность</span>
                    <span className="char-value">{dataset.benchmark_performance} эт-тов / сек.</span>
                  </div>
                  <div className="characteristic-item">
                    <span className="char-label">Размер датасета</span>
                    <span className="char-value">{dataset.dataset_size.toLocaleString()} шт.</span>
                  </div>
                  <div className="characteristic-item">
                    <span className="char-label">Статус</span>
                    <span className="char-value">{dataset.is_active ? 'Активен' : 'Неактивен'}</span>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </div>
      </Container>
    </div>
  );
};

export default DatasetPage;