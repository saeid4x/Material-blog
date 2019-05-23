import React,{Component} from 'react';
import Keys from './config/Keys';
import axios from 'axios';

class Dashboard extends Component{
    state={
        userID:null,
        token:null,
        username:'',
        email:''

    }
     
    componentDidMount(){
        
        
        if(!localStorage.getItem('token')){
             
        window.history.pushState('','','/signin');
        window.location.reload();


        }
       fetch(Keys.URLS.BACKEND+'/user/'+localStorage.getItem('userID'))
       .then((res)=>res.json())
       .then((data)=>{
          this.setState({
              username:data.local.username,
              email:data.local.email,
              token:localStorage.getItem('token')
          })
       })
       
        
    }

    render(){
        return(
            <div>
                <h1>This is Dashboard</h1>
               <h3> Hi ,{this.state.username}</h3>
            </div>
        )
    }
}
export default Dashboard;