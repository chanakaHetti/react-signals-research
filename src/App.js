import React, { useState } from 'react';

import ChildOne from './child-one';
import ChildTwo from './child-two';

function App() {
  const [count, setCount] = useState(0);

  const incrementCount = () => {
    setCount(count + 1);
  };

  return (
    <div>
      <button onClick={incrementCount}>Increment Count</button>
      <ChildOne count={count} />
      <ChildTwo />
    </div>
  );
}

export default App;
