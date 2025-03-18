import { Wrapper, ImageContainer, Image, AboutMe, Caption, Title, Description, DarkTheme } from "./styled";
import adrianMarkefka from "./AdrianMarkefka.jpg"
import { LinkContainer } from "../../common/LinkContainer";

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
                💻😀 I'm Frontend Developer and I'm looking for a job. I searched for a long time for what i wanted to do in life. My search led me to the IT industry and I finally felt what I wanted to do in life - work as a Frontend Developer. Below, you can see what I have already learned, what I would like to learn in the near future and my projects. Feel free to contact me 📧📞
            </Description>
            <LinkContainer>
                {mail}
            </LinkContainer>
        </AboutMe>
        {toggleTheme}
    </Wrapper>

);