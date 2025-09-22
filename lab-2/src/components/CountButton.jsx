import { useState } from "react";

import Button from "./Button";

const CountButton = () => {
  const [count, setCount] = useState(0);

  const handleClick = () => {
    setCount(count + 1);
  };

  return <Button onClick={handleClick}>count is {count}</Button>;
};

export default CountButton;
