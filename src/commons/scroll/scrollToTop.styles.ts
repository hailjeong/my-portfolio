import styled from "@emotion/styled";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";

export const RootWrapper = styled.div`
  display: none;
  position: fixed;
  bottom: 20px;
  right: 5%;
  color: #fff;
  z-index: 2;
`;
export const Wrapper = styled.div`
  border: 3px solid #fff;
  border-radius: 50%;
  background-color: #000;
  cursor: pointer;
`;

export const IconArrowUpward = styled(ArrowUpwardIcon)`
  font-size: 50px;
`;
