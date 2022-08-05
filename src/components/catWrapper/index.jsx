// imports
import CatItem from "../catItem";
// start wrapper
const CatWrapper = ({cats}) => {
    return (
        <div className="row g-3 text-center">
          {/* card loop */}
          {cats.map( (cat) => (
            <CatItem key={cat.id} cat={cat} />
          ))}
        {/* card end */}
        </div>
    )
}

export default CatWrapper