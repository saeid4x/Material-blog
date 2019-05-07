import React,{Component} from 'react';
import AdminLayout from './AdminLayout';

class Dashboard extends Component{
    render(){
        return(
            <div>
            <AdminLayout/>

            
            <div>
               <h1>this is dashboard</h1> 
            </div>
            </div>
        );
    }
}
export default Dashboard;