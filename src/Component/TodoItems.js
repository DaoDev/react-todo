import React, { Component } from 'react';

class TodoItems extends Component {
    handleOnclickItem(item){
        console.log(item);
        this.props.receivedItemFromChidren(item)
    }
    
    createTasks = item => {
        return (
            <li key={item.key} onClick={() =>this.handleOnclickItem(item)}>
                {item.text}
            </li>
        )
    }
    
    render() {
        const { entries } = this.props;
        console.log('this.props', this.props);
        const listItems = entries.map(this.createTasks);
        return <ul className='theList'>{listItems}</ul>
    }
}

export default TodoItems;