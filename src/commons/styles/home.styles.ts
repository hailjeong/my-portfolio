import styled from "@emotion/styled";
import { breakPoints } from "./globals";
import LaunchIcon from "@mui/icons-material/Launch";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";

export const FirstWrapper = styled.div`
  width: 100vw;
  height: 90vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 100px;
  color: #fff;
  background-color: #000;
`;

export const TitleWrapper = styled.div`
  padding-bottom: 50px;

  @media ${breakPoints.tablet} {
    padding-bottom: 20px;
  }
`;

export const Title = styled.h1`
  font-size: 50px;
  white-space: nowrap;
  transform: translate(-50%, -50%);
  color: transparent;

  ::before {
    content: "Welcome Hail's Portfolio";
    position: absolute;
    top: 40%;
    left: 50%;
    width: 100%;
    color: #fff;
    overflow: hidden;
    border-right: 1px solid #fff;
    animation: typing 3s forwards 3 ease-in-out alternate;

    @keyframes typing {
      0% {
        width: 0%;
      }

      100% {
        width: 100%;
        border-right: 1px solid #000;
      }
    }
  }

  @media ${breakPoints.tablet} {
    font-size: 46px;
  }

  @media ${breakPoints.mobile} {
    font-size: 36px;
  }
`;
export const ImageWrapper = styled.div`
  width: 80%;
  padding-top: 30px;
  display: flex;
  justify-content: center;

  @media ${breakPoints.tablet} {
    flex-direction: column;
    align-items: center;
  }

  @media ${breakPoints.mobile} {
    flex-direction: column;
    align-items: center;
  }
`;

export const FirstImage = styled.img`
  width: 400px;
  height: 400px;
  margin-right: 50px;

  @media ${breakPoints.tablet} {
    width: 500px;
    height: 300px;
    margin-right: 0px;
  }

  @media ${breakPoints.mobile} {
    margin-right: 0;
  }
`;

export const ImageDescriptionWrapper = styled.div`
  width: 600px;
  margin-left: 50px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;

  @media ${breakPoints.tablet} {
    display: none;
  }

  @media ${breakPoints.mobile} {
    display: none;
  }
`;

export const ImageDescription = styled.p`
  padding-bottom: 10px;
  font-size: 18px;
  font-weight: bold;
`;

export const DescriptionTabletMobileWrapper = styled.div`
  display: none;

  @media ${breakPoints.tablet} {
    display: block;
    padding-top: 100px;
  }

  @media ${breakPoints.mobile} {
    display: block;
    padding-top: 50px;
  }
`;

export const IconLaunch = styled(LaunchIcon)`
  margin-right: 10px;
`;

export const MoveToAboutPage = styled.a`
  padding-bottom: 15px;
  display: block;
  font-size: 18px;
  font-weight: bold;
  color: #fff;
  border-bottom: 1px solid #dfdfdf;

  @media ${breakPoints.tablet} {
    font-size: 26px;
  }

  @media ${breakPoints.mobile} {
    width: 400px;
    font-size: 21px;
    color: #fff;
  }
`;

export const SecondWrapper = styled.div`
  width: 100vw;

  padding-top: 50px;
  display: flex;
  flex-direction: column;
  align-items: center;
  color: #fff;
  background-color: #000;
  position: relative;
`;

export const SecondImage = styled.img`
  width: 600px;

  @media ${breakPoints.tablet} {
    width: 500px;
    height: 300px;
  }

  @media ${breakPoints.mobile} {
    width: 400px;
    height: 300px;
  }
`;

export const ProjectListWrapper = styled.div`
  width: 70%;
  padding-top: 150px;
  padding-bottom: 100px;
  display: flex;
  align-items: center;

  @media ${breakPoints.mobile} {
    width: 80%;
  }
`;

export const ProjectList = styled.ul`
  width: 100%;
  display: flex;
  overflow: hidden;
`;
export const ProjectListItem = styled.li<{ activeIndex: number }>`
  width: 100%;
  display: flex;
  flex-grow: 1;
  flex-shrink: 0;
  justify-content: center;
  transition: all 1s ease-in-out;
  transform: translateX(-${({ activeIndex }) => activeIndex * 100}%);
`;

export const ProjectListItemImage = styled.img`
  width: 400px;

  @media ${breakPoints.tablet} {
    width: 300px;
    height: 300px;
  }

  @media ${breakPoints.mobile} {
    width: 300px;
    height: 200px;
  }
`;

export const NextIcon = styled(ArrowForwardIosIcon)`
  cursor: pointer;
  margin-left: 20px;
`;
export const PrevIcon = styled(ArrowBackIosNewIcon)`
  cursor: pointer;
  margin-right: 20px;
`;
