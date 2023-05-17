import styled from "@emotion/styled";
import { breakPoints } from "../../../commons/styles/globals";
import MenuIcon from "@mui/icons-material/Menu";

interface ITextProps {
  isActive: boolean;
}
export const Wrapper = styled.div`
  width: 100%;
  height: 100px;
  padding-top: 20px;
  background-color: #dfdfdf;
  position: fixed;
  top: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Logo = styled.img`
  padding-left: 100px;

  @media ${breakPoints.mobile} {
    padding-left: 30px;
  }
`;

export const ListWrapper = styled.div`
  padding-right: 30px;
  width: 500px;

  @media ${breakPoints.tablet} {
    display: ${(props: ITextProps) => (props.isActive ? "block" : "none")};
    width: 100%;
    height: 100px;
    border-top: 1px solid #090909;
    background-color: ${(props: ITextProps) =>
      props.isActive ? "#090909" : "red"};

    position: ${(props: ITextProps) =>
      props.isActive ? "absolute" : "static"};
    top: ${(props: ITextProps) => (props.isActive ? "80px" : "0")};
  }

  @media ${breakPoints.mobile} {
    display: ${(props: ITextProps) => (props.isActive ? "block" : "none")};
    width: 100%;
    height: 100px;
    border-top: 1px solid #090909;
    background-color: ${(props: ITextProps) =>
      props.isActive ? "#090909" : "red"};

    position: ${(props: ITextProps) =>
      props.isActive ? "absolute" : "static"};
    top: ${(props: ITextProps) => (props.isActive ? "80px" : "0")};
  }
`;
export const UnorderedList = styled.ul`
  padding-left: 0px;
  display: flex;
  justify-content: space-around;

  @media ${breakPoints.tablet} {
    height: 100%;
    align-items: center;
  }

  @media ${breakPoints.mobile} {
    height: 100%;
    align-items: center;
  }
`;
export const List = styled.li`
  padding-bottom: 10px;
  cursor: pointer;
  border-bottom: 1px solid transparent;
  transition: all 0.5s ease-in-out;

  :hover {
    border-bottom: 1px solid #000;
  }

  @media ${breakPoints.tablet} {
    :hover {
      border-bottom: 1px solid #fff;
    }
  }

  @media ${breakPoints.mobile} {
    :hover {
      border-bottom: 1px solid #fff;
    }
  }
`;

export const A = styled.a`
  color: #000;

  @media ${breakPoints.tablet} {
    color: #fff;
  }

  @media ${breakPoints.mobile} {
    color: #fff;
  }
`;

export const IconMenu = styled(MenuIcon)`
  margin-right: 80px;
  font-size: 36px;
  display: none;
  cursor: pointer;

  @media ${breakPoints.tablet} {
    display: block;
  }

  @media ${breakPoints.mobile} {
    display: block;
    margin-right: 30px;
  }
`;
