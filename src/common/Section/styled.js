import styled from "styled-components";

export const StyledSection = styled.section`
    max-width: 1216px;
    background-color: ${({ theme }) => theme.colors.white};
    margin-bottom: 72px;
    padding: 32px;
    box-shadow: 0px 16px 58px 0px rgba(9, 10, 51, 0.03),
                0px -2px 50px 0px rgba(9, 10, 51, 0.02);
`;

export const Header = styled.h2`
    display: grid;
    grid-template-columns: auto 1fr;
    align-items: center;
    gap: 6px;
    padding-bottom: 13px ;
    border-bottom: 1px solid ${({ theme }) => theme.colors.transparentIron};
    margin:0;
    font-size: 30px;
    font-weight: 900;
    
`;

export const List = styled.ul`
    color: ${({ theme }) => theme.colors.slateGray};
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