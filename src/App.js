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
            <input type='text' value={value} />
          </div>
          <div className='calculator-buttons'>
            <input type='button' value='1' onClick={e => setValue(value + e.target.value)}/>
            <input type='button' value='2' onClick={e => setValue(value + e.target.value)}/>
            <input type='button' value='3' onClick={e => setValue(value + e.target.value)}/>
            <input type='button' value='+' onClick={e => setValue(value + e.target.value)}/>
          </div>
          <div className='calculator-buttons'>
            <input type='button' value='4' onClick={e => setValue(value + e.target.value)}/> 
            <input type='button' value='5' onClick={e => setValue(value + e.target.value)}/>
            <input type='button' value='6' onClick={e => setValue(value + e.target.value)}/>
            <input type='button' value='-' onClick={e => setValue(value + e.target.value)}/>
          </div>
          <div className='calculator-buttons'>
            <input type='button' value='7' onClick={e => setValue(value + e.target.value)}/>
            <input type='button' value='8' onClick={e => setValue(value + e.target.value)}/>
            <input type='button' value='9' onClick={e => setValue(value + e.target.value)}/>
            <input type='button' value='*' onClick={e => setValue(value + e.target.value)}/>
          </div>
          <div className='calculator-buttons'>
            <input type='button' value='0' onClick={e => setValue(value + e.target.value)}/>
            <input type='button' value='00' onClick={e => setValue(value + e.target.value)}/>
            <input type='button' value='=' onClick={e => setValue(eval(value))}/>
            <input type='button' value='/' onClick={e => setValue(value + e.target.value)}/>
          </div>
          <div className='calculator-buttons'>
            <input type='button' value='<=' onClick={e => setValue(value.slice(0, -1))}/>
            <input type='button' value='C' onClick={e => setValue('')}/>
            <input type='button' value='.' onClick={e => setValue(value + e.target.value)}/>
          </div>
        </form>
      </div>
    </div>
  )
}

export default App;
