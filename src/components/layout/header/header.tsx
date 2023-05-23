import { useState, useRef, useEffect, useCallback } from "react";
import * as S from "./header.styles";

const Header = () => {
  const [isActive, setIsActive] = useState(false);
  const [showHeader, setShowHeader] = useState(true);

  useEffect(() => {
    let lastScrollY = window.pageYOffset;

    const onScroll = () => {
      const scrollY = window.pageYOffset;

      setShowHeader(scrollY > lastScrollY ? false : true);
      lastScrollY = scrollY > 0 ? scrollY : 0;
    };

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, [showHeader]);

  const onClickIcon = () => {
    setIsActive(!isActive);
  };

  return (
    <S.Wrapper showHeader={showHeader}>
      <S.A href="/">
        <S.Logo src="/logo.svg" alt="" />
      </S.A>

      <S.ListWrapper isActive={isActive}>
        <S.UnorderedList>
          <S.List>
            <S.A href="/about">About Me</S.A>
          </S.List>
          <S.List>
            <S.A href="/project">Project</S.A>
          </S.List>
          <S.List>
            <S.A href="/contact">Contact</S.A>
          </S.List>
        </S.UnorderedList>
      </S.ListWrapper>

      <S.IconMenu onClick={onClickIcon} />
    </S.Wrapper>
  );
};

export default Header;
