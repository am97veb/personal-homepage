import { Wrapper, ImageContainer, Image, AboutMe, Caption, Title, Description, DarkTheme } from "./styled";
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
            <Title>
                Adrian Markefka
            </Title>
            <Description>
                "I'm Frontend Developer and I love new technology. coś tu by trzeb jeszcze dopisać"
            </Description>
            <LinkContainer>
                {mail}
            </LinkContainer>
        </AboutMe>
        {toggleTheme}
    </Wrapper>

);