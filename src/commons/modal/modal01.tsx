import * as S from "./modal01.styles";
import { useState } from "react";
import { Modal } from "antd";

const Modal01 = (props) => {
  return (
    <Modal
      open={props.isModal}
      onOk={props.showModal}
      onCancel={props.showModal}
    >
      <S.TitleWrapper>
        <S.Title>{props.title}</S.Title>
      </S.TitleWrapper>

      <S.ContentWrapper>
        <S.Content>{props.content}</S.Content>
      </S.ContentWrapper>
    </Modal>
  );
};

export default Modal01;
