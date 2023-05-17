import { useState } from "react";
import * as S from "./header.styles";

const Header = () => {
  const [isActive, setIsActive] = useState(false);

  const onClickIcon = () => {
    setIsActive(!isActive);
  };

  return (
    <S.Wrapper>
      <S.Logo src="/logo.svg" alt="" />

      <S.ListWrapper isActive={isActive}>
        <S.UnorderedList>
          <S.List>
            <S.A href="/about">About Me</S.A>
          </S.List>
          <S.List>
            <S.A href="/project">Project</S.A>
          </S.List>
          <S.List>
            <S.A href="/contect">Contect</S.A>
          </S.List>
        </S.UnorderedList>
      </S.ListWrapper>

      <S.IconMenu onClick={onClickIcon} />
    </S.Wrapper>
  );
};

export default Header;