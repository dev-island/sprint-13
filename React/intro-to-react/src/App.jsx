import './App.css'
import { useState } from 'react';

const Title = ({ name }) => {
  return (
    <h1>{name}</h1>
  )
}

const SubTitle = ({ title }) => {
  return (
    <h3>{title}</h3>
  )
}

function Header({ name }) {
  return (
    <div>
      <Title name={name} />
      <SubTitle title={name} />
    </div>
  )
}

function Form({ name }) {
  return (
    <div>
      <Header name={name}/>
    </div>
  )
}

function App() {
  const [count, setCount] = useState(0)
  const name = "Andrew"
  return (
    <>
      <div>
        Current Count is {count}
      </div>
      <Form name={name} />
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </>
  )
}

export default App
 