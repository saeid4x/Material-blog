import React, { Component } from "react";
 
import { MDBCol, MDBRow } from "mdbreact";
import VerifiedUser from "@material-ui/icons/VerifiedUser";
import {
    CardActionArea,
    CardMedia,
    CardContent,
    Button,
    Divider,
    Card,
    CardActions,
    BottomNavigation,
    Typography,
    BottomNavigationAction,
    Paper
  } from "@material-ui/core";
import '../css/HomePage.css';
import DateIcon from "@material-ui/icons/DateRange";
import ViewPostIcon from "@material-ui/icons/RemoveRedEye";
import AuthorIcon from "@material-ui/icons/PermIdentity";
import Done from "@material-ui/icons/Done";
import { Link } from "react-router-dom";
import CategoryIcon from "@material-ui/icons/Category";
import Navbar from './Navbar';
import BottomNavbar from './BottomNavbar';


class HomePage extends Component {
  state = {
    posts: [],
    postsProgramming:[],
    postsMobProgramming:[],
    postsAnimation:[],
    postsGfx:[],
    postsDatabase:[],
    postsWebDevelop:[],
    url3:'http://127.0.0.1:8082'
  };

//   loadData() {
//     return this.state.posts.map(item => (
//       <div key={item._id}>
//         <h2>{item.title}</h2>
//         <p>
//           author: {item.author} | category={item.category}| image name={" "}
//           {item.postImage}
//         </p>
//       </div>
//     ));
//   }

 loadProgramming(){
     return this.state.postsProgramming.map(item=>(
         
        <MDBCol md="3">
          <Card className="postpercat-card">
          <CardActionArea>
            <CardMedia
              component="img"
              alt="post title"
              height="250"
              
               image={`${this.state.url3}/uploads/images/${item.postImage}`}
              title="post title"
            />
            <CardContent>
               <p className="postpercat-title">{item.title}</p>
               
              
             
            </CardContent>
         
          </CardActionArea>
         <CardContent>
        <p className="postpercat-body">{(item.body).slice(0,150)}.....</p>
         </CardContent>
          <BottomNavigation value="my value" showLabels>
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

 //load mobile programming
 loadMobileProgramming(){
    return this.state.postsMobProgramming.map(item=>(
        
       <MDBCol md="3">
         <Card className="postpercat-card">
         <CardActionArea>
           <CardMedia
             component="img"
             alt="post title"
             height="250"
             
              image={`${this.state.url3}/uploads/images/${item.postImage}`}
             title="post title"
           />
           <CardContent>
              <p className="postpercat-title">{item.title}</p>
              
             
            
           </CardContent>
        
         </CardActionArea>
        <CardContent>
       <p className="postpercat-body">{(item.body).slice(0,150)}.....</p>
        </CardContent>
         <BottomNavigation value="my value" showLabels>
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


//load database
loadDatabase(){
    return this.state.postsDatabase.map(item=>(
        
       <MDBCol md="3">
         <Card className="postpercat-card">
         <CardActionArea>
           <CardMedia
             component="img"
             alt="post title"
             height="250"
             
              image={`${this.state.url3}/uploads/images/${item.postImage}`}
             title="post title"
           />
           <CardContent>
              <p className="postpercat-title">{item.title}</p>
              
             
            
           </CardContent>
        
         </CardActionArea>
        <CardContent>
       <p className="postpercat-body">{(item.body).slice(0,150)}.....</p>
        </CardContent>
         <BottomNavigation value="my value" showLabels>
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


//load animation
loadAnimation(){
    return this.state.postsAnimation.map(item=>(
        
       <MDBCol md="3">
         <Card className="postpercat-card">
         <CardActionArea>
           <CardMedia
             component="img"
             alt="post title"
             height="250"
             
              image={`${this.state.url3}/uploads/images/${item.postImage}`}
             title="post title"
           />
           <CardContent>
              <p className="postpercat-title">{item.title}</p>
              
             
            
           </CardContent>
        
         </CardActionArea>
        <CardContent>
       <p className="postpercat-body">{(item.body).slice(0,150)}.....</p>
        </CardContent>
         <BottomNavigation value="my value" showLabels>
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


//load Graphic
loadGraphic(){
    return this.state.postsGfx.map(item=>(
        
       <MDBCol md="3">
         <Card className="postpercat-card">
         <CardActionArea>
           <CardMedia
             component="img"
             alt="post title"
             height="250"
             
              image={`${this.state.url3}/uploads/images/${item.postImage}`}
             title="post title"
           />
           <CardContent>
              <p className="postpercat-title">{item.title}</p>
              
             
            
           </CardContent>
        
         </CardActionArea>
        <CardContent>
       <p className="postpercat-body">{(item.body).slice(0,150)}.....</p>
        </CardContent>
         <BottomNavigation value="my value" showLabels>
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


//load web developer 
loadWebDeveloper(){
    return this.state.postsWebDevelop.map(item=>(
        
       <MDBCol md="3">
         <Card className="postpercat-card">
         <CardActionArea>
           <CardMedia
             component="img"
             alt="post title"
             height="250"
             
              image={`${this.state.url3}/uploads/images/${item.postImage}`}
             title="post title"
           />
           <CardContent>
              <p className="postpercat-title">{item.title}</p>
              
             
            
           </CardContent>
        
         </CardActionArea>
        <CardContent>
       <p className="postpercat-body">{(item.body).slice(0,150)}.....</p>
        </CardContent>
         <BottomNavigation value="my value" showLabels>
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

  FetchCategories(cat){
      var urlProgramming="http://127.0.0.1:8082/homepage/"+cat;
      fetch(urlProgramming)
      .then(res => res.json())

      .then(data => {
          console.log('homepage data=',data)
      
          switch(cat){
              case 'programming':
              this.setState({
                postsProgramming: data
            });
            break;
            case 'mobile-programming':
            this.setState({
                postsMobProgramming: data
          });
          break;
          case 'database':
          this.setState({
            postsDatabase: data
        });
        break;
        case 'web-develop':
        this.setState({
            postsWebDevelop: data
        });
        break;
        case 'animation':
        this.setState({
            postsAnimation: data
        });
        break;
        case 'graphic':
        this.setState({
            postsGfx: data
          });
          break;

          }//end switch


      
      })
      .catch(err => {
        console.log("error=" + err);
      });
  }


  componentDidMount() {

    this.FetchCategories('programming');
    this.FetchCategories('mobile-programming');
    this.FetchCategories('database');
    this.FetchCategories('web-develop');
    this.FetchCategories('animation');
    this.FetchCategories('graphic');

    // var url = "http://127.0.0.1:8082/homepage";
    // fetch(url)
    //   .then(res => res.json())

    //   .then(data => {
    //       console.log('homepage data=',data)
      
    //     this.setState({
    //       posts: data
    //     });
    //   })
    //   .catch(err => {
    //     console.log("error=" + err);
    //   });
   
  }


  render() {
    

    return (
      <div>
        
        <Navbar/>
        <BottomNavbar/>

        {/* ******programming *********/}
        <MDBRow>
            <MDBCol>
                <Card className="homepage-category-card blue">
                    <div className="homepage-category-title">تازه ترین مطالب برنامه نویسی <Done/></div>
                </Card>

            </MDBCol>
        </MDBRow>
        <MDBRow>

            {this.loadProgramming()}
        </MDBRow> 
        {/* ******************************** */}

         {/* ******mobile programming *********/}
         
         <MDBRow>
            <MDBCol>
                <Card className="blue">
                    <div className="homepage-category-title">تازه ترین مطالب برنامه نویسی موبایل<Done/></div>
                </Card>

            </MDBCol>
        </MDBRow>
        

        <MDBRow>

            {this.loadMobileProgramming()}
        </MDBRow> 
        {/* ******************************** */}

   {/* ******  database *********/}
         
   <MDBRow>
            <MDBCol>
                <Card className="blue">
                    <div className="homepage-category-title"> تازه ترین مطالب پایگاه داده <Done/></div>
                </Card>

            </MDBCol>
        </MDBRow>
        

        <MDBRow>

            {this.loadDatabase()}
        </MDBRow> 

        {/* ********graphic****************** */}

        <MDBRow>
            <MDBCol>
                <Card className="blue">
                    <div className="homepage-category-title"> تازه ترین مطالب گرافیک <Done/></div>
                </Card>

            </MDBCol>
        </MDBRow>
        

        <MDBRow>

            {this.loadGraphic()}
        </MDBRow> 
        {/* ******************************** */}


   {/* ********animation****************** */}

   <MDBRow>
            <MDBCol>
                <Card className="blue">
                    <div className="homepage-category-title"> تازه ترین مطالب انیمیشن <Done/></div>
                </Card>

            </MDBCol>
        </MDBRow>
        

        <MDBRow>

            {this.loadAnimation()}
        </MDBRow> 
        {/* ******************************** */}



      </div>
    );
  }
}
export default HomePage;
