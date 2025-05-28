/* eslint-disable react/jsx-no-comment-textnodes */
/* eslint-disable no-eval */
import React, { useState } from 'react';
import './App.css';
import Logo from './Assets/mylogo.png';

const App = () => {

  const[value,setValue] = useState('');

  return (

    <div className='container'>
      <div className='calculator'>
        <img src={Logo} alt=''/>
        <form action=''>
          <div className='calculator-display'>
            <input type='text' value={value} placeholder='0'/>
          </div>
          <div className='calculator-buttons'>
            <input type='button' value='1' onClick={e => setValue(value + e.target.value)}/>
            <input type='button' value='2' onClick={e => setValue(value + e.target.value)}/>
            <input type='button' value='3' onClick={e => setValue(value + e.target.value)}/>
            <input type='button' value='4' onClick={e => setValue(value + e.target.value)}/> 
            <input type='button' value='5' onClick={e => setValue(value + e.target.value)}/>
            <input type='button' value='6' onClick={e => setValue(value + e.target.value)}/>
          </div>
          <div className='calculator-buttons'>
            <input type='button' value='7' onClick={e => setValue(value + e.target.value)}/>
            <input type='button' value='8' onClick={e => setValue(value + e.target.value)}/>
            <input type='button' value='9' onClick={e => setValue(value + e.target.value)}/>
            <input type='button' value='0' onClick={e => setValue(value + e.target.value)}/>
            <input type='button' value='00' onClick={e => setValue(value + e.target.value)}/>
            <input type='button' value='000' onClick={e => setValue(value + e.target.value)}/>
          </div>
          <div className='calculator-buttons'>
            <input type='button' value='+' onClick={e => setValue(value + e.target.value)}/>
            <input type='button' value='-' onClick={e => setValue(value + e.target.value)}/>
            <input type='button' value='*' onClick={e => setValue(value + e.target.value)}/>
            <input type='button' value='/' onClick={e => setValue(value + e.target.value)}/>
            <input type='button' value='.' onClick={e => setValue(value + e.target.value)}/> 
            {/* eslint-disable-next-line no-eval */}
            <input type='button' value='=' onClick={e => setValue(eval(value))}/>
          </div>
          <div className='calculator-buttons'>
            <input type='button' value='AC' onClick={e => setValue('')}/>
            <input type='button' value='C' onClick={e => setValue(value.slice(0, -1))}/>
            <input type='button' value='√' onClick={e => setValue(Math.sqrt(value))}/>
            <input type='button' value='π' onClick={e => setValue(value + Math.PI)}/>
            <input type='button' value='e' onClick={e => setValue(value + Math.E)}/>
            <input type='button' value='!' onClick={e => {
              const factorial = n => (n <= 1) ? 1 : n * factorial(n - 1);
              setValue(factorial(value));
            }
            }/>
          </div>
          <div className='calculator-buttons'>
            <input type='button' value='sin' onClick={e => setValue(Math.sin(value))}/>
            <input type='button' value='cos' onClick={e => setValue(Math.cos(value))}/>
            <input type='button' value='tan' onClick={e => setValue(Math.tan(value))}/>
            <input type='button' value='asin' onClick={e => setValue(Math.asin(value))}/>
            <input type='button' value='log' onClick={e => setValue(Math.log(value))}/>
            <input type='button' value='exp' onClick={e => setValue(Math.exp(value))}/>
          </div>
          <div className='calculator-buttons'> 
            <input type='button' value='(' onClick={e => setValue(value + e.target.value)}/>
            <input type='button' value=')' onClick={e => setValue(value + e.target.value)}/>
            <input type='button' value='x²' onClick={e => setValue(value * value)}/>
            <input type='button' value='x³' onClick={e => setValue(value * value * value)}/>
            <input type='button' value='1/x' onClick={e => setValue(1 / value)}/>
            <input type='button' value='^' onClick={e => setValue(value + '**')}/>
          </div>
          <div className='calculator-buttons'>
            <input type='button' value='mod' onClick={e => setValue(value + '%')}/>
            <input type='button' value='rand' onClick={e => setValue(Math.random())}/>
            <input type='button' value='abs' onClick={e => setValue(Math.abs(value))}/>
            <input type='button' value='floor' onClick={e => setValue(Math.floor(value))}/>
            <input type='button' value='ceil' onClick={e => setValue(Math.ceil(value))}/>
            <input type='button' value='round' onClick={e => setValue(Math.round(value))}/>
          </div>
        </form>
      </div>
    </div>
  )
}

export default App;
