import React from 'react';
import styles from './Button1.module.css';

/*
  PostCSS는 create-react-app을 이용하면 자동으로 설치된다.
  
  사용방법
  1. 파일명.module.css 확장자를 만들어주면 각 컴포넌트별로 모듈화된 css 파일을 만들 수 있다.
    ex) Button1.css -> Button1.module.css
  
    때문에 BEM 규칙이나 중첩 적용되는 부분들을 css 작성시 고려하지 않아도 된다.
  
    BEM(Blcok, Element, Modifier) 작성법
    ex) .header__navigation--navi-text {color: red;} 
    위 코드에서 header는 Block, navigation은 Element, navi-text는 Modifier가 된다.

  2. import styles from './Button1.module.css'; <- import 해준다 

  3. <button className={styles.button}>Button1</button>;

  4. 리액트앱 실행 후 콘솔 확인하면 
  PostCSS에서 컴포넌트명 + css명 + 고유한id를 붙여준다.
  <button class="Button1_button__S9dlB">Button1</button>

  css를 모듈별로(파일별로) 관리하여 css에서 정의한 class 명을 직관적으로 사용할 수 있다.
*/

export default function Button1() {
  return <button className={styles.button}>Button1</button>;
}
