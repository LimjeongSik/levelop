import { GlobalStyle } from "@/styles/GlobalStyle";
import styled from "styled-components";

interface Props {
    children: React.ReactNode;
}

export default function Layout({ children }: Props) {
    return (
        <div>
            <GlobalStyle />
            <Block>{children}</Block>
        </div>
    );
}

const Block = styled.div``;
