import React from 'react';
import '../App.css';
import Display from './Display';
import ButtonPanel from './ButtonPanel';
import calculate from '../logic/calculate';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      total: '',
      next: '',
      operation: null,
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(buttonName) {
    // const { total, next, operation } = calculate(this.state, buttonName);
    // this.setState({ total, next, operation });
    const dataset = this.state;
    const calc = calculate(dataset, buttonName);
    this.setState(() => ({ ...calc }));
  }

  render() {
    const { total, next, operation } = this.state;
    return (
      <>
        <Display result={total ?? next ?? operation} />
        <ButtonPanel />
      </>
    );
  }
}

export default App;
