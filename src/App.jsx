import React, { useState } from 'react';

const App = () => {
  const [calc, setCalc] = useState('');
  const [result, setResult] = useState('');

  const ops = ['/', '*', '+', '-'];

  const updateCalc = (value) => {
    console.log(value)
    if (
      ops.includes(value) && ops.includes(calc.slice(-1))
    ) {
      return
    }
    setCalc(calc + value);
    if (!ops.includes(value)) {
      setResult(eval(calc + value).toString());
    }
  }
  const createDigits = () => {

    const digit = [];
    for (let i = 1; i < 10; i++) {
      digit.push(
        <button onClick={() => updateCalc(i.toString())} key={i}>{i}</button>
      )
    }
    return digit;
  };
  const handleCalc = () => {
    if (ops.includes(calc.slice(-1))){
      alert('You should choose the final number, instead of a operator!!!')
    } else if (calc === '' && result === '') {
      alert('You should choose your calculation!!!')
    } else {
      setCalc(eval(calc).toString())
      setResult('')
    }
  }
  return (
    <div className="App">
        <h2 style={{paddingBottom: '20px'}}>REACTJS CALCULATOR</h2>
      <div className="calculator1">
        <div className="display">
          {result ? <span>({result})</span> : ''}
          {calc || "0"}
        </div>
        <div className="operators">
          <button onClick={() => updateCalc('/')}>/</button>
          <button onClick={() => updateCalc('*')}>*</button>
          <button onClick={() => updateCalc('+')}>+</button>
          <button onClick={() => updateCalc('-')}>-</button>
          <button onClick={() => {setCalc(''); setResult('')}}>DEL</button>
        </div>
        <div className="digits">
          {createDigits()}
          <button onClick={() => updateCalc('0')}>0</button>
          <button onClick={() => updateCalc('.')}>.</button>
          <button onClick={handleCalc}>=</button>
        </div>
      </div>
      <br />
      <div className="break-line">
        <p>This is my calculator version 1</p>
      </div>
    </div>
  )
}

export default App
