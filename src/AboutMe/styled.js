import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const Caption = styled.p`
    font-size: 12px;
    font-weight: 700;
    line-height: 15.6px;
    color: ${({ theme }) => theme.colors.slateGray};
    text-transform: uppercase;
    letter-spacing: 0px;
`;

export const Title = styled.h1`
    font-size: 38px;
    font-weight: 900;
    line-height: 45.99px;
    margin: 0px;
`;

export const Description = styled.p`
    font-size: 20px;
    font-weight: 400;
    line-height: 28px;
    color: ${({ theme }) => theme.colors.slateGray};
    margin: 35px 0px 32px;
`;

export const Contact = styled.div`
    width: 154px;
    height: 49px;
    display: flex;
    gap:16px;
    justify-content: center;
    align-items: center;
    background-color: ${({ theme }) => theme.colors.scienceBlue};
    border: 1px;
    border-radius: 4px;
    padding: 12px 16px;
    color: ${({theme}) => theme.colors.white};    
`;

export const ContactIcon = styled.img`
    width: 24px;
    height: 24px;
    font-weight: 600;
    
    
`;

