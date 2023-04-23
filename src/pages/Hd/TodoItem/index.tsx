import * as GlobalStyle from '@Styles/common';

import * as S from './style';

type TodoType = {
  todo: string;
};

function TodoItem({ todo }: TodoType) {
  return (
    <S.TodoLayout>
      <S.TodoItem>{todo}</S.TodoItem>
      <GlobalStyle.Button>완료</GlobalStyle.Button>
    </S.TodoLayout>
  );
}

export default TodoItem;
