import React, {Component} from "react";
import axios from "axios";
import Toast from "../Components/Toast";
import $ from "jquery";

class LoginAdmin extends Component {
  constructor() {
    super();
    this.state = {
      username: "",
      password: "",
      mesage: ""
    }
  }

 render() {
       return (
         <div className="container" style={{width: "35%"}}>
       <div className="card my-2">

         <div className="card-header bg-info">
         <p class="text-center"><h4><p class="text-light">JATEAM ADMIN</p></h4></p>
         </div>
         <div className="card-body bg-dark">
           <Toast id="message" autohide="false" title="Informasi">
             {this.state.message}
           </Toast>
           <form>


               <div className="form-group">
                   <label class="text-light">Username</label>
                   <input type="text" className="form-control bg-light" placeholder="Enter username" />
               </div>

               <div className="form-group">
                   <label class="text-light">Password</label>
                   <input type="password" className="form-control bg-light" placeholder= "Enter password " />
               </div>



               <button className="mt-2 btn btn-block btn-secondary" type="submit">
                <span className="fa fa-sign-in"></span> Login
             </button>
             <div class="text-center forget" >
           </div>


           </form>
           </div>
       </div>
     </div>

       );
   }

}
export default LoginAdmin;
