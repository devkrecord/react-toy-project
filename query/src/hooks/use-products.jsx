import { useEffect, useState } from 'react';

/* hook은 값의 재사용이 아닌 로직의 재사용을 위해 사용한다 */
/*
  hook의 문제
  1. cache가 되지 않는다. - 네트워크에서 받아온 데이터를 별도로 저장하지 않고 훅을 호출할 때마다 새롭게 값을 받아온다
  2. retry - 통신에 실패했을 때 다시 재시도 할 수 있는 기능이 없다.
  
  리액트쿼리는 이러한 문제를 해결해준다.
  네트워크 통신을 간편하게 해주고 
  로딩중인지 에러가 발생했는지 데이터를 받아왔는지 손쉽게 알게해주고
  동일한 네트워크 요청이라면 얼마동안 앱 메모리상에 캐시 해놓을지 설정 가능  - cache 가능
  글로벌 상태 관리 제공
  네트워크 통신 실패시 다시 시도 할 수 있는 재시도 기능도 있다. - retry 기능 
*/
export default function useProducts({ salesOnly }) {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState();
  const [products, setProducts] = useState([]);
  useEffect(() => {
    console.log('fetching....');
    setLoading(true);
    setError(undefined);
    fetch(`data/${salesOnly ? 'sale_' : ''}products.json`)
      .then((res) => res.json())
      .then((data) => {
        console.log('🔥뜨끈한 데이터를 네트워크에서 받아옴');
        setProducts(data);
      })
      .catch((e) => setError('에러가 발생했음!'))
      .finally(() => setLoading(false));
    return () => {
      console.log('🧹 깨끗하게 청소하는 일들을 합니다.');
    };
  }, [salesOnly]);

  return [loading, error, products];
}
