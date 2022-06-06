import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Videos() {
  const [text, setText] = useState('');
  const navigate = useNavigate();

  const handleChange = (e) => {
    setText(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setText('');
    // 리액트에서 url 이동하는 방법 2가지 Link, navigate
    // navigate는 코드상에서 동적으로 이동할 때 사용
    navigate(`/videos/${text}`);
  };
  return (
    <div>
      Videos
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="video id:"
          value={text}
          onChange={handleChange}
        />
      </form>
    </div>
  );
}
