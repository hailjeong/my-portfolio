import styled from "@emotion/styled";
import GitHubIcon from "@mui/icons-material/GitHub";
import MenuBookIcon from "@mui/icons-material/MenuBook";

export const RootWrapper = styled.div`
  width: 100%;
  height: 200px;
  color: #f3f6f4;
  background-color: #bbb;
  margin-top: auto;
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const GitHub = styled(GitHubIcon)``;
export const StudyBook = styled(MenuBookIcon)``;
