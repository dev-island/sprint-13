import './App.css'
import { useState } from 'react'

function Button({ handleClick, title }) {
  return (
    <button onClick={handleClick}>{title}</button>
  );
}








function App() {
  const [ready, setReady] = useState(false);

  return (
    <>
      <Button
        handleClick={() => setReady(!ready)}
        title={ready ? "Ready" : "Not ready"}
      />
    </>
  );
}

export default App
