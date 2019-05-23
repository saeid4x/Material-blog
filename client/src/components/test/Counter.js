import React ,{Component} from 'react'

class Counter extends Component{
    
    render(){
        const {value,onIncrement,onDecrement}=this.props;
        return(
            <div>
                <h2>Count: {value}</h2>
                <button onclick={onIncrement}>Increment</button>
                <button onClick={onDecrement}>Decrement</button>
            </div>
        )
    }

}

export default Counter;