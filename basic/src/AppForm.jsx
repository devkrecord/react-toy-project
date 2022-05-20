import React, { useState } from 'react';

/*
  입력폼은 리액트 내부적으로 상태변화가 이루어지지 않아도 UI 상에서 변화를 확인 가능.
  이것을 Uncontrolled Components라 한다. 통제되지 않는 컴포넌트
  입력폼은 보여지는 데이터와 컴포넌트에서 가지고있는 상태 값이 매칭되도록 만들어주는 것이 중요.
*/

export default function AppForm() {
  // 상태가 연관된 데이터라면 객체로 관리하면 된다.
  const [form, setForm] = useState({ name: '', email: '' });

  const handleSubmit = (e) => {
    /*
      preventDefault를 하지않으면 Submit을 누르면 페이지가 새로고침됨
      기존페이지에 그대로 머물러야 하기 때문에 아래 코드 추가
    */
    e.preventDefault();
    console.log('form', form);
  };
  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };
  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="name">이름:</label>
      <input
        type="text"
        id="name"
        name="name"
        value={form.name}
        onChange={handleChange}
      />
      <label htmlFor="email">이메일:</label>
      <input
        type="email"
        id="email"
        name="email"
        value={form.email}
        onChange={handleChange}
      />
      <button>Submit</button>
    </form>
  );
}
