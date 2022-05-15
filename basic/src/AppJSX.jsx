import './App.css';

{
  /*
  [ 최신 Yarn 설정 ] 
    내가 app.js에서 무언가를 수정하고 저장했을 때 에러가 발셍하면 아래처럼 세팅을 해야한다.
    create-react-app과 yarn이 충돌되서 생기는 에러이기 떄문에 eslint 관련된 걸 수동으로 설정해줘야 함. 
    
    해결방법 
    1. yarn을 중지시킨다.
    2. $ yarn add -D eslint-config-react-app 
    3. 프로젝트 최상단에 .yarnrc.yml 파일을 만들어 준다.
    4. .yarnrc.yml 안에  아래와 같이 입력
    packageExtensions:
    react-scripts@*:
      peerDependencies:
        eslint-config-react-app: '*'
  
  5. yarn을 끄고 $ yarn cache clean 입력하여 캐시 삭제
  6. $ yarn install 을 입력하여 프로젝트를 처음부터 셋업
  7. $ yarn start 를 이용하여 다시 실행
  8. app.js 에서 텍스트 수정하여 에러 발생 문제가 해결된 것 확인

  npm을 사용하는 경우 적용할 필요 x

  최신 yarn berry (pnp)를 사용할때 타입 정보를 얻어오지 못해, 자동완성이나 힌트를 보지 못해서 불편한 경우 
  pnp를 끄고 예전처럼 node_modules를 사용할 수 있다.
  적용방법 : .yarnrc.yml 파일에 아래 코드만 추가.
          nodeLinker: node-modules
  */
}
{
  /* 

  리액트 함수형 컴포넌트의 이름은 대문자로 시작한다.

  리액트 컴포넌트라는 인식을 위해 return 시 jsx 문법을 사용한다.

  [ JSX 와 HTML의 차이 ]
  1. 컴포넌트는 꼭 하나의 태그만을 반환해야 한다. 다수의 태그를 반환하고 싶다면 <Fragment></Fragment> or <></> 사용
  2. class를 사용해야할 때 className을 사용
  3. JSX는 자바스크립트에서 작성하는 문법이기 때문에 html 처럼 사용하지만 jascript 코드 작성이 가능하다. 단, js 코드 작성시 {} 중괄호 사용

  */
}
function AppJSX() {
  const name = 'dev.k';
  const list = ['우유', '딸기', '바나나', '요거트'];
  return (
    <>
      <h1 className="orange">{`Hello! ${name}`}</h1>
      <h2>Hello!</h2>
      <p>{name}</p>
      <ul>
        {/* 중괄호를 사용하면 항상 return을 명시해줘야함 */}
        {list.map((item) => {
          return <li>{item}</li>;
        })}
        {/* item을 인자로 받아 값을 바로 반환하여 중괄호 return 생략 */}
        {list.map((item) => (
          <li>{item}</li>
        ))}
      </ul>
      <img
        style={{ width: '450px', height: '350px' }}
        src="https://images.unsplash.com/photo-1677253171066-b78ddca69a65?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
        alt="Canada"
      />
    </>
  );
}

export default AppJSX;
