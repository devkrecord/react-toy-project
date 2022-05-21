import React, { memo, useCallback, useMemo, useReducer } from 'react';
import personReducer from './reducer/person-reducer';

/*
    처음부터 useCallback, useMemo를 사용하여 코드를 복잡하게 만들기보다
    어플리케이션을 먼저 개발하고 정말 무거운 일을 담당하거나 컴포넌트 트리가 복잡한 경우
    성능을 측정하고 성능이 정말 문제되는 경우 성능 개선

    1. React.memo: 단순 UI 컴포넌트의 리렌더링 방지 (props가 들어가는 순간 리렌더링 된다)
    2. useMemo: props로 전달받은 함수를 실행해서, 그 결과값을 보존, 함수의 연산량이 많을 때 그 결과값 재사용 (deps=의존인자가 하나라도 변하면 함수를 다시 실행해서 그 결과값을 보존)
    3. useCallback: props로 전달받은 함수를 보존, 함수 리렌더링 방지 (deps가 하나라도 변하면 그에 맞는 새로운 함수를 리턴)

*/

export default function AppMentorsButton() {
  const [person, dispatch] = useReducer(personReducer, initialPerson);

  const handleUpdate = useCallback(() => {
    const prev = prompt(`누구의 이름을 바꾸고 싶은가요?`);
    const current = prompt(`이름을 무엇으로 바꾸고 싶은가요?`);
    dispatch({ type: 'updated', prev, current });
  }, []);

  const handleAdd = useCallback(() => {
    const name = prompt(`멘토의 이름은?`);
    const title = prompt(`멘토의 직함은?`);
    dispatch({ type: 'added', name, title });
  }, []);

  const handleDelete = useCallback(() => {
    const name = prompt(`누구를 삭제하고 싶은가요?`);
    dispatch({ type: 'deleted', name });
  }, []);

  return (
    <div>
      <h1>
        {person.name}는 {person.title}
      </h1>
      <p>{person.name}의 멘토는:</p>
      <ul>
        {person.mentors.map((mentor, index) => (
          <li key={index}>
            {mentor.name} ({mentor.title})
          </li>
        ))}
      </ul>
      <Button text="멘토 이름 바꾸기" onClick={handleUpdate} />
      <Button text="삭제하기" onClick={handleDelete} />
      <Button text="멘토 추가하기" onClick={handleAdd} />
    </div>
  );
}

// React.memo를 사용하여 값이 전달될 때 props 객체가 새로 생성되어도 실제 전달되는 props 값이 같다면 랜더링 방지
// onClick은 useCallback을 통해 함수 리렌더링 방지
const Button = memo(({ text, onClick }) => {
  console.log('Button', text, 're-rendering 😜');
  // 연산량이 많은 calculateSomething 함수는 useMemo를 사용하여 결과값 재사용
  const result = useMemo(() => calculateSomething(), []);
  return (
    <button
      onClick={onClick}
      style={{
        backgroundColor: 'black',
        color: 'white',
        borderRadius: '20px',
        margin: '0.4rem',
      }}
    >
      {`${text} ${result}`}
    </button>
  );
});

function calculateSomething() {
  for (let i = 0; i < 10000; i++) {
    console.log('😆');
  }
  return 10;
}

const initialPerson = {
  name: '엘리',
  title: '개발자',
  mentors: [
    {
      name: '밥',
      title: '시니어개발자',
    },
    {
      name: '제임스',
      title: '시니어개발자',
    },
  ],
};
