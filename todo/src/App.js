import './App.css';
import { useState } from 'react';
import TodoList from './components/TodoList/TodoList';
import Header from './components/Header/Header';

// 리액트는 단방향 데이터 흐름이므로 공통된 데이터는 가장 근접한 부모 컴포넌트에 배치
const filters = ['all', 'active', 'completed'];
function App() {
  const [filter, setFilter] = useState(filters[0]);
  return (
    <div>
      <Header filters={filters} filter={filter} onFilterChange={setFilter} />
      <TodoList filter={filter} />
    </div>
  );
}

export default App;
