import styled from "styled-components";

export const Wrapper = styled.div`
    position: relative;
    display: flex;
    gap: 66px;
    margin: 113px 20px 73px;
    
    @media (max-width: ${({theme}) => theme.breakpoints.medium}px) {
        margin: 34px 16px 48px;
        flex-wrap: wrap;
        gap: 0px;
    }
`;

export const Image = styled.img`
    flex-shrink: 0;
    width: 35vw;
    height: 35vw;
    max-width: 384px;
    max-height: 384px;
    border-radius: 50%;
    object-fit: cover;
    
    @media (max-width: ${({theme}) => theme.breakpoints.medium}px) {
        width: 35vw;
        height: 35vw;
    }
`;

export const AboutMe = styled.div`
    align-self: center;

    @media (max-width: ${({theme}) => theme.breakpoints.medium}px) {
        order: 3
        }
`;

export const Caption = styled.p`
    font-size: 12px;
    font-weight: 700;
    line-height: 15.6px;
    color: ${({ theme }) => theme.colors.caption};
    transition: color 0.5s;
    text-transform: uppercase;
    letter-spacing: 0px;

    @media (max-width: ${({theme}) => theme.breakpoints.medium}px) {
        margin: 16px 0px 8px;
    }
`;

export const StyledHeader = styled.h1`
    color: ${({ theme }) => theme.colors.header};
    transition: color 0.5s;
    font-size: 38px;
    font-weight: 900;
    margin: 0px;

    @media (max-width: ${({theme}) => theme.breakpoints.medium}px) {
        font-size: 22px;
    }
`;

export const Description = styled.p`
    font-size: 20px;
    font-weight: 400;
    line-height: 140%;
    color: ${({ theme }) => theme.colors.aboutMeContent};
    transition: color 0.5s;
    margin: 35px 0px 32px;

    @media (max-width: ${({theme}) => theme.breakpoints.large}px) {
        font-size: 17px;
    }

    @media (max-width: ${({theme}) => theme.breakpoints.medium}px) {
        margin: 16px 0px 24px;
    }
`;