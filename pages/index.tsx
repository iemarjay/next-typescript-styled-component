import {LayoutDefault} from "../layout/Default";
import styled from "styled-components";

const H1 = styled.h1`color: ${({theme}) => theme.palette.textDark}`

export default function Home() {

    return (
        <LayoutDefault>
            <H1>Title</H1>
            <p>this is a paragraph</p>
        </LayoutDefault>
    )
}
