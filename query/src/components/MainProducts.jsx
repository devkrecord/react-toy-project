import React, { useState } from 'react';
import Products from './Products';
import { useQueryClient } from '@tanstack/react-query';

export default function MainProducts() {
  const [showLeftProducts, setShowLeftProducts] = useState(true);
  const [showRightProducts, setShowRightProducts] = useState(true);
  const client = useQueryClient();

  return (
    <main className="container">
      <div>
        {showLeftProducts && <Products />}
        <button onClick={() => setShowLeftProducts((show) => !show)}>
          Toggle
        </button>
      </div>
      <div>
        {showRightProducts && <Products />}
        <button onClick={() => setShowRightProducts((show) => !show)}>
          Toggle
        </button>
      </div>
      <button
        onClick={() => {
          client.invalidateQueries(['products', false]); // 서버에 새로운 데이터를 처리했을 때 해당하는 products, false 키에 한해서 캐시를 invalidateQueries(새로고침) 할 수 있다.
          // client.invalidateQueries(['products']); // products에 관한 모든 key 를 invalidateQueries
        }}
      >
        정보가 업데이트 되었음!
      </button>
    </main>
  );
}
