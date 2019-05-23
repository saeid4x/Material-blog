import React,{Component} from 'react'

class SignIn extends Component{
    
    
    componentDidMount(){
            if(localStorage.getItem('token')){
                this.props.history.push('admin');
            }
    }

    render(){
        return(
            <div>
                <h1>login page</h1>
            </div>
        )
    }
}
export default SignIn;