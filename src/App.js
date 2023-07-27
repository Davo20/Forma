import logo from './logo.svg';
import './App.css';
// import Form from './Components/Form/Form';
// import Function from './Components/Funtion/Functions';
import Function from './SignIn/Function/Function';
import { useState } from 'react';

function App() {
  const [trueEl, setTrueEl] = useState(false)
  return (
    <div className="App">
      {/* <Function></Function> */}
      <Function></Function>
    </div>
  );
}

export default App;
