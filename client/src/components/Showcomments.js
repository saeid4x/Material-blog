import React, { Component } from "react";
import { MDBCol, MDBRow } from "mdbreact";
import { CardContent, Card ,Avatar, Typography,Paper,Divider} from "@material-ui/core";
import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import '../css/ShowComment.css';


 

  
class ShowComments extends Component {
  state = {
    postID: this.props.postID,
    comments: [],
    count: 0
  };

  componentDidMount() {
    var url = `http://127.0.0.1:8082/post/${this.state.postID}/comments`;
    fetch(url)
      .then(res => res.json())
      .then(data => {
        this.setState({
          comments: data
        });
      });

    //fetch count comments
    var urlCount = `http://127.0.0.1:8082/post/${
      this.state.postID
    }/comments/count`;

    fetch(urlCount)
      .then(res => res.json())
      .then(data => {
        this.setState({
          count: data
        });
      })
      .catch(err => {
        console.log("err count=", err);
      });
  }
  loadData() {
    return this.state.comments.map(item => (
      <div key={item._id}>
        <div className="showcomment-wrapper">
        <Paper> 
          <MDBRow end>
            <MDBCol md="12">
              <div>
                <MDBRow end> 

                <div className="showcomment-author"><span> {item.name} </span>-<span>  {item.date} </span></div> 
                
                     
                <img src="/images/static/image.jpg" alt="" className="showcomment-avatar"/>                
                      

                </MDBRow>
              </div>
            </MDBCol>
            <MDBCol md="12">
            <Divider variant="middle"      />
              <p className="showcomment-comment"> {item.comment}</p>
            </MDBCol>
          </MDBRow>


        </Paper>
        </div>
      </div>
    ));
  }

  render() {
    return (
      <div>
        <MDBRow end>
          <MDBCol md="8">
        <Card className="commentcount-wrapper">
          <CardContent> 
          <div className="commentcount-text">نظرات </div>  - <pre className="commentcount-count">{this.state.count} نظر  </pre>
             </CardContent>
       
          </Card>
      </MDBCol>

          </MDBRow>
      
        {this.loadData()}
      </div>
    );
  }
}
 
export default   ShowComments;
