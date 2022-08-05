// imports
import './catItem.styles.scss'
// cat start
const CatItem = ( {cat} ) => {
    const {imageUrl,title} = cat
    return (
        <div className="col-lg-4 col-md-6 col-12">
              <div className="background-image" style={ {backgroundImage: `url(${imageUrl}})`} } ></div>      
              <div className="cat-title">
                <p className="fw-bold">{title}</p>
                <p>shop now</p>
              </div> 
        </div>
    )
} 
export default CatItem;