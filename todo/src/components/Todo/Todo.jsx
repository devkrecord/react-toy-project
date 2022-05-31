import React from 'react';
import { FaTrashAlt } from 'react-icons/fa'; // react-icons/접두사 <- 'Fa'TrashAlt
import styles from './Todo.module.css';

// $ yarn add react-icons 라이브러리 설치
export default function Todo({ todo, onUpdate, onDelete }) {
  const { id, text, status } = todo;
  const handleChange = (e) => {
    const status = e.target.checked ? 'completed' : 'active';
    onUpdate({ ...todo, status });
  };
  const handleDelete = () => {
    onDelete(todo);
  };
  return (
    <li className={styles.todo}>
      <input
        className={styles.checkbox}
        type="checkbox"
        id={id}
        checked={status === 'completed'}
        onChange={handleChange}
      />
      {/*  htmlFor에 input의 아이디나 네임을 적어 input과 연결 할 수 있다. */}
      <label htmlFor={id} className={styles.text}>
        {text}
      </label>
      <span className={styles.icon}>
        <button onClick={handleDelete} className={styles.button}>
          <FaTrashAlt />
        </button>
      </span>
    </li>
  );
}
