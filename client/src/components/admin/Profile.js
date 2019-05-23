import React ,{Component}from 'react'
import axios from 'axios';

class Profile extends Component{

    state={
        token:null
    }
    componentDidMount(){
        this.setState({
            token:this.props.token
        })
        console.log('this is a profile ');
        header=()=>{
            return{
                'Content-Type': 'application/json',
                'X-Auth-Token': token

            }
        }

        axios.get('http://127.0.0.1:8082/profile',this.header())
    }
    render(){

        return(
            <div>

            </div>
        )
    }
}