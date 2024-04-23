import {useCallback, useEffect, useMemo,
  useRef, useState} from 'react'

import './App.css'

interface User{
 id : number,
 username : string,
}

type fibFunc = (n:number) => number

const fib: fibFunc = (n) => {
 if(n <= 1) return n
 return fib(n-1) + fib(n-2)
}

const myNum : number = 10

function App() {
 const [count , setCount]= useState(0)
 const [users] = useState<User[]>([
  {id: 1, username: 'mike'},
  {id: 2, username: 'jane'},
  {id: 3, username: 'john'},
])


 const inputRef = useRef<HTMLInputElement>(null)

 console.log(inputRef?.current)
 console.log(inputRef?.current?.value)

 useEffect(()=>{
   console.log('mounting')
   console.log('User: ',users)
   return ()=>{
     console.log('unmounting')
   }
 },[users])

 const addTwp = useCallback(():void => setCount(prev =>prev +2),[])

 const result = useMemo(() => fib(myNum),[myNum])
 return (
   <div className="App">
     <h1>USE HOOK IN REACT USING TYSCRIPT</h1>
     <h1>{count}</h1>
     <button onClick={addTwp}>ADD TWO NUMBER</button>
     <h2>{result}</h2>

     <input ref={inputRef} type="text"/>
   
   </div>
 )
}

export default App