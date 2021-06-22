import React, { Component } from 'react';
import Counters from './components/counters';
import NavBar from './components/navbar';
import './App.css';

class App extends Component {
  state = { 
    counters: [
        {id: 1, value: 4},
        {id: 2, value: 0},
        {id: 3, value: 0},
        {id: 4, value: 0}
    ]
};

constructor(props) {
  super(props);
  console.log('App - Constructor');
}
componentDidMount() {
  console.log('App - Mounted');
}
handleReset = () => {
    //console.log("reset button was pressed.");
    const cs = this.state.counters.map(c => {
        c.value = 0;
        return c;
    });
    console.log("cs", cs);
    this.setState({ counters: cs });
    
};

handleIncrement = counter => {
    const counters = [...this.state.counters];
    const index = counters.indexOf(counter);
    counters[index].value++;
    this.setState({ counters });
    //console.log("counters", this.state.counters);
};
handleDecrement = counter => {
  const counters = [...this.state.counters];
  const index = counters.indexOf(counter);
  counters[index].value--;
  this.setState({ counters });
  //console.log("counters", this.state.counters);
};
handleDelete = (counterId) => {
    //console.log('Event Handler Called', counterId, data);
    const counters = this.state.counters.filter(c => c.id !== counterId);
    this.setState({ counters });

};

  render(){
    console.log('App - Render');

    return (
      <React.Fragment>
        <NavBar totalCounters={this.state.counters.filter(c => c.value > 0).length} />
        <NavBar totalCounters={this.state.counters.reduce((result, c) => result + c.value, 0)} />
        <main className="container">
          <Counters 
            counters={this.state.counters}
            onReset={this.handleReset}
            onIncrement={this.handleIncrement}
            onDecrement={this.handleDecrement}
            onDelete={this.handleDelete}
          />
        </main>
      </React.Fragment>
    );
  }
}

export default App;
