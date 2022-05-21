import { useEffect, useState } from 'react';

export default function useProducts({ salesOnly }) {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState();
  const [products, setProducts] = useState([]);

  /*
    커스텀 훅은 함수로 만들어야 하고 use키워드를 사용해야하며
    리액트 컴포넌트와 마찬가지로 useEffect, useState 등을 사용 할 수 있다.
    다만 UI가 아닌 필요한 데이터를 반환한다.

    ***
    Hooks은 (함수들은) 값의 재사용이 아니라 로직의 재사용을 위한 것이다.
  */

  useEffect(() => {
    setLoading(true);
    setError(undefined); // 에러 초기화
    fetch(`data/${salesOnly ? 'sale_' : ''}products.json`)
      .then((res) => res.json())
      .then((data) => {
        console.log('🔥뜨끈한 데이터를 네트워크에서 받아옴');
        setProducts(data);
      })
      .catch((e) => setError('에러가 발생했음!'))
      .finally(() => setLoading(false));
    return () => {
      // clean-up 함수: 컴포넌트가 unmount될 때 호출 ( 메모리를 정리하거나, socket network 통신을 닫을 때 사용 )
      console.log('🧹 깨끗하게 청소하는 일들을 합니다.');
    };
  }, [salesOnly]);
  return [loading, error, products];
}
