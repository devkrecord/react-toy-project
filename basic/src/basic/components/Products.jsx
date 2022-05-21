import React, { useState } from 'react';
import useProducts from '../../hooks/use-products';

export default function Products() {
  const [checked, setChecked] = useState(false);
  const [loading, error, products] = useProducts({ salesOnly: checked }); // 로딩, 에러, 네트워크 통신
  const handleChange = () => setChecked((prev) => !prev);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;
  return (
    <>
      <input
        id="checkbox"
        type="checkbox"
        value={checked}
        onChange={handleChange}
      />
      <label htmlFor="checkbox">Show Only 🔥 Sale</label>
      <ul>
        {/* 리액트 내부적으로 업데이트 여부, 배열 위치 변경을 key값을 이용하여 판단함.
        때문에 map을 이용해서 자식 요소를 만드는 경우 고유한 key 값을 설정해주어야한다. */}
        {products.map((product) => (
          <li key={product.id}>
            <article>
              <h3>{product.name}</h3>
              <p>{product.price}</p>
            </article>
          </li>
        ))}
      </ul>
    </>
  );
}
