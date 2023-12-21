import { useState } from "react";
import "./App.css";

import LifeCycleMethods from "./components/LifeCycleMethods";
import NoStateNoProps from "./components/NoStateNoProps";
import WithState from "./components/WithState";
import WithProps from "./components/WithProps";
import Button from "./components/Button";

const buttons = [
  {
    id: 1,
    text: "No State or Props",
  },
  {
    id: 2,
    text: "With State",
  },
  {
    id: 3,
    text: "With Props",
  },
  {
    id: 4,
    text: "Life Cycle Methods",
  },
];

const ID_TO_COMPONENT = {
  1: NoStateNoProps,
  2: WithState,
  3: WithProps,
  4: LifeCycleMethods,
};

function App() {
  const [activeButton, setActiveButton] = useState(1);
  function handleSetActiveButton(id) {
    setActiveButton(id);
  }
  // Get component we want to show based on the current "activeButton"
  const Component = ID_TO_COMPONENT[activeButton];
  return (
    <>
      <h1>Class based components</h1>
      <div className="flex">
        {buttons.map((button) => (
          <Button
            key={button.id}
            handleClick={handleSetActiveButton}
            {...button}
          />
        ))}
      </div>
      <div className="container">
        <Component />
      </div>
    </>
  );
}

export default App;
