import styled from "@emotion/styled";
import { breakPoints } from "./globals";

export const Wrapper = styled.div`
    background: red;

    @media ${breakPoints.tablet} {
        background: blue;
    }
`