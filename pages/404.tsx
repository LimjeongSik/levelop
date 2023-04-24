import styled from "styled-components";

export default function CustomError() {
    return (
        <Block>
            <h1>404 - 페이지가 존재하지 않습니다.</h1>
        </Block>
    );
}

const Block = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: calc(100vh - 60px);
    h1 {
        font-size: 30px;
        font-weight: 900;
        color: #000;
    }
`;
