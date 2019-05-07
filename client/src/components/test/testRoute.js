import React ,{Component} from 'react';
import {BrowserRouter,Route} from 'react-router-dom';
import Test2 from './test2';

class TestRoute extends Component{

    render(){
        return(
            <div>
              <h2>this is test file</h2>
            <BrowserRouter>
                <div>
               
                 <Route   path='/test/test2' Component={Test2}/>             

                </div>
            
            
            </BrowserRouter>
            </div>
        );
    }
}
export default TestRoute;