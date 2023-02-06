import React, { useEffect } from 'react';
import './App.css';
import { useDispatch } from 'react-redux';
import { getAllProducts } from './redux/services';
const App = () => {
  const dispatch = useDispatch()
  
  useEffect(() => {
    dispatch(getAllProducts())
  }, [])
  return (
    <div className='app'>
    </div>
  );
};

export default App;