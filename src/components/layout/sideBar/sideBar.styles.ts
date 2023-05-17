import styled from "@emotion/styled";
import { breakPoints } from "../../../commons/styles/globals";
import MenuIcon from "@mui/icons-material/Menu";

export const Wrapper = styled.div`
  display: none;
  position: fixed;
  top: 100px;
  left: 0;

  :hover {
    transition: all 1s ease-in-out;
    transform: translate(0, 0);
  }

  @media ${breakPoints.tablet} {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  @media ${breakPoints.mobile} {
    display: block;
  }
`;

export const Logo = styled.img``;

export const IconMenu = styled(MenuIcon)`
  font-size: 30px;
  color: #fff;
  cursor: pointer;
`;

export const ListWrapper = styled.div`
  padding-right: 30px;
  width: 500px;

  @media ${breakPoints.tablet} {
    display: none;
  }
`;
export const UnorderedList = styled.ul`
  padding-left: 0px;
  display: flex;
  justify-content: space-around;
`;
export const List = styled.li``;
export const A = styled.a`
  color: #000;
`;
