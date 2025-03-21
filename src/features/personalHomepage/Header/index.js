import { Wrapper, ImageContainer, Image, AboutMe, Caption, StyledHeader, Description } from "./styled";
import adrianMarkefka from "./AdrianMarkefka.jpg"
import { LinkContainer } from "../LinkContainer";

export const Header = ({ mail, toggleTheme }) => (
    <Wrapper>
        <ImageContainer>
            <Image src={adrianMarkefka} alt="photo by Adrian" />
        </ImageContainer>
        <AboutMe>
            <Caption>
                this is
            </Caption>
            <StyledHeader>
                Adrian Markefka
            </StyledHeader>
            <Description>
                💻😀 I'm Frontend Developer and I'm looking for a job. I thought what I wanted to do in life for a long time. My search led me to the IT industry and I finally felt what I want to do - work as a Frontend Developer. You can see what I have already learned below, what I would like to learn in the near future and my finished projects. Feel free to contact me 📧
            </Description>
            <LinkContainer>
                {mail}
            </LinkContainer>
        </AboutMe>
        {toggleTheme}
    </Wrapper>

);