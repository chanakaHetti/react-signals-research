const ChildOne = ({ count }) => {
  console.log('ChildComponent 1 is rendered');

  return <div>Count: {count}</div>;
};

export default ChildOne;
