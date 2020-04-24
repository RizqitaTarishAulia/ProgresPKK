import React, {Component} from "react";
import axios from "axios";
import Toast from "../Components/Toast";
import $ from "jquery";

class RegisterPembeli extends Component {
  constructor() {
    super();
    this.state = {
      nama: "",
      username: "",
      password: "",
      message: ""
    }
  }



 render() {
       return (
         <div className="container" style={{width: "35%"}}>
       <div className="card my-2">

         <div className="card-header bg-info">
         <p class="text-center"><h4><p class="text-light">JATEAM</p></h4></p>
         <p class="text-center"><h5><p class="text-light">REGISTER</p></h5></p>
         </div>
         <div className="card-body bg-dark">
           <Toast id="message" autohide="false" title="Informasi">
             {this.state.message}
           </Toast>
           <form>
              <div className="form-group">
                  <label class="text-light">Nama</label>
                  <input type="text" className="form-control bg-light" placeholder="Enter name" />
              </div>

               <div className="form-group">
                   <label class="text-light">Username</label>
                   <input type="text" className="form-control bg-light" placeholder="Enter username" />
               </div>

               <div className="form-group">
                   <label class="text-light">Password</label>
                   <input type="password" className="form-control bg-light" placeholder= "Enter password " />
               </div>



               <button className="mt-2 btn btn-block btn-secondary" type="submit">
                <span className="fa fa-sign-in"></span> CREATE
             </button>
             <p class="text-light" align="center">Sudah punya akun? <a href="" class="text-primary border-primary border-bottom">Login disini</a></p>
             <div class="text-center forget" >
           </div>


           </form>
           </div>
       </div>
     </div>

       );
   }

}
export default RegisterPembeli;
