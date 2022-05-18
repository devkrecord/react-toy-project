/*
  react snippets - 단축으로 리액트 탬플릿을 만들어 주는 extention 다운
  ( 다운받은 extention은 export default가 아래에 있어 컴포넌트명을 수정할 때 일일이 수정해야함 )

  나만의 react snippets을 만들어 사용하는 것도 가능하다.
  1. 커맨드 팔렛에 snippets 검색 
  2. configure User Snippets를 선택 후
  3. global.code-snippets 이 없다면 새 전역 코드 조각 파일 클릭 후 global.code-snippets 파일 만들어준다.
  4. 파일안에 내가 원하는 react snippets 관련 코드를 입력해준다.

  rfc 함수 선언식 일반적으로 사용 
  import React from 'react';
  
  export default function Profile() {
    return (
      <div>
        
      </div>
    );
  }

  rsi 함수 표현식 리턴없이 소괄호로 바로 값을 리턴 - 상태값 없이 바로 ui 요소를 변환할 때 사용 
  import React from 'react';
  
  export const Profile = (props) => (
        
    );

 */

import React from 'react';
import Avatar from './Avatar';

// Profile 컴포넌트는 props나 state 없이 정적으로 UI 요소를 보여주고 있다.
// 외부상태와 연결되어 있지 않은 고립된, 독립된, 재사용성이 뛰어난 컴포넌트 완성.
export default function Profile({ image, name, title, isNew }) {
  return (
    <div className="profile">
      <Avatar image={image} isNew={isNew} />
      <h1>{name}</h1>
      <p>{title}</p>
    </div>
  );
}
