import React ,{Component}from 'react';
import {BrowserRouter as Router,Route}from 'react-router-dom';

import Dashboard from './admin/Dashboard';
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
       
       

      </Router> 
     
    )
  }
}
export default App2;

