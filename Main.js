import React,{Component} from "react";
import {Switch, Route} from "react-router-dom";

// load navbar
import Navbar from "./Components/Navbar";
// load halaman
import Admin from "./page/Admin";
import LoginAdmin from "./page/LoginAdmin";
import Peracik from "./page/Peracik";
import Barang from "./page/Barang";
import Customer from "./page/Customer";
import DataPesanan from "./page/DataPesanan";


class Main extends Component {
  render = () => {
    return (
      <Switch>
        <Route path="/LoginAdmin" component={LoginAdmin} />
        <Route path="/Admin">
          <Navbar />
          <Admin />
        </Route>
        <Route path="/Peracik">
          <Navbar />
          <Peracik />
        </Route>
        <Route path="/Customer">
          <Navbar />
          <Customer />
        </Route>
        <Route path="/Barang">
          <Navbar />
          <Barang />
        </Route>
        <Route path="/DataPesanan">
          <Navbar />
          <DataPesanan />
        </Route>
      </Switch>
    );
  }
}
export default Main;
