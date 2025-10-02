import React, { Component } from 'react';

class FunctionCounter extends Component {
  constructor(props) {
    super(props);


    this.state = {
      count: 0,
    };
  }

  
  inc = () => {
    this.setState((prevState) => ({
      count: prevState.count + 1,
    }));
  };


  dec = () => {
    this.setState((prevState) => ({
      count: prevState.count > 0 ? prevState.count - 1 : 0,
    }));
  };

  render() {
    return (
      <div className="col-lg-5 mx-auto shadow my-5 p-4 bg-light rounded-bottom-3">
      
        <h1 className="text-center text-opacity-50">{this.state.count}</h1>

      
        <div className="btn-group d-flex justify-content-center p-2">
          <button className="btn btn-info shadow text" onClick={this.inc}>
            Increment
          </button>
          <button className="btn btn-danger shadow" onClick={this.dec}>
            Decrement
          </button>
        </div>
      </div>
    );
  }
}

export default FunctionCounter;
