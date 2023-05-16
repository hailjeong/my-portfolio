import { ReactNode } from "react";

interface ILayout {
    children: ReactNode;
  }

const Layout = (props: ILayout) => {

    return (
        <>
        <div>123123</div>
        <div>{props.children}</div>
        </>
    )
}

export default Layout