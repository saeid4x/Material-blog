import React,{Component} from 'react';
import {createStore} from 'redux';
import Counter from './Counter';
import CounterReducer from './reducers/reducer';

class Redux extends Component{
    
    render(){
        //CounterReducer always return updated state
        const store =createStore(CounterReducer);
        store.subscribe(this.render());
        return(
            <div>
                <Counter
                    value={store.getState()}
                    onIncrement={()=>{store.dispatch({type:'INCREMENT'})}}
                    onDecrement={()=>{store.dispatch({type:'DECREMENT'})}}
                />

            </div>
        )
    }
    
}

export default Redux;