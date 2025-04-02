import styled from "styled-components";

export const Container = styled.main`
    max-width: 1216px;
    font-size: 18px;
    margin: 0 auto;

    @media (max-width: ${({theme}) => theme.breakpoints.medium}px) {
        font-size: 14px;
    }
`;