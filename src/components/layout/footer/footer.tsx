import * as S from "./footer.styles";

const Footer = () => {
  return (
    <S.RootWrapper>
      <S.Wrapper>
        <S.InfoWrapper>
          <S.Author>Author: 정하일</S.Author>
          <S.Tel>Tel: 010-5687-0214</S.Tel>
          <S.Email>Email: hail_jeong@naver.com</S.Email>
        </S.InfoWrapper>

        <S.LinkWrapper>
          <S.MoveToContactWrapper>
            <S.MoveToContact href="/contact">How To contact</S.MoveToContact>
          </S.MoveToContactWrapper>
          <S.A href="https://github.com/hailjeong" target="_blank">
            <S.GitHub />
            GitHub
          </S.A>
          <S.A href="https://github.com/hailjeong/TIL" target="_blank">
            <S.StudyBook />
            TIL(Today I Learn)
          </S.A>
        </S.LinkWrapper>
      </S.Wrapper>
    </S.RootWrapper>
  );
};

export default Footer;
