import React, {Component} from 'react';
import {Link} from "react-router-dom";
class Navbar extends Component {
  render() {
    return (
      <div className="navbar navbar-expand-lg bg-secondary navbar-dark">
        <button type="button" className="navbar-toggler navbar-toggler-right"
        data-toggle="collapse" data-target="#menu">
          <span className="navbar navbar-toggler-icon"></span>
        </button>
        <div className="navbar-collapse collapse" id="menu">
          <ul className="navbar-nav">
          <li className="navbar-item">
            <Link className="nav-link" to="/Admin">Admin</Link>
          </li>
          <li className="navbar-item">
            <Link className="nav-link" to="/Customer">Customer</Link>
          </li>
          <li className="navbar-item">
            <Link className="nav-link" to="/Barang">Barang</Link>
          </li>
          <li className="navbar-item">
            <Link className="nav-link" to="/Peracik">Peracik</Link>
          </li>
          <li className="navbar-item">
            <Link className="nav-link" to="/DataPesanan">Data Pesanan</Link>
          </li>
          <li className="navbar-item">
              <Link className="nav-link" to="" onClick={this.Logout}>
              Logout
              </Link>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}
export default Navbar;
