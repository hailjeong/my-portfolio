import * as S from "./scrollToTop.styles";
import { useState, useRef, useEffect } from "react";

const ScrollToTop = () => {
  const [scrollY, setScrollY] = useState(0);
  const scrollRef = useRef(null);

  const showIcon = () => {
    if (window.scrollY === 0) {
      scrollRef.current.style.display = "none";
    } else {
      scrollRef.current.style.display = "block";
    }
  };

  const onClickIcon = () => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  };

  useEffect(() => {
    window.addEventListener("scroll", showIcon);
    return () => {
      window.removeEventListener("scroll", showIcon);
    };
  }, [scrollY]);

  return (
    <S.RootWrapper ref={scrollRef}>
      <S.Wrapper onClick={onClickIcon}>
        <S.IconArrowUpward />
      </S.Wrapper>
    </S.RootWrapper>
  );
};

export default ScrollToTop;
