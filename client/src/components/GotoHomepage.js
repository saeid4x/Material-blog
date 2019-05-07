import React,{Component} from 'react';


class GotoHomepage extends Component{
    componentDidMount(){

        this.props.history.push("/homepage");
    }

    render(){
        return(
            <div></div>
        )
    }
}

export default GotoHomepage;