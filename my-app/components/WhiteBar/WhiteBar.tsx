
import type { FC, FormEvent } from 'react';
import { Link, useParams } from 'react-router-dom';
import './WhiteBar.css';

import basket from "../../src/assets/basket.svg"
import magnifier from "../../src/assets/magnifier.svg"


interface WhiteNavbarProps {
  searchValue: string;
  setSearchValue: (value: string) => void;
  onSubmit: () => void;
  basketCount?: number;
  loading?: boolean;
}

const WhiteNavbar: FC<WhiteNavbarProps> = ({
  searchValue,
  setSearchValue,
  onSubmit,
  basketCount = 0,
  loading = false
}) => {
  const { user_id } = useParams<{ user_id: string }>();
  
  const handleFormSubmit = (e: FormEvent) => {
    e.preventDefault();
    onSubmit();
  };

  const isBasketDisabled = basketCount === 0;

  return (
    <section className="white-bar">
      <div>
        <h1 className="dataset-market-logo">
          N.ВИДЕО
        </h1>
      </div>
    
      <form 
        className="finding-model-rect" 
        role="search" 
        onSubmit={handleFormSubmit}
      >
        <input 
          type="search" 
          id="search-input"
          className="finding-model-input" 
          name="search-model" 
          placeholder="Искать по названию"
          aria-label="Поиск по названию" 
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)}
        />
        <button 
          type="submit" 
          className="group" 
          aria-label="Поиск"
          disabled={loading}
        >
          <img 
            className="magnifier-svg" 
            src={magnifier}
            alt="Поиск" 
          />
        </button>
      </form>
      
      <div className="goto-time-calc-div">
        <Link 
          to={user_id ? `/time-calc-idx/${user_id}` : '#'}
          className="time-calc-href" 
          aria-label="Корзина"
          style={isBasketDisabled ? {
            cursor: 'not-allowed',
            pointerEvents: 'none',
            opacity: 0.6
          } : undefined}
        >
          <img 
            className="basket-img" 
            src={basket}
            alt="Корзина" 
          />
          {basketCount > 0 && (
            <span className="basket-count">{basketCount}</span>
          )}
          <span className="time-calc-href-text">Корзина</span>
        </Link>
      </div>
    </section>
  );
};

export default WhiteNavbar;
