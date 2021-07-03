import React from 'react';
import '../App.css';
import Display from './Display';
import ButtonPanel from './ButtonPanel';
import calculate from '../logic/calculate';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      total: '0',
      next: '',
      operation: '',
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick = (buttonName) => {
    const { total, next, operation } = calculate(this.state, buttonName);
    this.setState({ total, next, operation });
  }

  render() {
    const { total, next, operation } = this.state;
    const output = operation === '=' ? total : `${total} ${operation} ${next}`;
    return (
      <>
        <Display result={output} />
        <ButtonPanel clickHandler={this.handleClick} />
      </>
    );
  }
}

export default App;
