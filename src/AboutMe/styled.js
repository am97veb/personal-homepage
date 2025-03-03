import styled from "styled-components";

export const Wrapper = styled.div`
    display: flex;
    gap: 20px;
    justify-content: center;
    max-width: 1089px;

`;

export const ImageContainer = styled.div`
    
    width: 398px;
    height: 398px;
    border: solid red 1px;
    
`;

export const Image = styled.img`
    display: block;
    width: 384px;
    height: 384px;
    border-radius: 50%;
    object-fit: cover;
    margin: auto;
`;

export const Caption = styled.p`
    width: 43px;
    height: 16px;
    font-size: 12px;
    font-weight: 700;
    line-height: 15.6px;
    color: ${({ theme }) => theme.colors.slateGray};
    text-transform: uppercase;
`;

export const Header = styled.h1`
    font-size: 38px;
    font-weight: 900;
    line-height: 45.99px;
`;

export const Description = styled.p`
    font-size: 20px;
    line-height: 28px;
    font-weight: 400;
    color: ${({ theme }) => theme.colors.slateGray};
`;

export const Contact = styled.div`
    width: 154px;
    height: 49px;
    display: flex;
    gap:16px;
    justify-content: center;
    background-color: ${({ theme }) => theme.colors.scienceBlue};
    border: 1px;
    border-radius: 4px;
    padding: 12px 16px;
`;

export const ContactIcon = styled.img`
    width: 24px;
    height: 24px;
`;

export const Mail = styled.a`
    width: 82px;
    height: 25px;
    font-size: 20.06px;
    line-height: 24.28px;
    color: ${({ theme }) => theme.colors.white};
    text-decoration: none;
    text-align: center;

    

`;