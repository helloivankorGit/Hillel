import React from "react";

class ClassCounter extends React.Component {
    constructor() {
        super();
        this.state = { like: 0 };
        this.increment = this.increment.bind(this);
        this.decrement = this.decrement.bind(this);
    }

    increment () {
        this.setState({ like: this.state.like + 1});
    }
    
    decrement () {
        this.setState({ like: this.state.like - 1 })
    }

    render() {
        return (
            <div>
                <h1>Songs count: {this.state.like}</h1>
                <button onClick={this.increment}>increment</button>
                <button onClick={this.decrement}>decrement</button>
            </div>
        );
    }
}

export default ClassCounter;