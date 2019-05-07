import React, { Component } from "react";
import InsertComment from "./insertComments";
import ShowComment from "./Showcomments";
import {
  Paper,
  Typography,
  Divider,
  CardActionArea,
  CardMedia,
  CardContent,
  Button,
  Card,
  CardActions,
  BottomNavigation,
  BottomNavigationAction
} from "@material-ui/core";
import { MDBRow, MDBCol } from "mdbreact";
import "../css/DetailsPost.css";
import Navbar from "./Navbar";
import CategoryIcon from "@material-ui/icons/Category";
import DateIcon from "@material-ui/icons/DateRange";
import ViewPostIcon from "@material-ui/icons/RemoveRedEye";
import AuthorIcon from "@material-ui/icons/PermIdentity";
import CommentIcon from "@material-ui/icons/ModeComment";
// import ButtomNavbar from "./BottomNavbar";
import ButtomNavbar from './BottomNavbar';

class DetailsPost extends Component {
  state = {
    title: "",
    body: "",
    imageName: "",
    numBazdid: 0,
    postDate: "",
    author: "",
    url2: "http://127.0.0.1:8082",
    category: ""
  };

  componentDidMount() {
    var postID = this.props.match.params.postID;

    var url = `http://127.0.0.1:8082/post/${postID}`;
    fetch(url)
      .then(res => res.json())
      .then(data => {
        // console.log("data category=", data.category);
        // console.log("post#=", postID);
        this.setState({
          title: data.title,
          body: data.body,
          imageName: data.postImage,
          author: data.author,
          numBazdid: data.numBazdid,
          postDate: data.datePosted,
          category: data.category
        });
      })
      .catch(err => {
        console.log("Error=", err);
      });
  }

  render() {
    var arrImage = [
      "programming.jpg",
      "animation.png",
      "database.png",
      "gf.jpg",
      "mobile-programming.jpg",
      "web-programming.jpg"
    ];

    return (
      <div>
        <Navbar />
        <ButtomNavbar/>

        <MDBRow end className="details-post">
          <MDBCol md="8">
            <Card>
              <MDBRow end>
                <Typography
                  gutterBottom
                  variant="h5"
                  component="h3"
                  className="detailsPost-title"
                >
                 <p> {this.state.title}</p>
                </Typography>
              </MDBRow>

              <MDBRow>
                {/*        */}
                <img src={`${this.state.url2}/uploads/images/${this.state.imageName}`} alt={`${this.state.title}`} className="detailsPost-image"/>
              </MDBRow>

              <MDBRow>
                <Typography
                  gutterBottom
                  component="p"
                  className="detailsPost-body"
                >
                  <p> {this.state.body}</p>
                </Typography>
              </MDBRow>

              <Divider />
              <MDBRow center>
                <BottomNavigation value="my value" showLabels>
                  <BottomNavigationAction
                    label="50 نظر"
                    icon={<CommentIcon />}
                  />
                  <BottomNavigationAction
                    className="tt"
                    label="بازدید"
                    icon={<ViewPostIcon />}
                  />
                  <BottomNavigationAction
                    label={`${this.state.postDate}`}
                    icon={<DateIcon />}
                  />
                  <BottomNavigationAction
                    label={`${this.state.author}`}
                    icon={<AuthorIcon />}
                  />
                </BottomNavigation>
              </MDBRow>
            </Card>
          </MDBCol>
        </MDBRow>

        <InsertComment postID={this.props.match.params.postID} />
        <hr />

        <ShowComment postID={this.props.match.params.postID} />
      </div>
    );
  }
}
export default DetailsPost;
