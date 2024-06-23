import { useCallback, useEffect, useRef, useState } from 'react'
import './App.css'

function App() {
  const [length, setLength] = useState(8);
  const [allowNum, setAllownum] = useState(false);
  const [allowChar, setAllowchar] = useState(false);
  const [password, setPassword] = useState("");

  const passwordRef = useRef(null);

  const passwordGen = useCallback(() => {
    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    if (allowNum) str += "0123456789"
    if (allowChar) str += "!@$%^&*{}"

    for (let index = 1; index < length; index++) {
      let char = Math.floor(Math.random() * str.length + 1)
      pass += str.charAt(char)
      
    }

    setPassword(pass)

  },[length, allowNum, allowChar, setPassword])

  const copyPassword = useCallback(() => {
    passwordRef.current?.select();
    passwordRef.current?.setSelectionRange(0, 100);
    window.navigator.clipboard.writeText(password)
  },[password])
  
  useEffect(() => {
    passwordGen()
  },[length, allowNum, allowChar, passwordGen])


  return (
    <>
      <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-2 my-8 text-orange-400 bg-gray-500'>
        <h1 className='text-white text-center'>Password Generator</h1>
        <div className='flex shadow rounded-lg overflow-hidden mb-4'>
          <input
            type="text"
            value={password}
            className='outline-none w-full py-1 px-4'
            placeholder='Password'
            ref={passwordRef}
            readOnly
          />
          <button className='outline-none bg-blue-950 text-white px-3 py-0.5 shrink-0 hover:bg-sky-700' onClick={copyPassword}>
            Copy
          </button>
        </div>

        <div className='flex text-sm gap-x-2'>
          <div className='flex items-center gap-x-1'>
            <input
              type="range"
              min={6}
              max={100}
              value={length}
              className='cursor-pointer'
              onChange={(e)=>{setLength(e.target.value)}}
            />
            <label className='font-medium'>Length: {length}</label>
          </div>

          <div className='flex items-center gap-x-1'>
            <input
              type="checkbox"
              defaultChecked={allowNum}
              id="numberInput"
              onChange={() => {
                setAllownum((prev) => !prev);
              }}
            />
            <label htmlFor="numberInput" className='font-medium'>Numbers</label>
          </div>

          <div className='flex items-center gap-x-1'>
            <input
              type="checkbox"
              defaultChecked={allowChar}
              id="charInput"
              onChange={() => {
                setAllowchar((prev) => !prev);
              }}
            />
            <label htmlFor="charInput" className='font-medium'>Characters</label>
          </div>

        </div>

      </div>
    </>
  )
}

export default App
