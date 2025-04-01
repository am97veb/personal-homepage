import { Wrapper, ImageContainer, Image, AboutMe, Caption, StyledHeader, Description } from "./styled";
import adrianMarkefka from "./AdrianMarkefka.jpg"
import { ThemeSwitcher } from "../../../common/ThemeSwitcher";

export const Header = ({ mail, toggleTheme }) => (
    <Wrapper>
        <Image src={adrianMarkefka} alt="photo by Adrian" />
        <AboutMe>
            <Caption>
                this is
            </Caption>
            <StyledHeader>
                Adrian Markefka
            </StyledHeader>
            <Description>
                💻 I am a young Frontend Developer who constantly strives to explore and master new technologies. I am thorough and meticulous. Writing simple and maintainable code is my priority. I am not afraid of challenging, creative projects and enjoy taking on new challenges.
            </Description>
            {mail}
        </AboutMe>
        <ThemeSwitcher />
    </Wrapper>

);