import React, { useEffect, useState } from 'react';
import AddTodo from '../AddTodo/AddTodo';
import Todo from '../Todo/Todo';
import styles from './TodoList.module.css';

export default function TodoList({ filter }) {
  /*
  const [todos, setTodos] = useState(readTodosFromLocalStorage());
  
  랜더링 될 때마다 useState 의 초기값 함수가 계속 호출된다.
  useState 내부적으로 저장된 값이 있다면 UI 상에서 변화는 일어나지 않겠지만 여전히 계속 함수는 호출된다.
  만약 함수에서 복잡한 연산, 긴 배열 리턴, 파일 읽기, 네트워크 상에서 데이터 읽어오기 등 
  무거운 작업을 한다면 이는 성능에 좋지 않다.

  
  불필요한 함수 호출을 방지하기 위해
  아래처럼 콜백함수를 이용하면 초기값이 필요한 경우 한번만 함수를 호출할 수 있다. (마운트 시)
  const [todos, setTodos] = useState(() => readTodosFromLocalStorage());


  */

  /*
    const [todos, setTodos] = useState(() => readTodosFromLocalStorage());
    위 코드는 아래와 같이 축약 가능
    const [todos, setTodos] = useState(readTodosFromLocalStorage);

    인자와 호출하는 내용이 동일하다면 함수의 이름(참조값)만 전달해도 똑같다.
    useState(초기화하는함수) // 함수의 레퍼런스만 전달
    useState(()=> 초기화하는함수()) // 위와 동일함, 단, 콜백함수를 만든다 (단점을 꼽자면, 불필요한 함수가 만들어 진다는 단점이 있음)
  */
  const [todos, setTodos] = useState(() => readTodosFromLocalStorage());

  const handleAdd = (todo) => setTodos([...todos, todo]);
  const handleUpdate = (updated) => {
    setTodos(todos.map((item) => (item.id === updated.id ? updated : item)));
  };
  const handleDelete = (deleted) => {
    setTodos(todos.filter((item) => item.id !== deleted.id));
  };

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  const filtered = getFilteredItems(todos, filter);

  return (
    <section className={styles.container}>
      <ul className={styles.list}>
        {filtered.map((item) => (
          <Todo
            key={item.id}
            todo={item}
            onUpdate={handleUpdate}
            onDelete={handleDelete}
          />
        ))}
      </ul>
      <AddTodo onAdd={handleAdd} />
    </section>
  );
}

function readTodosFromLocalStorage() {
  console.log('readTodosFromLocalStorage');
  const todos = localStorage.getItem('todos');
  return todos ? JSON.parse(todos) : [];
}

// 내부의 다른 상태와 밀접하게 연관 있는 함수가 아니라면, 외부에 선언하는게 메모리 측면에서 더 낫다.
// 컴포넌트 내부에 작성하게 되면 컴포넌트가 re-render 될때마다 계속 불필요하게 재선언(재할당)되기 때문
function getFilteredItems(todos, filter) {
  if (filter === 'all') {
    return todos;
  }
  return todos.filter((todos) => todos.status === filter);
}
