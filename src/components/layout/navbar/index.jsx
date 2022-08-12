// imports
import { Outlet, Link } from "react-router-dom";
import './navbar.styles.scss'
import {ReactComponent as Logo } from '../../../assets/images/logo.svg'
import {ReactComponent as Cart } from '../../../assets/images/cart.svg'
// nav start
const NavBar = () => {
    return (
      <>
        <nav className="navbar navbar-expand-lg pb-4">
          <Link className="navbar-brand" to="/">
            <Logo />
          </Link>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav"      aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav ms-auto">
                <li className="nav-item">
                  <Link className="nav-link active fs-5 fw-bold" aria-current="page" to='/shop'>shop</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link active fs-5 fw-bold" aria-current="page" to='/contact'>contact</Link>
                </li><li className="nav-item">
                  <Link className="nav-link active fs-5 fw-bold" aria-current="page" to='/signin'>sign in</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link fs-5" to='/cart'><Cart /></Link>
                </li>
              </ul>
            </div>
        </nav>
        <Outlet />
      </>
    )
}

export default NavBar