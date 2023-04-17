import styled, { css } from "styled-components";
// Props Interface
import { ChildrenProps } from "@/interface";
interface Props extends ChildrenProps {
    inPadding?: boolean | undefined;
}

export default function LimitScreen({ children, inPadding }: Props) {
    return <Block padding={inPadding}>{children}</Block>;
}

const Block = styled.div<{ padding: boolean | undefined }>`
    width: 100%;
    max-width: 1280px;
    height: inherit;
    margin: 0 auto;
    padding: 0 15px;
    ${(props) =>
        props.padding &&
        css`
            padding: 0;
        `}
`;
