import { Wrapper, Image, AboutMe, Caption, StyledHeader, Description } from "./styled";
import adrianMarkefka from "./adrianMarkefka.jpg";
import { headerDescription } from "./headerDescription";
import { ThemeSwitcher } from "../../../common/ThemeSwitcher";

export const Header = ({ mail }) => (
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
                {headerDescription}
            </Description>
            {mail}
        </AboutMe>
        <ThemeSwitcher />
    </Wrapper>

);