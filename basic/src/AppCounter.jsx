import React, { useState } from 'react';
import './App.css';

export default function AppCounter() {
  const [count, setCount] = useState(0);
  return (
    <div className="counter">
      <span className="number">{count}</span>
      <button
        className="button"
        onClick={() => {
          setCount(count + 1);
        }}
        /*
        setState를 여러번 호출하거나, 비동기적으로 내가 예상하지 못한 순간 set할 경우 두번째 방법 사용
        
        1. 첫번째
        onClick={() => {
          setCount(count + 1);
          setCount(count + 1);
          setCount(count + 1);
        }} 최종 count 값 0 

        2. 두번쨰
        onClick={() => {
          setCount((prev) => prev + 1);
          setCount((prev) => prev + 1);
          setCount((prev) => prev + 1);
        }} 최종 count 값 3
        */
      >
        Add +
      </button>
    </div>
  );
}
