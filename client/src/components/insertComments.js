import React, { Component } from "react";
import { MDBCol, MDBRow, MDBInput } from "mdbreact";
import { TextField, Card } from "@material-ui/core";
import "../css/insertComment.css";

class insertComment extends Component {
  render() {
    return (
      <div>
        <form
          action={`http://127.0.0.1:8082/post/${
            this.props.postID
          }/insertComment`}
          method="POST"
        >
          <MDBRow end>
            <MDBCol md="8">
              <Card className="insertComment">
                <MDBRow end>
                  <MDBInput
                    hint="وب سایت"
                    type="text"
                    icon="globe"
                    name="website"
                    className="insertComment-inputs"
                  />
                  <MDBInput
                    hint="ایمیل"
                    type="email"
                    name="email"
                    icon="at"
                    className="insertComment-inputs"
                  />
                  <MDBInput
                    hint="نام"
                    type="text"
                    name="name"
                    icon="user"
                    className="insertComment-inputs"
                  />
                </MDBRow>

                <MDBRow end>
                  <MDBCol md="12">
                    <MDBInput
                      hint="نظر شما ..."
                      type="text"
                      icon="comment"
                      name="comment"
                    />
                  </MDBCol>
                </MDBRow>
                <MDBRow end>
                  <input
                    type="submit"
                    value="ارسال نظر"
                    className="btn btn-secondary insertcommnet-btnSubmit"
                  />
                </MDBRow>
              </Card>
            </MDBCol>
          </MDBRow>
        </form>
      </div>
    );
  }
}
export default insertComment;
