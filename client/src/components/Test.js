import React,{Component} from 'react';

class Test extends Component{
    constructor(props){
        super(props);
        this.state={
            posts:[],
            originalDomain:'http://127.0.0.1:8082/',
        }
    };



    componentDidMount(){
        fetch(`${this.state.originalDomain}cat/database`,{mode:'no-cors'})        
        .then((data)=>{
            this.setState({
                posts:data,
            });
            console.log(data);
        }).catch((err)=>{
            console.log('Error=',err);
        })
    };

    renderItem(){
     return   this.state.posts.map((item)=>{
            <div key="item.id">
                <h1>node-react</h1>
                {/* <img src=`${this.state.originalDomain}/uploads/images/${item.postImage}` alt=""/> */}
                <span>title={item.title}</span><br/>
                <span>author={item.author}</span><br/>
                <span>body={item.body}</span><br/>
                <span>data posted={item.dataPosted}</span><br/>


            </div>

     })
    }

    render(){
        return(
            <div>
                {this.renderItem()}

            </div>
        );
    }


}

export default Test;