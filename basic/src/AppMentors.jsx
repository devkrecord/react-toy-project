import React, { useReducer, useState } from "react";
import personReducer from "./reducer/person-reducer";

export default function AppMentors() {
  // 원칙적으로 리액트 상태값은 불변성을 유지해야한다.
  // 만약 변경해야한다면 새로운 객체, 새로운 값, 새로운 배열로 만들어줘야 한다.
  // const [person, setPerson] = useState(initialPerson);

  /*
  useReducer는 State(상태)를 관리하고 업데이트 하는 useState를 대체할 수 있는 Hook.

  *** 
  useReducer는 컴포넌트의 상태 업데이트 로직을 외부로 분리시킬 수 있다.

  useReducer를 사용하면 useState 의 setState 함수를 여러번 사용하지 않아도 되고,
  리듀서로 로직을 분리했으니 다른곳에서도 쉽게 재사용을 할 수 있다
  ***

  useReducer 기본구조
  const [state, dispatch] = useReducer(reducer, initialState, init);

  state: 컴포넌트에서 사용할 State(상태).
  dispatch: reducer 함수를 실행시키며, 컴포넌트 내에서 state의 업데이트를 일으키기 위해서 사용하는 함수.
  reducer: 컴포넌트 외부에서 state를 업데이트하는 로직을 담당하는 함수. 현재의 state와 action 객체를 인자로 받아서, 기존의 state를 대체(replace)할 새로운 State를 반환(return)하는 함수. 
  initialState: 초기 State
  init: 초기 함수, 초기 state를 조금 지연해서 생성하기 위해 사용
  action: dispatch의 인자가 되며 업데이트 정보를 가지고 있다. reducer 함수의 두번째 인자인 action에 할당


  */
  const [person, dispatch] = useReducer(personReducer, initialPerson);

  const handelUpdate = () => {
    const prev = prompt(`누구의 이름을 바꾸고 싶은가요?`);
    const current = prompt(`이름을 무엇으로 바꾸고 싶은가요?`);
    /*
      아래 코드로 실행시 UI에서 값이 변화하지 X
      - 리액트는 객체 참조값(=레퍼런스값)이 변화하지 않으면 변화 감지x (불변성)
      - 아래 코드는 참조값이 동일하기 때문에 업데이트 되지 않는다.
      - 업데이트를 새로운 객체, 새로운 값, 새로운 배열로 만들어줘야 한다.

      person.mentors[0].name = current;
      setPerson(person); 
    */

    // setPerson((person) => ({
    //   // 새로운 객체 생성
    //   ...person,
    //   mentors: person.mentors.map((mentor) => {
    //     // map을 이용하여 새로운 배열 생성
    //     if (mentor.name === prev) {
    //       return { ...mentor, name: current };
    //     }
    //     return mentor;
    //   }),
    // }));

    dispatch({ type: "updated", prev, current });
  };
  const handleAdd = () => {
    const name = prompt(`멘토의 이름은?`);
    const title = prompt(`멘토의 직함은?`);
    // setPerson((person) => ({
    //   ...person,
    //   mentors: [...person.mentors, { name, title }], // 앞에 추가 하고 싶으면  [{ name, title }, ...person.mentors]
    // }));
    dispatch({ type: "added", name, title });
  };
  const handleDel = () => {
    const name = prompt(`누구를 삭제하고 싶은가요?`);
    // setPerson((person) => ({
    //   ...person,
    //   mentors: person.mentors.filter((mentor) => mentor.name !== name),
    // }));
    dispatch({ type: "deleted", name });
  };

  return (
    <div>
      <h1>
        {person.name}은 {person.title}
      </h1>
      <p>{person.name}의 멘토는:</p>
      <ul>
        {/* 배열의 index를 key로 쓰는것은 비추, 따로 id를 사용해주는게 더 좋다 */}
        {person.mentors.map((mentor, index) => (
          <li key={index}>
            {mentor.name} {mentor.title}
          </li>
        ))}
      </ul>
      <button onClick={handelUpdate}>멘토 이름 바꾸기</button>
      <button onClick={handleAdd}>멘토 추가하기</button>
      <button onClick={handleDel}>멘토 삭제하기</button>
    </div>
  );
}

const initialPerson = {
  name: "은청",
  title: "개발자",
  mentors: [
    {
      name: "밥",
      title: "시니어개발자",
    },
    {
      name: "제임스",
      title: "시니어개발자",
    },
  ],
};
