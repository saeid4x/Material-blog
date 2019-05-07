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

class UpdatePost extends Component{
    
    state={
       post:[]
         
    }

    componentDidMount(){
       
        console.log('postID=',this.props.match.params.post_id)
          
        var url=`http://127.0.0.1:8082/admin/update/${this.props.match.params.post_id}`
       
        fetch( url)
        .then((res)=>res.json())         
            .then((data)=>{
               this.setState({
                   post:data,
                   body:data.body
               });
               console.log(data)
            }).catch((err)=>{console.log('error during fetch='+err)});
    };
     


    render(){
         
          
    

    

        return(
            <div>
              <Navbar/>
              <ButtomNavbar/>
              
               
            <div className="sendPost">
<MDBRow center>
    <MDBCol md="11">
    <MDBCard className="sendpost-card">
            <MDBCardBody>
              <MDBCardTitle>
                <div className="row ">
                  <div className="sendpost-title"> ویرایش پست</div>
                
                  <MDBIcon far icon="arrow-alt-circle-up" />
                </div>
                <MDBCardText>
                <hr/>
                
                  <form
                    method="POST"
                    action={`http://127.0.0.1:8082/admin/update/${this.props.match.params.post_id}`}
                    enctype="multipart/form-data"
                  >
                    <MDBRow end>
                      <MDBCol md="10">
                        <input
                          type="text"
                          name="title"
                          placeholder="عنوان پست را وارد کنید ..."
                          defaultValue={this.state.post.title}
                          />
                       
                      </MDBCol>
                      <MDBCol md="2">
                        <span>عنوان </span>
                      </MDBCol>
                    </MDBRow>

                    <MDBRow>
                      <MDBCol md="7">
                          <MDBInput
                          type="textarea"
                          label="متن پست"
                          rows="15"
                          icon="pencil-alt"
                          name="body"
                          defaultValue={this.state.post.title}
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
                         <input type="submit" className="btn purple text-white" value=" ویرایش پست"/>
                        </MDBCol>
                    </MDBRow>

                    
                  </form>
                
                </MDBCardText>
              </MDBCardTitle>
            </MDBCardBody>
          </MDBCard>
    </MDBCol>
</MDBRow>

    </div>
               
                
               
            </div>
        )
    }
}
export default UpdatePost;