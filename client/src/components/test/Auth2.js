import React ,{Component} from 'react';
// import Keys from '../'
import Keys from '../config/Keys';


class Auth2 extends Componenet{

    render(){
        return(
            <div>
                <h1>working Auth</h1>
                <a href={`${Keys.urls.backendUrl}/auth/google2`}>sign in with Google+</a>
            </div>
        );
    }

}
export default Auth2;