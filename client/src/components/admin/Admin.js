import React ,{Component} from 'react';
import {BrowserRouter as Router,Route} from 'react-router-dom';
import { realpathSync } from 'fs';
import Dashboard from './Dashboard';
import SendPost from './SendPost';
import ManagePost from './ManagePost';
import UpdatePost from './UpdatePost';
import AdminLayout from './AdminLayout';

class Admin extends Component{

    render(){
        return(
         
            <Router>
                <div>
                    <h2>this is route</h2>
                <Route  path='/admin/dashboard' Component={Dashboard}/>
                <Route path="/admin/sendpost" Component={SendPost}/>
                <Route path="/admin/managepost" Component={ManagePost}/>
                <Route path="/admin/updatepost" Component={UpdatePost}/>

                </div>
            
            
            </Router>
        );
    }
}
export default Admin;