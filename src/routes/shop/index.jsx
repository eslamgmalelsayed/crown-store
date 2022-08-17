// imports
import { Routes, Route } from 'react-router-dom'
import CatShow from '../catShow';
import Cat from '../../components/cat/cat';
// app start
const Shop = () => {
  return (
    <Routes >
      <Route index element={<CatShow />} />
      <Route path=':cat' element={<Cat />} />
    </Routes>
  )
}

export default Shop;
