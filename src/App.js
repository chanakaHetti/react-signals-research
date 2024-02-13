import React, { useState } from 'react';
import { signal } from '@preact/signals-react';

import ChildOne from './child-one';
import ChildTwo from './child-two';

const count = signal(0);

function App() {
  // const [count, setCount] = useState(0);

  const incrementCount = () => {
    // setCount(count + 1);
    count.value += 1;
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
