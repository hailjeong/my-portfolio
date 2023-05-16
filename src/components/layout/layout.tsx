import { ReactNode } from "react";
import Header from "./header/header";
import styled from "@emotion/styled";
import Footer from "./footer/footer";

interface ILayout {
    children: ReactNode;
  }

  const ChildrenStyle = styled.div`
    padding-top: 100px;
  `

const Layout = (props: ILayout) => {

    return (
        <>
        <Header />
        <ChildrenStyle>
            {props.children}
        </ChildrenStyle>
        <Footer />
        </>
    )
}

export default Layout