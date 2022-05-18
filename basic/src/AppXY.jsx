import React, { useState } from "react";
import "./AppXY.css";

export default function AppXY() {
  // 서로 연관있는 데이터라면 ( 서로 밀접하고 업데이트가 동시에 일어나는 경우 ) 객체로 묶어서 관리하는것이 효율적
  // 상태를 객체 단위로 보관하고 업데이트
  const [position, setPosition] = useState({ x: 0, y: 0 });
  return (
    <div
      className="container"
      onPointerMove={(e) => {
        // setPosition({ x: e.clientX, y: e.clientY });
        // 만약 수평으로만 이동이 가능하다면?
        setPosition((prev) => ({ x: e.clientX, y: prev.y }));
      }}
    >
      <div
        className="pointer"
        style={{ transform: `translate(${position.x}px, ${position.y}px)` }}
      ></div>
    </div>
  );
}
