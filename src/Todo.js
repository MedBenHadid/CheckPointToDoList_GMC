import React, { Component } from 'react';

class Todo extends Component {
    state ={
        done : false,
    }

    render() {
        let textDecoration
if(this.state.done === true){
    textDecoration ='line-through';
}

        return (
            <div>
<h1 style={{textDecoration : textDecoration}} onClick={()=>{this.setState({done : !this.state.done})}}>{this.props.item}</h1>
        
                </div>
        )
    }
}
export default Todo;