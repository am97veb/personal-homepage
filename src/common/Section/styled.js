import styled from "styled-components";

export const StyledSection = styled.section`
    max-width: 1216px;
    background-color: ${({ theme }) => theme.colors.sectionBackground};
    transition: background-color 0.5s;
    margin: 0px 20px 72px;
    padding: 32px;
    box-shadow: 0px -2px 50px 0px ${({ theme }) => theme.colors.sectionShadowTop},
                0px 16px 58px 0px ${({ theme }) => theme.colors.sectionShadowBottom};
                
    @media (max-width: ${({theme}) => theme.breakpoints.medium}px) {
        padding: 16px;
        margin: 0px 14px 50px;
    }
`;

export const Header = styled.h2`
    display: grid;
    grid-template-columns: auto 1fr;
    align-items: center;
    gap: 16px;
    padding-bottom: 13px;
    color: ${({ theme }) => theme.colors.header};
    border-bottom: 1px solid ${({ theme }) => theme.colors.headerBorder};
    transition: color 0.5s;
    margin:0;
    font-size: 30px;
    font-weight: 900;

    @media (max-width: ${({theme}) => theme.breakpoints.medium}px) {
        font-size: 18px;
        gap: 12px;
    }
`;

export const List = styled.ul`
    color: ${({ theme }) => theme.colors.sectionContent};
    transition: color 0.5s;
    column-width: 300px;
    column-count: 3;
    padding: 32px 0 0 0;
    margin: 0;
    list-style-type: none;

    @media (max-width: ${({theme}) => theme.breakpoints.medium}px) {
        column-count: 1;
        padding: 12px 0 0 0;
    }
    `;

export const ListItem = styled.li`
    display: flex;
    gap: 16px;
    line-height: 140%;
    margin: 8px;

    @media (max-width: ${({theme}) => theme.breakpoints.medium}px) {
        gap: 8px;
    }

    &:first-child {
        margin-top: 0px;
    }
`;

export const TopicLogo = styled.img`
    width: 28px;
    height: 30px;

    @media (max-width: ${({theme}) => theme.breakpoints.medium}px) {
        width: 18px;
        height: 20px;
    }
`;