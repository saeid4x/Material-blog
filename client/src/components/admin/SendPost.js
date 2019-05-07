import React, { Component } from "react";
import ReactDom from "react-dom";
import AdminLayout from "./AdminLayout";
import Navbar from "../Navbar";
import {
  MDBRow,
  MDBCol,
  MDBIcon,
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBInput,MDBBtn
} from "mdbreact";
import "../../css/SendPost.css";
import "../../css/style.css";
import ButtomNavbar from '../BottomNavbar';
import {Card}  from "@material-ui/core";
import Create from "@material-ui/icons/Create";

class SendPost extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <ButtomNavbar/>
        <div className="sendPost">
<MDBRow center>
    <MDBCol md="11">
    <Card className="sendpost-card">
             
            
                
                  <div className="sendpost-title"> ارسال پست  <Create/></div>
                 
              
                <hr/>
                  <form
                    method="POST"
                    action="http://127.0.0.1:8082/admin/sendpost"
                    enctype="multipart/form-data"
                  >
                    <MDBRow end>
                       
                      <MDBCol md="6">
                        <input
                          type="text"
                          name="title"
                          
                        />
                      </MDBCol>
                      <MDBCol md="1">
                        <span>عنوان </span>
                      </MDBCol>
                      
                    </MDBRow>

                    <MDBRow>
                      <MDBCol md="12">
                        <MDBInput
                          type="textarea"
                          label="متن پست"
                          rows="15"
                          icon="pencil-alt"
                          name="body"
                          className="sendpost-body"
                        />
                      </MDBCol>
                    </MDBRow>
 

                    <MDBRow end>
                      <MDBCol md="6">
                        <select
                          name="category"
                          className="browser-default custom-select"
                        >
                          <option value="" disabled selected>
                            انتخاب دسته بندی پست
                          </option>
                          <option value="programming">برنامه نویسی</option>
                          <option value="mobile-programming">
                            {" "}
                            برنامه نویسی موبایل{" "}
                          </option>
                          <option value="database"> پایگاه داده </option>
                          <option value="web-develop"> طراحی سایت </option>
                          <option value="graphic">گرافیک </option>
                          <option value="animation">انیمیشن </option>
                        </select>
                      </MDBCol>
                    </MDBRow>

                    <MDBRow end>
                      <MDBCol md="5">
                        <div className="custom-file">
                          <input
                            type="file"
                            name="img_post"
                            className="custom-file-input"
                            id="inputGroupFile01"
                            aria-describedby="inputGroupFileAddon01"
                          />
                          <label
                            className="custom-file-label"
                            htmlFor="inputGroupFile01"
                          >
                           انتخاب تصویر پست
                          </label>
                        </div>
                      </MDBCol>
                    </MDBRow>
                    <MDBRow center>
                        <MDBCol md="4">
                         <input type="submit" className="btn purple text-white" value="ارسال پست"/>
                        </MDBCol>
                    </MDBRow>

                    
                  </form>
               
          </Card>
    </MDBCol>
</MDBRow>

    </div></div> 
    );
  }
}
export default SendPost;
