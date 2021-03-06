import React ,{Component}from 'react';
import {BrowserRouter as Router,Route}from 'react-router-dom';

// import Dashboard from './admin/Dashboard';
import SendPost from './admin/SendPost';
import ManagePost from './admin/ManagePost';
import UpdatePost from './admin/UpdatePost';
import PostPerCat from './PostPerCat';
import DetailsPost from './DetailsPost';
import '../css/materialize.min.css';
 import HomePage from './HomePage';
 import MostVisited from './MostVisited';
 import GotoHomepage from './GotoHomepage';
 import Playground from './test/Mdb';
 import Navbar from './Navbar';
 import '../css/style.css';
  import queryString from 'query-string';
  import Dashboard from './Dashboard';
  import RedirectGoogle from './admin/RedirectGoogle';
  import TestParam from './test/TestParam';
  import CheckToken from './admin/CheckToken';
  import SignIn from './admin/SignIn';
  import SignUp from './admin/Signup';
 

class App2 extends Component{
   


  render(){
    return(  

    
      
      <Router>
     
        <Route exact path="/admin" component={Dashboard}/>
        <Route   path="/admin/sendpost" component={SendPost}/>
        <Route   path="/admin/managepost" component={ManagePost}/>
        <Route   path="/admin/updatepost/:post_id" component={UpdatePost}/>
        <Route exact path="/cat/:cat" component={PostPerCat}/>
        <Route path="/post/:postID" component={DetailsPost} />
        <Route  path="/homepage" component={HomePage}/>
        <Route exact path="/" component={GotoHomepage}/>        
        <Route  path="/mostvisited" component={MostVisited}/>
        <Route  path="/mdb" component={Playground}/>
        <Route  path="/user/:userID/dashboard" component={Dashboard}/>
        <Route  path="/auth/google/redirect" component={RedirectGoogle}/>
        <Route path="/test/:id" component={TestParam} />
        <Route path="/admin/:id/:accessToken" component={CheckToken}/>
        <Route path="/signin" component={SignIn}/>
        <Route path="/signup" component={SignUp}/>


        {/* <Route path="/dashboard" component={TestParam} /> */}


       
       

      </Router> 
     
    )
  }
}
export default App2;

