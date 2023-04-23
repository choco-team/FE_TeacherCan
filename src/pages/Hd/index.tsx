import Header from '@Components/Header';

import Name from './Name';
import TodoItem from './TodoItem';
import * as S from './style';

const todos = [
  { id: 1, contents: '공통 컴포넌트: 리액트 컴포넌트 vs 스타일 컴포넌트' },
  { id: 2, contents: 'react-router-dom 버전' },
  { id: 3, contents: '스토리북' },
  { id: 4, contents: '가장 작은 단위 컴포넌트, CDD' },
];

const Hd = () => {
  return (
    <S.Box>
      <Header />
      <Name />
      <S.List>
        {todos.map((todo) => (
          <TodoItem key={todo.id} todo={todo.contents} />
        ))}
      </S.List>
    </S.Box>
  );
};

export default Hd;
