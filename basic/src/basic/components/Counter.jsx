import React, { useState } from 'react';

export default function Counter({ total, onClick }) {
  const [count, setCount] = useState(0);
  return (
    <div className="counter">
      <p className="number">
        {count}
        <span class="total">/{total}</span>
      </p>
      <button
        className="button"
        onClick={() => {
          setCount((prev) => prev + 1);
          onClick();
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
