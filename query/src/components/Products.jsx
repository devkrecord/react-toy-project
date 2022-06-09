import React, { useState } from 'react';
import { useQuery } from '@tanstack/react-query';

export default function Products() {
  const [checked, setChecked] = useState(false);
  /*
    'useQuery'는 React Query를 이용해 서버로부터 데이터를 조회해올 때 사용 
    [ const res = useQuery(queryKey, queryFn); ]

    'queryKey'의 역할은 React Query가 query 캐싱을 관리할 수 있도록 도와준다.
    res1과 res2가 동일한 queryKey를 사용하며 서버에 있는 데이터를 조회하려 할 때
    일반적인 상황에서는 res1과 res2에 대한 모든 요청이 이루어지게 되므로 서버에 2개의 request가 전달된다.
    하지만 해당 코드에서는 서버에 1개의 request만 전달된다.
    왜냐하면 res1에서 request를 서버에 전달하게 되면 res2에서는 이미 동일한 queryKey에 대한 결괏값이 있기 때문에 추가 요청을 하지 않고 res1의 결과를 그대로 가져와 사용하기 때문에 

    'queryFn'은 query Function으로 promise 처리가 이루어지는 함수라고 생각하면 된다.
    즉, 서버에 API 요청하는 코드라고 생각할 수 있습니다.

 
    데이터 조회가 아닌 데이터 변경 작업을 할 때는 useMutation을 사용

   
*/
  const {
    isLoading,
    error,
    data: products,
  } = useQuery(['products'], async () => {
    //동일한 결과값이 캐싱되어 있어 한번만 호출됨
    console.log('fetching...');
    return fetch(`data/products.json`).then((res) => res.json());
  });
  //const [loading, error, products] = useProducts({ salesOnly: checked });
  const handleChange = () => setChecked((prev) => !prev);

  if (isLoading) return <p>Loading...</p>;

  if (error) return <p>{error}</p>;

  return (
    <>
      <label>
        <input type="checkbox" checked={checked} onChange={handleChange} />
        Show Only 🔥 Sale
      </label>
      <ul>
        {products?.map((product) => (
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
