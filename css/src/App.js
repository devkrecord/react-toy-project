import './App.css';
import Button1 from './components/Button1';
import Button2 from './components/Button2';
import StyledComponent from './StyledComponent';
import TailwindComponent from './TailwindComponent';

/*  
[ 성능 ]
PostCSS          : Pure CSS  
Styled Components: Css in JS (성능에 좋지 않음, 재컴파일 되어야 함)
Tailwind         : Pure CSS  (미리 정해진 클래스 이름들을 조립 -> 사용법을 익혀야 함)

[ 활용성 ]
PostCSS          : Anywhere!
Styled Components: React, React-Native
Tailwind         : Anywhere!

[ 강점 ]
PostCSS          : 고립성/독립성, 순수 css,입문자에게 제일 좋음
Styled Components: 고립성/독립성, JavaScript를 통한 편의성, 비지니스 로직과 스타일이 뒤엉킴
Tailwind         : 잘 정의된 디자인 시스템 클래스 이름, 클래스명 창작의 고통 bye~, 태그와 스타일을 함꼐! 
                    -> 다소 난

*/

function App() {
  return (
    <>
      <Button1 />
      <Button2 />
      <StyledComponent />
      <TailwindComponent />
    </>
  );
}

export default App;
