import React from 'react';
import './App.css';
import { useDispatch, useSelector } from 'react-redux';
import { executeTest } from './ducks/test/test'
import { RootState } from './app/store';

function App() {
  const dispatch = useDispatch();
  const { timesTested } = useSelector((state: RootState) => state);
  return (
    <div className="App">
      <p>{timesTested}</p>
      <button type='button' onClick={() => {dispatch(executeTest())}}>LOL</button>
    </div>
  );
}

export default App;
