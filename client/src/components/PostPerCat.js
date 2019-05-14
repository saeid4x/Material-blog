import React, { Component } from "react";
import { MDBCard, MDBRow, MDBCol } from "mdbreact";
import {
  CardActionArea,
  CardMedia,
  CardContent,
  Button,
  Card,
  CardActions,
  BottomNavigation,
  Typography,
  BottomNavigationAction
} from "@material-ui/core";
import SaveIcon from "@material-ui/icons/Save";
import CategoryIcon from "@material-ui/icons/Category";
import DateIcon from "@material-ui/icons/DateRange";
import ViewPostIcon from "@material-ui/icons/RemoveRedEye";
import AuthorIcon from "@material-ui/icons/PermIdentity";
import { Link } from "react-router-dom";
import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import '../css/PostPerCat.css';
import Navbar from './Navbar';
import ButtomNavbar from './BottomNavbar';





const styles = {
    card: {
      maxWidth: 345,
      
    },
    media: {
      height: 80
    },
  };
  

class PostPerCat extends Component {
  state = {
    posts: [],
    url:'http://127.0.0.1:8082'
  };

  loadPost() {
     
   // var arrImage=['programming.jpg','animation.png','database.png','gf.jpg','mobile-programming.jpg','web-programming.jpg'];

    return this.state.posts.map(item => (
 
          
          <MDBCol md="3">
          <Card className="postpercat-card purple">
          <CardActionArea>
            <CardMedia
              component="img"
              alt="post title"
              height="250"
              
               image={`${this.state.url}/uploads/images/${item.postImage}`}
              title="post title"
            />
            <CardContent>
               <p className="postpercat-title">{item.title}</p>
               
              
             
            </CardContent>
         
          </CardActionArea>
         <CardContent>
        <p className="postpercat-body">{(item.body).slice(0,150)}.....</p>
         </CardContent>
          <BottomNavigation className="purple" value="my value" showLabels>
            <BottomNavigationAction label={item.author} icon={<AuthorIcon />} />
            <BottomNavigationAction className="tt" label={ ` ${item.numBazdid}`}  icon={<ViewPostIcon />} />
            <BottomNavigationAction  label={item.datePosted} icon={<DateIcon />} />
            <BottomNavigationAction label={item.category} icon={<CategoryIcon />} />
          </BottomNavigation>
          <CardActions>
            <Button size="small" color="primary">
              <Link to={`/post/${item._id}`}>جزئیات</Link>
            </Button>
          </CardActions>
        </Card>
         

          </MDBCol>
          
        
     
    ));
  }

  componentDidMount() {
    var cat = this.props.match.params.cat;
    var url = ` http://127.0.0.1:8082/cat/${cat} `;
    fetch(url)
      .then(res => res.json())
      .then(data => {
        this.setState({
          posts: data
        });
        console.log("data=", data);
      })
      .catch(err => {
        console.log("Error=", err);
      });
  }

  render() {
    return (
      <div>
          <Navbar/>
          <ButtomNavbar/> 
<div className="postpercat">


        <MDBRow>
{this.loadPost()}
        </MDBRow>

        </div>
      </div>
    );
  }
}
PostPerCat.propTypes = {
    classes: PropTypes.object.isRequired,
  };
export default withStyles(styles) (PostPerCat);
