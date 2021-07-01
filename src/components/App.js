import React from 'react';
import '../App.css';
import Display from './Display';
import ButtonPanel from './ButtonPanel';
import calculate from '../logic/calculate';

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      total: '',
      next: '',
      operation: null,
    }
  }
}

// function App() {
//   return (
//     <>
//       <Display calculate={calculate} />
//       <ButtonPanel />
//     </>
//   );
// }

export default App;
