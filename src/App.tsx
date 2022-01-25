import React from 'react';
import './App.css';
import { useDispatch, useSelector } from 'react-redux';
import { executeTest } from './ducks/test/test'
import { RootState } from './app/store';
import {Footer} from './components/Footer'
import {Header} from './components/Header'

function App() {
  const dispatch = useDispatch();
  const { timesTested } = useSelector((state: RootState) => state);
  return (
    <div className="App">
      <Header />
      <Footer />
    </div>
  );
}

export default App;
