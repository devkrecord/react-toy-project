import React from 'react';
import { Link } from 'react-router-dom';

// Link는 a 태그와 비슷 라우팅 가능하게 해준다.
export default function Navbar() {
  return (
    <nav>
      <Link to="/">Home</Link>
      <Link to="videos">Video</Link>
    </nav>
  );
}
