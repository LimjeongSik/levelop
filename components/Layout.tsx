import { GlobalStyle } from "@/styles/GlobalStyle";
import styled from "styled-components";

interface Props {
    children: React.ReactNode;
}

export default function Layout({ children }: Props) {
    return (
        <>
            <GlobalStyle />
            <Block>{children}</Block>
        </>
    );
}

const Block = styled.div``;
