import React from 'react';

export default function AppWrap() {
  return (
    <div>
      {/* Navbar 안에 사용된 태그 요소들이 리액트에서 자동으로 children이란 이름의 props으로 전달 */}
      {/* 다양하게 재사용 가능 */}
      <Navbar>
        <Avartar
          image="https://images.unsplash.com/photo-1527980965255-d3b416303d12?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1160&q=80"
          name="Bob"
          size={200}
        />
        <p>안녕하세요!</p>
      </Navbar>
      <Navbar>
        <p>안녕하세요!</p>
      </Navbar>
    </div>
  );
}

function Navbar({ children }) {
  return <header style={{ background: 'yellow' }}>{children}</header>;
}

function Avartar({ image, name, size }) {
  return (
    <div>
      <img
        src={image}
        alt={name}
        width={size}
        height={size}
        style={{ borderRadius: '50%' }}
      />
    </div>
  );
}
