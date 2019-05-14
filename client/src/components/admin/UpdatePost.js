import React ,{Component} from 'react';
import axios from 'axios';
// import Navbar from "../Navbar";
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
import HambergerMenu from '../HambergerMenu';
import ButtomNavbar from '../BottomNavbar';
import Navbar from '../Navbar';
import { Card } from "@material-ui/core";
import Create from "@material-ui/icons/Create";
import SidePanel from './SidePanel';

class UpdatePost extends Component{
    
    state={
       post:[],
       body:'',
       title:''
         
    }

    componentDidMount(){
       
        console.log('postID=',this.props.match.params.post_id)
          
        var url=`http://127.0.0.1:8082/admin/update/${this.props.match.params.post_id}`
       
        fetch( url)
        .then((res)=>res.json())         
            .then((data)=>{
               this.setState({
                   post:data,
                   body:data.body,
                   title:data.title
               });
               console.log(data)
            }).catch((err)=>{console.log('error during fetch='+err)});
    };
     
    render() {
      var bodyPost=this.state.body;

      
      return (
        <div>
          <Navbar />
  
          <ButtomNavbar />
          <SidePanel className="sidePanel"/>
          <div className="sendPost">
            <MDBRow center>
              <MDBCol md="11">
                <Card className="sendpost-card purple">
                  <div className="sendpost-title">
                    
                    ویرایش پست <Create />
                  </div>
  
                  <hr />
                  <form
                    method="POST"
                    action="http://127.0.0.1:8082/admin/update"
                    enctype="multipart/form-data"
                  >
                    <MDBRow end>
                      <MDBCol md="6">
                        <input type="text" name="title" className="admin-input" defaultValue={this.state.title}/>
                      </MDBCol>
                      <MDBCol md="1">
                        <span>عنوان </span>
                      </MDBCol>
                    </MDBRow>
  
                    <MDBRow end>
                      <MDBCol md="1">
                    <span>متن  </span>
                      </MDBCol>
                       
                      <MDBCol md="12">
                        {/* <MDBInput
                          type="textarea"
                          label="متن پست"
                          rows="15"
                          icon="pencil-alt"
                          name="body"
                          className="sendpost-body"
                        /> */}
                         
                        <textarea name="body" className="admin-input" id="" cols="30" rows="10" ></textarea>
                      </MDBCol>
                    </MDBRow>
  
                    <MDBRow end>
                    
                      <MDBCol md="3">
                        <select
                          name="category"
                          className="browser-default custom-select admin-component-select"
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
                      <MDBCol md="1"></MDBCol>
                    </MDBRow>
  
                    <MDBRow end>
                      <MDBCol md="3">
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
                      <MDBCol md="1"> </MDBCol>
                    </MDBRow>
                    <MDBRow center>
                      <MDBCol md="4">
                        <input
                          type="submit"
                          className="btn purple text-white"
                          value="ویرایش پست"
                        />
                      </MDBCol>
                     
                    </MDBRow>
                  </form>
                </Card>
              </MDBCol>
            </MDBRow>
          </div>
        </div>
      );
    }

 
}
export default UpdatePost;