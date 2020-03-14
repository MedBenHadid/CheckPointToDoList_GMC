import React from 'react';
import logo from './logo.svg';
import './App.css';
import Todo from './Todo'
class App extends React.Component {
    state = {
        tasks: [],
        input: ''
    }

    handleAddClick = () => {
        const taskList = this.state.tasks;
        taskList.push(this.state.input);
        this.setState({
            tasks: taskList,
            input: ''
        })
    }
    render() {


        return ( <div className = "App" >
          <input type="text" value={this.state.input} onChange={(event) => { this.setState({ input: event.target.value }); }} />
          <button onClick={this.handleAddClick}> ADD </button>

            {
                this.state.tasks.map((task) => {
                    return <Todo item = {task}/>

                })
            } </div>
        );
    }
}

export default App;