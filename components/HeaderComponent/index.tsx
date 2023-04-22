import styled from "styled-components";
import Image from "next/image";
import Link from "next/link";
import LimitScreen from "../layout/LimitScreen";

export default function Header() {
    return (
        <>
            <Block>
                <LimitScreen inPadding={true}>
                    <HeaderContent>
                        <Link href="/">
                            <Image
                                src={"/images/icon/ic__logo.png"}
                                width={40}
                                height={40}
                                alt="Levelop"
                                priority
                            />
                            <span>Levelop</span>
                        </Link>
                    </HeaderContent>
                </LimitScreen>
            </Block>
            <BlockPadding />
        </>
    );
}

const Block = styled.header`
    position: fixed;
    left: 0;
    top: 0;
    width: 100%;
    height: 60px;
    background: #fff;
    z-index: 9999;
    border-bottom: 1px solid #ededed;
`;
const HeaderContent = styled.div`
    display: flex;
    align-items: center;
    height: inherit;
    a {
        display: inline-flex;
        align-items: center;
        gap: 10px;
        text-decoration: none;
        padding: 0 15px;
        span {
            font-size: 20px;
            font-weight: 900;
            color: #000;
        }
    }
`;
const BlockPadding = styled.div`
    padding-bottom: 60px;
`;
