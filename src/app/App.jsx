import { useState } from 'react'

import './App.css'

function App() {



  const [value, setValue] = useState('') 
  const [error, setError] = useState('')

  const handleDefault = (e) => { 
      setValue(value => value =+ e.target.value) 
  }
  const handelDelete = () => {
    setValue(value.substring(0, value.length - 1) )
  }
    const handleClearAll = () => {
      setValue('')
      setError('')  
    }

  

  const handleEqually = () => {
    try {
      setValue(
        String(eval(value)).length > 3 && 
          String(eval(value)).includes('.') ? 
            String(eval(value).toFixed(4)) : 
              String(eval(value)))
    } catch(Error) {
      setError('Ошибка!')
    }
  }



  return (
    <div className="App">
        <div className="App-wrapper">
          <div className="App-content">
            <br />
            <div className="App-content-wrapper">
              <div className="App-input-content">{error ? error : value}</div>
              {/* <input value={value}  type="text" className='App-input-content' readOnly/> */}

              
              <div className="flex">
                <button value={1} className='App-item color-num' onClick={handleDefault}>1</button>
                <button value={2} className='App-item color-num' onClick={handleDefault}>2</button>
                <button value={3} className='App-item color-num' onClick={handleDefault}>3</button>
                <button value={4} className='App-item color-num' onClick={handleDefault}>4</button>
                <button value={5} className='App-item color-num' onClick={handleDefault}>5</button>
                <button value={6} className='App-item color-num' onClick={handleDefault}>6</button>
                <button value={7} className='App-item color-num' onClick={handleDefault}>7</button>
                <button value={8} className='App-item color-num' onClick={handleDefault}>8</button>
                <button value={9} className='App-item color-num' onClick={handleDefault}>9</button>
                <button value={'*'} className='App-item color-symb ' onClick={handleDefault}>x</button>
                <button value={0} className='App-item color-num'onClick={handleDefault}>0</button>
                <button value={'/'} className='App-item color-symb'onClick={handleDefault}>÷</button>
                <button value={'+'} className='App-item color-symb'onClick={handleDefault}>+</button>
                <button value={'C'} className='App-item color-symb' onClick={handleClearAll}>C</button>  
                <button value={'-'} className='App-item color-symb'onClick={handleDefault}>-</button>
                <button value={','} className='App-item color-symb'onClick={handleDefault}>,</button>
                <button value={'='} className='App-item color-symb' onClick={handleEqually}>=</button>
                <button value={'⌫'} className='App-item color-symb' onClick={handelDelete}>⌫</button>
              </div>

            </div>
          </div>
        </div>
    </div>
  )
}

export default App
