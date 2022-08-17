// imports
import './catItem.styles.scss'
import { Link } from 'react-router-dom';
// cat start
const CatItem = ( {cat} ) => {
    const {imageUrl, title, route} = cat
    return (
        <div className="col-lg-4 col-md-6 col-12">
          <Link to={route}>
            <div className="background-image" style={ {backgroundImage: `url(${imageUrl}})`} } ></div>            
          </Link>
              <div className="cat-title">
                <p className="fw-bold">{title}</p>
                <p className='fw-bold'>shop now</p>
              </div> 
        </div>
    )
} 
export default CatItem;