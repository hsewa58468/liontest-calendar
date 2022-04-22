import React, { Component } from 'react'

export default class Test extends Component {

    state = {todo:{id:1,name:"123"}}

    handle = ()=>{
        this.setState((state)=>{
            return {todo:{
                id:state.todo.id+1,
                name:"456" 
            }}
        })
    }
    render() {
        const{todo} = this.state
        return (
        <div>
            
            <button onClick={this.handle}>change</button>
            <h1>{todo.id}</h1>
            <h1>{todo.name}</h1>
        </div>
        )
    }
}
 