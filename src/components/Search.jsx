import { useState } from "react";

export default () => {
  const [counter, setCounter] = useState(0);

  return (
    <div>
      <button onClick={() => setCounter(counter + 1)}></button>
      {counter}
    </div>
  );
};
