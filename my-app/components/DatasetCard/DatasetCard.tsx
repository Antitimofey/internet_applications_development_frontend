import type { FC } from 'react';
import { Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import defaultImage from '../../src/assets/default-img.jpg'
import { ROUTES } from '../../Routes';
import './DatasetCard.css';


export interface Dataset {
  id: number;
  label: string;
  benchmark_performance: number;
  dataset_size: number;
  is_active: boolean;
  img: string;
}


interface DatasetCardProps {
  dataset: Dataset;
  currentUserId?: string;
  cardIndex?: number;
  onAddToCart?: (dataset: Dataset) => void;
}

const DatasetCard: FC<DatasetCardProps> = ({ 
  dataset, 
  onAddToCart 
}) => {
  const handleAddToCart = () => {
    if (onAddToCart) {
      onAddToCart(dataset);
    }
  };

  return (
    <Card className="dataset-card">
      <Card.Img     
        variant="top" 
        src={dataset.img || defaultImage}
        // src={dataset.img}
        alt={dataset.label}
        className="dataset-card-img"
      />
      <Card.Body className="dataset-card-body">
        <Card.Title className="dataset-label">
          {dataset.label}
        </Card.Title>

        <div className="dataset-card-actions">
          <Link 
            to={`${ROUTES.DATASETS}/${dataset.id}/`}
            className="show-dataset-details-btn"
          >
            Подробнее
          </Link>
          
          <Button 
            className="show-dataset-details-btn"
            onClick={handleAddToCart}
            style={{
              backgroundColor: '#de231e',
              borderColor: '#de231e'
            }}
          >
            В корзину
          </Button>
        </div>
      </Card.Body>
    </Card>
  );
};

export default DatasetCard;