import React,{Component} from 'react'
import axios from 'axios';
import Keys from '../config/Keys'


class CheckToken extends Component{
    constructor(props){
        super(props);
    }

        componentDidMount(){

            if(this.props.match.params.accessToken){
                  //google auth
                  var token=this.props.match.params.accessToken;
                   var userID=this.props.match.params.id;
                  localStorage.setItem('userID',userID);
                  localStorage.setItem('token',token);
                  this.props.history.push('/admin/sendpost');

            }
            else{
                //local auth
                fetch(Keys.URLS.BACKEND+"/auth/signup")
                .then((data)=>{
                    console.log('data',data);
                })

            }

            
         
        }
    render(){
        return(
            <div>

            </div>
        )
    }
}
export default CheckToken;