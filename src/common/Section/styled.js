import styled from "styled-components";

export const StyledSection = styled.section`
    max-width: 1216px;
    background-color: ${({ theme }) => theme.colors.sectionBackground};
    margin-bottom: 72px;
    padding: 32px;
    box-shadow: 0px -2px 50px 0px ${({ theme }) => theme.colors.sectionShadowTop},
                0px 16px 58px 0px ${({ theme }) => theme.colors.sectionShadowBottom};   
`;

export const Header = styled.h2`
    color: ${({ theme }) => theme.colors.header};
    display: grid;
    grid-template-columns: auto 1fr;
    align-items: center;
    gap: 6px;
    padding-bottom: 13px ;
    border-bottom: 1px solid ${({ theme }) => theme.colors.border};
    margin:0;
    font-size: 30px;
    font-weight: 900;
`;

export const List = styled.ul`
    color: ${({ theme }) => theme.colors.sectionContent};
    column-count: 3;
    padding: 32px 0 0 0;
    margin: 0;
    list-style-type: none;
`;

export const ListItem = styled.li`
    display: flex;
    gap: 16px;
    line-height: 140%;
    margin: 8px;
`;