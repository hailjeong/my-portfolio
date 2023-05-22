import Head from "next/head";
import * as S from "../src/commons/styles/home.styles";
import useScrollFadeIn from "../src/commons/hooks/useScrollFadeIn";

const Home = () => {
  return (
    <>
      <Head>
        <title>YILI_LU</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <S.FirstWrapper>
        <S.TitleWrapper>
          <S.Title>Welcome Hail&apos;s Portfolio</S.Title>
        </S.TitleWrapper>

        <S.ImageWrapper>
          <S.Image
            src="/landingPage/landing01.png"
            {...useScrollFadeIn("right", 1.5, 0)}
          />
          <S.ImageDescriptionWrapper>
            <S.ImageDescription {...useScrollFadeIn("left", 1.5, 4)}>
              <S.MoveToAboutPage href="/about">
                <S.IconLaunch />
                프론트엔드 개발자를 선택한 이유는 ?
              </S.MoveToAboutPage>
            </S.ImageDescription>
            <S.ImageDescription {...useScrollFadeIn("left", 1.5, 1)}>
              1. 웹 사이트를 통해 제 아이디어가 현실로 탄생해나가는 과정을
              지켜보는 것은 저에게 큰 재미입니다. 그 과정에서 저는 끊임없는
              창의성과 열정으로 일하며 새로운 아이디어를 발전시키고 구현해
              나갑니다.
            </S.ImageDescription>
            <S.ImageDescription {...useScrollFadeIn("left", 1.5, 2)}>
              2. 아이디어는 구현되지 않으면 그 빛을 발휘하지 못합니다. 저는 항상
              새로운 것을 탐구하고 배우며, 이를 기반으로 아이디어를 현실로
              구현하는 프론트엔드 개발자로 성장하고자 합니다.
            </S.ImageDescription>
            <S.ImageDescription {...useScrollFadeIn("left", 1.5, 3)}>
              3. &quot;不怕慢，只怕站&quot;이라는 중국 명언은 정말 멋진 명언이자
              제가 제일 좋아하는 말입니다. 이 말은 느린 것을 두려워하지 말고
              멈추는 것을 두려워해야 한다는 의미를 담고 있습니다.
            </S.ImageDescription>
          </S.ImageDescriptionWrapper>

          <S.DescriptionTabletMobileWrapper>
            {/* 테블렛, 모바일 UI */}
            <S.MoveToAboutPage href="/about">
              <S.IconLaunch />
              프론트엔드 개발자를 선택한 이유는 ?
            </S.MoveToAboutPage>
          </S.DescriptionTabletMobileWrapper>
        </S.ImageWrapper>
      </S.FirstWrapper>

      <S.SecondWrapper></S.SecondWrapper>
    </>
  );
};

export default Home;
