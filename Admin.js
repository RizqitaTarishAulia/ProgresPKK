import React, {Component} from "react"; // melakukan request http
import axios from "axios"; // memberi informasi dalam bentuk text
import $ from "jquery";
import Modal from "../Components/Modal";
import Toast from "../Components/Toast";

class Admin extends Component {
  constructor() { //fungsi yang pertama kalli dijalankan
    super();
    this.state = {
      admin: [],
      id_admin: "",
      nama_admin: "",
      username: "",
      password: "",
      action: "",
      nohp: "",
      message: ""
    }


  }

    

    render(){ //menampilkan elemen pada halaman web
      return(
        <div className="container">
          <div className="card mt-2">
            {/* header card */}
            <div className="card-header bg-primary">
              <div className="row">
                <div className="col-sm-8">
                  <h4 className="text-white">Data Admin</h4>
                </div>
                <div className="col-sm-4">
                  <input type="text" className="form-control" name="find"
                    onChange={this.bind} value={this.state.find} onKeyUp={this.search}
                    placeholder="Pencarian..." />
                </div>
              </div>

            </div>
            {/* content card */}
            <div className="card-body">
              <Toast id="message" autohide="true" title="Informasi">
                {this.state.message}
              </Toast>
              <Toast id="loading" autohide="false" title="Informasi">
                <span className="fa fa-spin fa-spinner"></span> Sedang Memuat
              </Toast>
              <table className="table">
                <thead>
                  <tr>
                    <th>ID Admin</th>
                    <th>Nama</th>
                    <th>Username</th>
                    <th>Email</th>
                    <th>Option</th>
                  </tr>
                </thead>
                <tbody>
                  { this.state.admin.map((item) => {
                    return(
                      <tr key={item.id_admin}>
                        <td>{item.id_admin}</td>
                        <td>{item.nama}</td>
                        <td>{item.username}</td>
                        <td>{item.nohp}</td>
                        <td>
                          <button className="m-1 btn btn-sm btn-info" onClick={() => this.Edit(item)}>
                            <span className="fa fa-edit"></span>
                          </button>
                          <button className="m-1 btn btn-sm btn-danger"
                            onClick={() => this.Drop(item.id_user)}>
                            <span className="fa fa-trash"></span>
                          </button>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>

              {/* tombol tambah */}
              <button className="btn btn-success my-2" onClick={this.Add}>
                <span className="fa fa-plus"></span> Tambah Admin
              </button>

              {/* form modal siswa*/}
              <Modal id="modal_admin" title="Form Admin" bg_header="success" text_header="white">
                <form onSubmit={this.Save}>
                  Nama
                  <input type="text" className="form-control" name="nama_admin"
                    value={this.state.nama_admin} onChange={this.bind} required />
                  Username
                  <input type="text" className="form-control" name="username"
                    value={this.state.username} onChange={this.bind} required />
                  No HP
                  <input type="number" className="form-control" name="nohp"
                    value={this.state.nohp} onChange={this.bind} required />
                  Password
                  <input type="text" className="form-control" name="password"
                    value={this.state.password} onChange={this.bind} required />
                  <button type="submit" className="btn btn-info pull-right m-2">
                    <span className="fa fa-check"></span> Simpan
                  </button>
                </form>
              </Modal>
            </div>
          </div>


        </div>
      );
    }



}
export default Admin;
