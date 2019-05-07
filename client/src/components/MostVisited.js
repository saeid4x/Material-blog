import React,{Component} from 'react';
import {Link} from 'react-router-dom';

class MostVisited extends Component{

    state={
        posts:[]
    }

    componentDidMount(){
        var url="http://127.0.0.1:8082/stats/mostvisited";
        fetch(url)
            .then((res)=>res.json())
            .then((data)=>{
                this.setState({
                    posts:data
                });
                console.log('data=',data)
            })
    };

    loadData(){
        return this.state.posts.map((item)=>(
            <div key={item._id}>
                <h1><Link to={`/post/${item._id}`}>{item.title}</Link></h1>
                <p>num-bazdid= {item.numBazdid}</p>
            </div>
        ))
    };

    render(){
        return(
            <section>
                {this.loadData()}
            </section>
        )
    }

}
export default MostVisited;