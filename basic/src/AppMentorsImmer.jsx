import React, { useState } from "react";
import { useImmer } from "use-immer";

// Immer를 사용하면 중첩되고 중첩된 복잡한 객체를 직관적으로 상태관리 가능
export default function AppMentorsImmer() {
  const [person, updatePerson] = useImmer(initialPerson);

  const handelUpdate = () => {
    const prev = prompt(`누구의 이름을 바꾸고 싶은가요?`);
    const current = prompt(`이름을 무엇으로 바꾸고 싶은가요?`);
    /*
        객체 자체를 업데이트하는 것처럼 보이나
        Immer 내부적으로 새로운 person 객체를 만들어 우리가 업데이트 하는 부분만 변경해준다
    */
    updatePerson((person) => {
      const mentor = person.mentors.find((m) => m.name === prev);
      mentor.name = current;
    });
  };
  const handleAdd = () => {
    const name = prompt(`멘토의 이름은?`);
    const title = prompt(`멘토의 직함은?`);
    updatePerson((person) => {
      person.mentors.push({ name, title });
    });
  };
  const handleDel = () => {
    const name = prompt(`누구를 삭제하고 싶은가요?`);
    updatePerson((person) => {
      const index = person.mentors.findIndex((m) => m.name === name);
      if (index < 0) return; // 존재하지 않는 멘토 이름 입력시 return
      person.mentors.splice(index, 1);
    });
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
