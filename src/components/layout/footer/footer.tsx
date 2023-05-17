import * as S from "./footer.styles";

const Footer = () => {
  return (
    <S.RootWrapper>
      <S.Wrapper>
        <div>Author: 정하일</div>
        <div>Tel: 010-5687-0214</div>

        <a href="https://github.com/hailjeong" target="_blank">
          <S.GitHub />
        </a>
        <a href="https://github.com/hailjeong/TIL">
          <S.StudyBook />
        </a>
      </S.Wrapper>
    </S.RootWrapper>
  );
};

export default Footer;
