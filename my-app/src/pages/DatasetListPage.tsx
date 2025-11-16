import type { FC } from 'react'
import { useEffect, useState } from 'react'
import { Col, Row, Spinner, Container } from 'react-bootstrap'
// import type { Dataset } from "../../components/DatasetCard/DatasetCard.tsx";
import { getBasketIcon, getDatasets } from '../../modules/itunesApi.ts'
import { BreadCrumbs } from "../../components/BreadCrumbs/BreadCrumbs.tsx";
import DatasetCard from '../../components/DatasetCard/DatasetCard.tsx'
import CustomNavbar from '../../components/Navbar/Navbar.tsx'
import WhiteNavbar from '../../components/WhiteBar/WhiteBar.tsx'
import './DatasetListPage.css'

// import { ROUTES } from "../../Routes.tsx";
import { ROUTE_LABELS } from "../../Routes.tsx";
// import { useNavigate } from "react-router-dom";

import { DATASETS_MOCK} from '../../modules/datasetMock.ts'

// ДОБАВЬТЕ эти импорты
import { useDispatch } from 'react-redux'
import { useDatasets, setDatasetsAction, useSearchValue, setSearchValueAction } from '../../slices/dataSlice'

const DatasetListPage: FC = () => {
  // const [searchValue, setSearchValue] = useState("");
  const [loading, setLoading] = useState(false);
  // const [datasets, setDatasets] = useState<Dataset[]>([]);
  const [basketCount, setBasketCount] = useState(0);

  // ДОБАВЬТЕ эти строки
  const dispatch = useDispatch();
  const datasets = useDatasets(); // Получаем датасеты из Redux
  const searchValue = useSearchValue(); // ← ДОБАВЬТЕ получение searchValue из Redux


  // const navigate = useNavigate();

 // Автоматическая загрузка датасетов при монтировании компонента
  useEffect(() => {
    loadInitialDatasets();
    loadBasket();
  }, []); // Пустой массив зависимостей = выполнится только при монтировании

  // Функция для первоначальной загрузки всех датасетов
  const loadInitialDatasets = async () => {
    setLoading(true);
    try {
      const response = await getDatasets(); // Без параметров = все датасеты
      dispatch(setDatasetsAction(response || response)); // Сохраняем в Redux
      console.log('Initial datasets loaded:', response);
    } catch (error) {
      console.error('Error loading initial datasets, using mock data:', error);
      // Используем mock данные при ошибке
      dispatch(setDatasetsAction(DATASETS_MOCK || DATASETS_MOCK)); // Сохраняем mock в Redux
    } finally {
      setLoading(false);
    }
  };

  // Загружаем данные корзины при монтировании компонента
  const loadBasket = async () => {
    try {
      const basketData = await getBasketIcon();
      setBasketCount(basketData.datasets_count);
    } catch (error) {
      console.error('Error loading basket:', error);
      setBasketCount(0); // Fallback
    }
  };



  const handleDatasetsSearch = () => {
    setLoading(true);
    getDatasets(searchValue)
      .then((response) => {
        dispatch(setDatasetsAction(response)); // Сохраняем результаты поиска в Redux
        setLoading(false);
        console.log(searchValue)
        console.log(response)
      })
      .catch(() => { // В случае ошибки используем mock данные, фильтруем по имени
        dispatch(setDatasetsAction(DATASETS_MOCK)); // Сохраняем mock в Redux
        setLoading(false);
      });
  };

  // ДОБАВЬТЕ функцию для обновления searchValue в Redux
  const handleSetSearchValue = (value: string) => {
    dispatch(setSearchValueAction(value));
  };

  // const handleCardClick = (id: number) => {
  //   // клик на карточку, переход на страницу альбома
  //   navigate(`${ROUTES.DATASETS}/${id}`);
  // };

  return (
    <div>
      <CustomNavbar/>

      <BreadCrumbs crumbs={[{ label: ROUTE_LABELS.DATASETS }]} />

      <WhiteNavbar 
        searchValue={searchValue}
        setSearchValue={handleSetSearchValue}
        loading={loading}
        onSubmit={handleDatasetsSearch}
        basketCount={basketCount}
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
          <Container fluid="md" className="px-4">
            <Row xs={1} md={2} lg={3} xl={3} className="g-4 justify-content-center">
              {datasets.map((item, index) => (
                <Col key={index} className="d-flex justify-content-center">
                  <DatasetCard
                    dataset={item}
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