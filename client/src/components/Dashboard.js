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
     
    componentWillMount(){
        
       this.props.history.push('/admin/sendpost');

    }
    componentDidMount(){
        
        
       fetch(Keys.URLS.BACKEND+'/user/'+localStorage.getItem('userID'))
       .then((res)=>res.json())
       .then((data)=>{
          this.setState({
            //   username:data.data.local.username,
            //   email:data.data.local.email,
            //   token:data.localStorage.getItem('token')
          })
       })
       
        
    }
    loadData(){
        if(!localStorage.getItem('token')){
             
            window.history.pushState('','','/signin');
            window.location.reload();
    
    
            }
            else{
                
            }
       }
    render(){
        return(
            <div>
              
                
            </div>
        )
    }
}
export default Dashboard;