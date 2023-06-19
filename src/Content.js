import { useState } from "react";

const Content = () => {
  const [name, setName] = useState("Dave");

  const [count, setCount] = useState(0);

  const handleNameChange = () => {
    const names = ["Gianina", "Alin", "Iulia"];
    const int = Math.floor(Math.random() * 3);
    setName(names[int]);
  };

  const handleClick = () => {
    setCount(count + 1);
    console.log(count);
  };
  return (
    <main>
      <p>Hello {name}! </p>
      <button onClick={handleNameChange}>Change name</button>
      <button onClick={handleClick}>Count</button>
    </main>
  );
};

export default Content;
