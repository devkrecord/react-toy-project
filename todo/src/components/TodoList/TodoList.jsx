import React, { useState } from 'react';
import AddTodo from '../AddTodo/AddTodo';
import Todo from '../Todo/Todo';
import styles from './TodoList.module.css';

export default function TodoList({ filter }) {
  const [todos, setTodos] = useState([
    { id: '123', text: '장보기', status: 'active' },
    { id: '234', text: '공부하기', status: 'active' },
  ]);

  const handleAdd = (todo) => setTodos([...todos, todo]);
  const handleUpdate = (updated) => {
    setTodos(todos.map((item) => (item.id === updated.id ? updated : item)));
  };
  const handleDelete = (deleted) => {
    setTodos(todos.filter((item) => item.id !== deleted.id));
  };

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

// 내부의 다른 상태와 밀접하게 연관 있는 함수가 아니라면, 외부에 선언하는게 메모리 측면에서 더 낫다.
// 컴포넌트 내부에 작성하게 되면 컴포넌트가 re-render 될때마다 계속 불필요하게 재선언(재할당)되기 때문
function getFilteredItems(todos, filter) {
  if (filter === 'all') {
    return todos;
  }
  return todos.filter((todos) => todos.status === filter);
}
