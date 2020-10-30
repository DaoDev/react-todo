import React, { Component } from 'react';
import TodoList from './Component/TodoList';
import TodoItems from './Component/TodoItems';

class App extends Component {
  constructor() {
    super()
    this.state = {
      items: [],
    }
  }

  addItem = (taskName) => {
    const newTask = {
      text: taskName,
      key: Date.now()
    }
    if (taskName !== null && taskName !== '') {
      const items = [...this.state.items, newTask]
      this.setState({
        items,
      })
    }
  }
  handlereceivedItemFromChidren =(item) => {
    console.log('item 2222', item);
    
    const newArr = [...this.state.items]
    console.log('newArr', newArr);
    const resutArr = newArr.filter(task => task.key != item.key);
    this.setState({
      items: resutArr
    })
  }

  render() {
    return (
      <div>
        <TodoList addItem={this.addItem} />
        <TodoItems
          entries={this.state.items}
          receivedItemFromChidren={this.handlereceivedItemFromChidren} />
        
      </div>
    );
  }
}

export default App;