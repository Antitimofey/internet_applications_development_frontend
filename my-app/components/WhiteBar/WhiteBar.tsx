
import type { FC, FormEvent } from 'react';
import { Link, useParams } from 'react-router-dom';
import './WhiteBar.css';





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
      <h1 className="dataset-market-logo">
        N.ВИДЕО
      </h1>
      
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
            src="../../src/assets/magnifier.svg" 
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
            src="../../src/assets/basket.svg" 
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








































// interface WhiteNavbarProps {
//   currentUserId?: string;
//   showSearchAndCart: boolean;  // Булевый флаг вместо {% if %}
//   basketCount?: number;
//   initialSearchValue?: string;
// }

// const WhiteNavbar: FC<WhiteNavbarProps> = ({ 
//   currentUserId, 
//   showSearchAndCart, 
//   basketCount = 0, 
//   initialSearchValue = '' 
// }) => {
//   const navigate = useNavigate();
  
//   const handleSearchSubmit = (e: FormEvent<HTMLFormElement>) => {
//     e.preventDefault();
//     const formData = new FormData(e.currentTarget);
//     const searchValue = formData.get('search-model') as string;
    
//     // Навигация с поисковым параметром
//     if (currentUserId) {
//       navigate(`/ai-market-idx/${currentUserId}?search=${encodeURIComponent(searchValue)}`);
//     } else {
//       navigate(`/?search=${encodeURIComponent(searchValue)}`);
//     }
//   };

//   const isCartDisabled = basketCount === 0;

//   return (
//     <Container fluid className="white-bar">
//       <h1 className="dataset-market-logo">
//         N.ВИДЕО
//       </h1>
      
//       {showSearchAndCart && (
//         <>
//           <Form 
//             className="finding-model-rect" 
//             role="search" 
//             onSubmit={handleSearchSubmit}
//           >
//             <Form.Control
//               type="search"
//               id="search-input"
//               className="finding-model-input"
//               name="search-model"
//               placeholder="Искать по названию"
//               aria-label="Поиск по названию"
//               defaultValue={initialSearchValue}
//             />
//             <Button 
//               type="submit"
//               className="group"
//               aria-label="Поиск"
//               variant="link"
//             >
//               <img 
//                 className="magnifier-svg" 
//                 src="../../src/assets/magnifier.svg" 
//                 alt="Поиск" 
//               />
//             </Button>
//           </Form>
          
//           <div className="goto-time-calc-div">
//             <Link 
//               to={currentUserId ? `/time-calc-idx/${currentUserId}` : '#'}
//               className="time-calc-href"
//               aria-label="Корзина"
//               style={isCartDisabled ? {
//                 cursor: 'not-allowed',
//                 pointerEvents: 'none',
//                 opacity: 0.6
//               } : undefined}
//             >
//               <img 
//                 className="basket-img" 
//                 src="../../src/assets/basket.svg" 
//                 alt="Корзина" 
//               />
//               {basketCount > 0 && (
//                 <span className="basket-count">{basketCount}</span>
//               )}
//               <span className="time-calc-href-text">Корзина</span>
//             </Link>
//           </div>
//         </>
//       )}
//     </Container>
//   );
// };

// export default WhiteNavbar;




