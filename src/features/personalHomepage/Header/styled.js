import styled from "styled-components";

export const Wrapper = styled.div`
    display: flex;
    margin: 113px 20px 73px;
    
    @media (max-width: 768px) {
        margin: 34px 16px 48px;
        flex-wrap: wrap;
        justify-content: space-between;
    }
`;

export const ImageContainer = styled.div`
    width: 384px;
    height: 384px;
    margin-right: 66px;

    @media (max-width: 768px) {
        width: 128px;
        height: 128px;
        margin-right: 0px;
    }
`;

export const Image = styled.img`
    display: block;
    width: 384px;
    height: 384px;
    border-radius: 50%;
    object-fit: cover;
    margin: 0 auto;

    @media (max-width: 768px) {
        width: 128px;
        height: 128px;
    }
`;

export const AboutMe = styled.div`
    align-self: center;

    @media (max-width: 768px) {
        order: 3
        }
`;

export const Caption = styled.p`
    font-size: 12px;
    font-weight: 700;
    line-height: 15.6px;
    color: ${({ theme }) => theme.colors.caption};
    text-transform: uppercase;
    letter-spacing: 0px;

    @media (max-width: 768px) {
        margin: 16px 0px 8px;
    }
`;

export const StyledHeader = styled.h1`
    color: ${({ theme }) => theme.colors.header};
    font-size: 38px;
    font-weight: 900;
    margin: 0px;

    @media (max-width: 768px) {
        font-size: 22px;
    }
`;

export const Description = styled.p`
    font-size: 20px;
    font-weight: 400;
    line-height: 140%;
    color: ${({ theme }) => theme.colors.aboutMeContent};
    margin: 35px 0px 32px;

    @media (max-width: 768px) {
        font-size: 17px;
        margin: 16px 0px 24px;
    }
`;