// imports
import { useContext, Fragment} from 'react';
import { Link } from 'react-router-dom';
import {CatsContext} from '../../components/contexts/cats'
import ProductCard from '../../components/productCard';
// app start
const CatShow = () => {
  const { catsList } = useContext(CatsContext)
  return (
    <div className="shop py-5">
      <div className='row g-3'>
       {
        Object.keys(catsList).map(title => (
          <Fragment key={title}>
          <Link to={title} className='text-center fs-2 fw-bold text-dark text-decoration-none py-3'>{title}</Link>
          {catsList[title].slice(0,4).map( (cat) => (
                <ProductCard key={cat.id} cat={cat} />
          ))}
          </Fragment>
        ))
      }
      </div>
    </div>
  );
}

export default CatShow;
