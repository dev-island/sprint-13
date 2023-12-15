import { useState } from "react";

const Form = ({ submit }) => {
  const [title, setTitle] = useState("");

  function handleChange(e) {
    const { value } = e.target;
    setTitle(value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    submit(title);
    setTitle('')
  }

  return (
    <form>
      <input value={title} onChange={handleChange} />
      <button onClick={handleSubmit}>Submit</button>
    </form>
  );
};

export default Form;
