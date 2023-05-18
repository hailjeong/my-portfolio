import styled from "@emotion/styled";
import GitHubIcon from "@mui/icons-material/GitHub";
import MenuBookIcon from "@mui/icons-material/MenuBook";
import { breakPoints } from "../../../commons/styles/globals";

export const RootWrapper = styled.div`
  width: 100%;
  height: 200px;
  color: #000;
  background-color: #bbb;
  margin-top: auto;
`;

export const Wrapper = styled.div`
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const InfoWrapper = styled.ul`
  height: 130px;
  font-size: 16px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding-right: 100px;
  border-right: 2px solid #999;

  @media ${breakPoints.tablet} {
    padding-left: 20px;
    padding-right: 20px;
  }

  @media ${breakPoints.mobile} {
    padding-left: 20px;
    padding-right: 20px;
  }
`;
export const Author = styled.li``;
export const Tel = styled.li``;
export const Email = styled.li``;

export const LinkWrapper = styled.section`
  height: 130px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding-left: 20%;

  @media ${breakPoints.tablet} {
    padding-left: 20%;
  }

  @media ${breakPoints.mobile} {
    padding-left: 9%;
  }
`;

export const A = styled.a`
  color: #000;
  margin-right: 30px;
`;

export const GitHub = styled(GitHubIcon)`
  font-size: 35px;

  @media ${breakPoints.mobile} {
    font-size: 30px;
  }
`;
export const StudyBook = styled(MenuBookIcon)`
  font-size: 35px;

  @media ${breakPoints.mobile} {
    font-size: 30px;
  }
`;

export const MoveToContactWrapper = styled.div`
  padding-left: 5px;
`;

export const MoveToContact = styled.a`
  color: #000;
  padding-bottom: 5px;
  border-bottom: 1px solid transparent;
  transition: all 0.5s ease-in-out;

  :hover {
    border-bottom: 1px solid #000;
  }

  ::before {
    content: "->";
    margin-right: 10px;
  }

  @media ${breakPoints.mobile} {
    border-bottom: 1px solid #000;
  }
`;
