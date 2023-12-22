import "./App.css";
import {
  useState,
  useEffect,
  useCallback,
  useMemo,
  useRef,
  useLayoutEffect,
  useContext,
  useReducer,
} from "react";

const ChildComp = () => {
  console.log('CHILD RENDERS')
  return (
    <div>Child Comp</div>
  )
}

const ButtonContainer = () => {
  const [shouldFetchData, setShouldFetchData] = useState(false);
  const [data, setData] = useState();
  console.log('BUTTON CONTAINER RENDERS')


  useEffect(() => {
    console.log('USE EFFECT')
    if (shouldFetchData) {
      console.log('FETCHING DATA')
      const interval = setInterval(() => {
        setData(Math.random());
        setShouldFetchData(false);
      }, 5000);
      return () => {
        clearInterval(interval);
      };
    }
  }, [shouldFetchData]);

  return (
    <div>
      <button onClick={() => setShouldFetchData(!shouldFetchData)}>{shouldFetchData ? "Loading" : "Start"}</button>
      {data ? <div>{data}</div> : null}
    </div>
  )
}


function App() {
  console.log("APP RENDERS")
  return (
    <>
      <ButtonContainer />
      <ChildComp />
    </>
  );
}

export default App;
