import * as S from "./modal.styles";

const Modal = (props) => {
  return (
    <S.RootWrapper isModal={props.isModal}>
      <S.Wrapper>
        <S.TitleWrapper>
          <S.Title>{props.title}</S.Title>
        </S.TitleWrapper>

        <S.ContentWrapper>
          <S.Content>{props.content}</S.Content>
        </S.ContentWrapper>

        <S.ButtonWrapper>
          <S.OkButton onClick={props.onClickOkButton}>확인</S.OkButton>
          <S.CancleButton onClick={props.onClickCancleButton}>
            취소
          </S.CancleButton>
        </S.ButtonWrapper>
      </S.Wrapper>
    </S.RootWrapper>
  );
};

export default Modal;
