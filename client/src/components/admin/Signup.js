import React, { Component } from "react";
import { Card } from "@material-ui/core";
import { Button } from "@material-ui/core/Button";
import { MDBRow, MDBCol } from "mdbreact";
import "../../css/signup.css";
import Navbar from "../Navbar";
import Keys from "../../config/Keys";
class Signup extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <div className="signup-wrapper ">
          <form action={`${Keys.urls.backendUrl}/admin/signup`} method="POST">
            <Card className="purple">
              <div className="sendpost-title">ثبت نام در سایت</div>
              <hr />
              <MDBRow>
                <MDBCol md="12">
                  <span>نام کاربری</span>
                  <br />
                </MDBCol>
                <MDBCol md="5" className="offset-md-5">
                  <input type="text" name="username" />
                </MDBCol>
                <MDBCol md="12">
                  <span> ایمیل</span>
                </MDBCol>
                <MDBCol md="5" className="offset-md-5">
                  <input type="text" name="email" />
                </MDBCol>
                <MDBCol md="12">
                  <span> کلمه عبور</span>
                </MDBCol>
                <MDBCol md="5" className="offset-md-5">
                  <input type="password" name="password" />
                </MDBCol>
                {/* <MDBCol md="12">
                        <span> تکرار کلمه عبور</span>
                    </MDBCol>
                    <MDBCol  md="5" className="offset-md-5">
                       <input type="password" name="password" />
                    </MDBCol> */}
              </MDBRow>
              {/* <Button   variant="outlined" color="secondary" >ثبت نام</Button> */}
              <MDBCol md="12">
                <a href={`${Keys.urls.backendUrl}/auth/google`}>
                  <img
                    src="/images/static/signup-google.PNG"
                    className="signup-google-image"
                    alt=""
                  />
                </a>
                <input type="submit" value="ثبت نام" />
              </MDBCol>
            </Card>
          </form>
        </div>
      </div>
    );
  }
}
export default Signup;
