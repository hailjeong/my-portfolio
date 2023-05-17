import { ReactNode } from "react";
import Header from "./header/header";
import styled from "@emotion/styled";
import Footer from "./footer/footer";
import { breakPoints } from "../../commons/styles/globals";

interface ILayout {
  children: ReactNode;
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

const ChildrenStyle = styled.div`
  padding-top: 100px;
  min-height: 100vh;
`;

const Layout = (props: ILayout) => {
  return (
    <Wrapper>
      <Header />
      <ChildrenStyle>{props.children}</ChildrenStyle>
      <Footer />
    </Wrapper>
  );
};

export default Layout;
