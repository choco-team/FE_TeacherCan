import { MouseEvent, useState } from 'react';
import styled from 'styled-components';

import Button from '@Components/Button';
import Input from '@Components/Input';

function RegisterSchoolButton() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const onClickBackdrop = () => {
    setIsModalOpen(false);
  };

  const preventCloseModal = (event: MouseEvent) => {
    event.stopPropagation();
  };

  return (
    <>
      <Button fontSize="2rem" handleClick={() => setIsModalOpen(true)}>
        학교 등록하기
      </Button>
      {isModalOpen && (
        <ModalLayout onClick={onClickBackdrop}>
          <div onClick={preventCloseModal}>
            {/* 이 곳에 children이 온다. */}
            <SearchSchoolLayout>
              <SearchSchoolForm>
                <Input size="sm" placeholder="학교명을 검색하세요." />
                <Button type="submit">검색</Button>
              </SearchSchoolForm>
              <SearchResult>
                <div>
                  돋보기로 무언가를 찾고있는 티처캔 캐릭터를 svg로 만들어 주세요
                  :)
                </div>
              </SearchResult>
            </SearchSchoolLayout>
          </div>
        </ModalLayout>
      )}
    </>
  );
}

export default RegisterSchoolButton;

const ModalLayout = styled.div`
  position: fixed;
  min-width: 100vw;
  min-height: 100vh;
  top: 0;
  left: 0;

  display: grid;
  align-items: center;
  justify-items: center;

  background-color: ${(props) => props.theme.modalBackground};

  z-index: 5;
`;

const SearchSchoolLayout = styled.div`
  display: grid;
  row-gap: 20px;

  min-width: 360px;
  max-width: 360px;

  padding: 20px;
  border-radius: 8px;

  background-color: ${(props) => props.theme.background.gray};
`;

const SearchSchoolForm = styled.form`
  display: grid;
  grid-template-columns: 1fr auto;
`;

const SearchResult = styled.div`
  min-height: 240px;
  overflow: auto;
`;
