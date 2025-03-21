import styled from "styled-components";

export const Wrapper = styled.div`
    display: flex;
    justify-content: flex-start;
    margin: 113px 0 73px;
`;

export const ImageContainer = styled.div`
    width: 384px;
    height: 384px;
    margin-right: 66px;
`;

export const Image = styled.img`
    display: block;
    width: 384px;
    height: 384px;
    border-radius: 50%;
    object-fit: cover;
    margin: 0 auto;
`;

export const AboutMe = styled.div`
  align-self: center;
`;

export const Caption = styled.p`
    font-size: 12px;
    font-weight: 700;
    line-height: 15.6px;
    color: ${({ theme }) => theme.colors.caption};
    text-transform: uppercase;
    letter-spacing: 0px;
`;

export const StyledHeader = styled.h1`
    color: ${({ theme }) => theme.colors.header};
    font-size: 38px;
    font-weight: 900;
    line-height: 45.99px;
    margin: 0px;
`;

export const Description = styled.p`
    font-size: 20px;
    font-weight: 400;
    line-height: 28px;
    color: ${({ theme }) => theme.colors.aboutMeContent};
    margin: 35px 0px 32px;
`;