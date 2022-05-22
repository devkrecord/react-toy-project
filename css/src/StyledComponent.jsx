import React from 'react';
import styled, { css } from 'styled-components';

/*
    CSS in JS
    자바스크립트 파일 안에서 일반 CSS 문법처럼 사용 & 자바스크립트 문법 사용 가능한 라이브러리
    styled-components (스타일이 포함된 컴포넌트)

    styled-components 는 react-create-app에 포함 x 따로 설치해준다
    $ yarn add styled-components
*/

const Container = styled.div`
  display: flex;
`;

const Button = styled.button`
  background: transparent;
  border-radius: 3px;
  border: 2px solid #3c5b69;
  color: #b9eaff;
  margin: 0 1em;
  padding: 0.25em 1em;
  ${(props) =>
    props.primary &&
    css`
      background: #009cd5;
      color: white;
    `};
`;

export default function StyledComponent() {
  return (
    <Container>
      <Button>Normal Button</Button>
      <Button primary>Primary Button</Button>
    </Container>
  );
}
