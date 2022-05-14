import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          {/*
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
          
          */}
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
