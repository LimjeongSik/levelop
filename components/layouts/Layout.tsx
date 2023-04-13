import { GlobalStyle } from "@/styles/GlobalStyle";
import styled from "styled-components";
// Props Interface
import { ChildrenProps } from "../../interface/index";

export default function Layout({ children }: ChildrenProps) {
    return (
        <>
            <GlobalStyle />
            <Block>{children}</Block>
        </>
    );
}

const Block = styled.div``;
