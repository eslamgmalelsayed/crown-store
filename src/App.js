// imports
import * as React from "react";
import { Routes, Route } from "react-router-dom";
import NavBar from "./components/layout/navbar";
import Home from "./routes/home";
// lazy load pages
const Shop = React.lazy(() => import("./routes/shop"));
const Contact = React.lazy(() => import("./routes/contact"));
const SignIn = React.lazy(() => import("./routes/signIn"));
const CheckOut = React.lazy(() => import("./routes/checkOut"));
// app start
function App() {
  return (
    <div className="App">
      <div className='container'>
        <Routes>
          <Route path="/" element={<NavBar />} >
            <Route index element={<Home/>} />
            <Route path="/shop/*" element={
              <React.Suspense fallback={<>...</>}>
              <Shop />
            </React.Suspense>
            } />
            <Route path="/contact" element={
              <React.Suspense fallback={<>...</>}>
              <Contact />
            </React.Suspense>
            } />
            <Route path="/signIn" element={
              <React.Suspense fallback={<>...</>}>
              <SignIn />
            </React.Suspense>
            } />
            <Route path="/checkout" element={
              <React.Suspense fallback={<>...</>}>
              <CheckOut />
            </React.Suspense>
            } />
          </Route>
        </Routes>
      </div>
    </div>
  );
}

export default App;
