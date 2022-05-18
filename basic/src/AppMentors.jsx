import React, { useState } from "react";

export default function AppMentors() {
  // 원칙적으로 리액트 상태값은 불변성을 유지해야한다.
  // 만약 변경해야한다면 새로운 객체, 새로운 값, 새로운 배열로 만들어줘야 한다.
  const [person, setPerson] = useState({
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
  });

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
      <button
        onClick={() => {
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

          setPerson((person) => ({
            // 새로운 객체 생성
            ...person,
            mentors: person.mentors.map((mentor) => {
              // map을 이용하여 새로운 배열 생성
              if (mentor.name === prev) {
                return { ...mentor, name: current };
              }
              return mentor;
            }),
          }));
        }}
      >
        멘토 이름 바꾸기
      </button>
    </div>
  );
}
