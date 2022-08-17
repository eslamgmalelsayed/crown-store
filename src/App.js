// imports
import { Routes, Route } from "react-router-dom";
import NavBar from "./components/layout/navbar";
import Home from "./routes/home";
import Shop from "./routes/shop";
import Contact from "./routes/contact";
import SignIn from "./routes/signIn";
import CheckOut from "./routes/checkOut";
// app start
function App() {
  return (
    <div className="App">
      <div className='container'>
        <Routes>
          <Route path="/" element={<NavBar />} >
            <Route index element={<Home/>} />
            <Route path="/shop/*" element={<Shop/>} />
            <Route path="/contact" element={<Contact/>} />
            <Route path="/signin" element={<SignIn/>} />
            <Route path="/checkout" element={<CheckOut/>} />
          </Route>
        </Routes>
      </div>
    </div>
  );
}

export default App;
