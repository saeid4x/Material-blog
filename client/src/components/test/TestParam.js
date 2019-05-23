import React , {Component} from 'react'


class TestParam extends Component{
 
   
    render(){
        var test=this.props.match.params.id;
        return(
            <div>
                <h1>{test}</h1>

            </div>
        )
    }
}
export default TestParam