import React from 'react';
import { useDispatch, useSelector } from "react-redux";
import './App.css';
import { BLUE, GREEN, RED } from './constants';

function App() {
  const colorValue = useSelector((state) => state.color);
  const dispatch = useDispatch();

  const setColor = (color) => {
    dispatch({
      type: color,
    })
  }
  const setDefaultColor = (color, defaultColor) => {
    return color ? color : defaultColor
  }
  return (
    <div>
      <div>
        <button className={setDefaultColor(colorValue, 'red')} onClick={() => { setColor(RED) }}>red</button>
        <button className={setDefaultColor(colorValue, 'green')} onClick={() => { setColor(GREEN) }}>green</button>
        <button className={setDefaultColor(colorValue, 'blue')} onClick={() => { setColor(BLUE) }}>blue</button>
      </div>
    </div>
  );
}

export default App;
