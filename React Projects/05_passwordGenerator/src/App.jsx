import React, { useCallback, useEffect, useRef, useState } from 'react'
import './index.css'

const App = () => {
  const [password, setPassword] = useState('');
  const [length, setLength] = useState(8);
  const [numAllowed, setNumAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);
  const passwordRef = useRef(null)

  const passwordGenerator = useCallback(()=>{
    let pass = ''
    let str = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
    let numbers = '0123456789';
    let chars = '!@#$%^&*()';
    if(numAllowed)  {
      str += numbers;
    }
    if(charAllowed){
      str += chars;
    }
    for (let i = 0; i < length; i++) {
      let char = Math.floor(Math.random() * str.length + 1);
      pass += str.charAt(char)
    }
    setPassword(pass)
  },[length, numAllowed, charAllowed])

  const copyPasswordToClipboard = useCallback(() => {
    passwordRef.current?.select()
    window.navigator.clipboard.writeText(password)
  }, [password])

  useEffect(()=>{
    passwordGenerator();
  },[length, numAllowed, charAllowed, passwordGenerator])
  return (
    <div className='container'>
      <h1>Password Generator</h1>
      <input type="text" value={password} placeholder='Password' readOnly className='password'/>
      <button onClick={copyPasswordToClipboard}>Copy</button>
      <input type="range" min={6} max={16} value={length} onChange={(e) => setLength(e.target.value)} className="slider" />
      <label>Length : {length}</label>
      <input type="checkbox" id='numbers' checked={numAllowed} onChange={(e) => setNumAllowed(e.target.checked) } className='checkbox' />
      <label htmlFor="numbers">Numbers</label><br />
      <input type="checkbox" id='characters' checked={charAllowed} onChange={(e) => setCharAllowed(e.target.checked) } className='checkbox' />
      <label htmlFor="characters">Characters</label><br />
    </div>
  )
}

export default App