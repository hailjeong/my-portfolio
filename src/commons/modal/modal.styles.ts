import styled from "@emotion/styled";
import { breakPoints } from "../styles/globals";

export const RootWrapper = styled.div<{ isModal: boolean }>`
  width: 100vw;
  color: #000;
  z-index: 1;

  display: ${(props) => (props.isModal ? "block" : "none")};
`;
export const Wrapper = styled.div`
  width: 500px;
  height: 250px;
  padding: 20px 50px;
  background-color: #f1f1f1;
  border-radius: 20px;
  position: absolute;
  top: 30%;
  left: 50%;
  transform: translate(-50%, -50%);

  @media ${breakPoints.tablet} {
    width: 400px;
  }

  @media ${breakPoints.mobile} {
    width: 300px;
  }
`;

export const TitleWrapper = styled.div`
  padding-bottom: 10px;
  border-bottom: 1px solid #000;
`;

export const Title = styled.div`
  font-size: 24px;
  font-weight: bold;
`;

export const ContentWrapper = styled.div`
  padding-top: 20px;
  padding-bottom: 80px;
  padding-left: 20px;
`;

export const Content = styled.div``;

export const ButtonWrapper = styled.div`
  padding-top: 10px;
  padding-right: 10px;
  display: flex;
  justify-content: end;
`;

export const OkButton = styled.button`
  width: 80px;
  height: 30px;
  margin-right: 10px;
  border-radius: 20px;
  cursor: pointer;

  :hover {
    transition: all 1s ease-in-out;
    background-color: #000;
    color: #fff;
  }
`;

export const CancleButton = styled.button`
  width: 80px;
  height: 30px;
  margin-left: 10px;
  border-radius: 20px;
  cursor: pointer;

  :hover {
    transition: all 1s ease-in-out;
    background-color: #000;
    color: #fff;
  }
`;
