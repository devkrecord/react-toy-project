import React, { useEffect, useState } from 'react';

export default function Products() {
  const [products, setProducts] = useState([]);
  const [checked, setChecked] = useState(false);
  const handleChange = () => setChecked((prev) => !prev);

  useEffect(() => {
    fetch(`data/${checked ? 'sale_' : ''}products.json`)
      .then((res) => res.json())
      .then((data) => {
        console.log('🔥뜨끈한 데이터를 네트워크에서 받아옴');
        setProducts(data);
      });
    return () => {
      // clean-up 함수: 컴포넌트가 unmount될 때 호출 ( 메모리를 정리하거나, socket network 통신을 닫을 때 사용 )
      console.log('🧹 깨끗하게 청소하는 일들을 합니다.');
    };
  }, [checked]);

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
