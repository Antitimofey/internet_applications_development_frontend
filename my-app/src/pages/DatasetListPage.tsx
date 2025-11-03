import type { FC } from 'react'
import { useEffect, useState } from 'react'
import { Col, Row, Spinner, Container } from 'react-bootstrap'
import type { Dataset } from "../../components/DatasetCard/DatasetCard.tsx";
import { getDatasets } from '../../modules/itunesApi.ts'
import { BreadCrumbs } from "../../components/BreadCrumbs/BreadCrumbs.tsx";
import DatasetCard from '../../components/DatasetCard/DatasetCard.tsx'
import CustomNavbar from '../../components/Navbar/Navbar.tsx'
import WhiteNavbar from '../../components/WhiteBar/WhiteBar.tsx'
import './DatasetListPage.css'

import { ROUTES, ROUTE_LABELS } from "../../Routes.tsx";
import { useNavigate } from "react-router-dom";

import { DATASETS_MOCK} from '../../modules/datasetMock.ts'

const DatasetListPage: FC = () => {
  const [searchValue, setSearchValue] = useState("");
  const [loading, setLoading] = useState(false);
  const [datasets, setDatasets] = useState<Dataset[]>([]);

  const navigate = useNavigate();

 // Автоматическая загрузка датасетов при монтировании компонента
  useEffect(() => {
    loadInitialDatasets();
  }, []); // Пустой массив зависимостей = выполнится только при монтировании

  // Функция для первоначальной загрузки всех датасетов
  const loadInitialDatasets = async () => {
    setLoading(true);
    try {
      const response = await getDatasets(); // Без параметров = все датасеты
      setDatasets(response || response); // В зависимости от структуры ответа
      console.log('Initial datasets loaded:', response);
    } catch (error) {
      console.error('Error loading initial datasets, using mock data:', error);
      // Используем mock данные при ошибке
      setDatasets(DATASETS_MOCK || DATASETS_MOCK);
    } finally {
      setLoading(false);
    }
  };


  const handleDatasetsSearch = () => {
    setLoading(true);
    getDatasets(searchValue)
      .then((response) => {
        setDatasets(response);
        setLoading(false);
        console.log(searchValue)
        console.log(response)
      })
      .catch(() => { // В случае ошибки используем mock данные, фильтруем по имени
        setDatasets(DATASETS_MOCK);
        setLoading(false);
      });
  };

  const handleCardClick = (id: number) => {
    // клик на карточку, переход на страницу альбома
    navigate(`${ROUTES.DATASETS}/${id}`);
  };

  return (
    <div>
      <CustomNavbar/>

      <BreadCrumbs crumbs={[{ label: ROUTE_LABELS.DATASETS }]} />

      <WhiteNavbar 
        searchValue={searchValue}
        setSearchValue={(searchValue) => setSearchValue(searchValue)}
        loading={loading}
        onSubmit={handleDatasetsSearch}
        basketCount={1}
      />

      {loading && ( // здесь можно было использовать тернарный оператор, но это усложняет читаемость
        <div className="loadingBg">
          <Spinner animation="border" />
        </div>
      )}
      {!loading &&
        (!datasets.length /* Проверка на существование данных */ ? (
          <div>
            <h1>К сожалению, пока ничего не найдено :(</h1>
          </div>
        ) : (
          <Container fluid="md" className="px-4"> {/* или fluid="lg" */}
            <Row xs={1} md={2} lg={3} xl={3} className="g-4">
              {datasets.map((item, index) => (
                <Col key={index}>
                  <DatasetCard
                    dataset={item}
                    cardIndex={index}
                    onAddToCart={() => {}}
                  />
                </Col>
              ))}
            </Row>
          </Container>
        ))}
    </div>
  );
};

export default DatasetListPage;