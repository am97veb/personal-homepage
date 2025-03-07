import { Image, ImageContainer, Mail, Container, Wrapper } from "./styled";
import adrianMarkefka from "./AdrianMarkefka.jpg"

export const Header = ({content}) => (
    <Wrapper>
        <ImageContainer>
            <Image src={adrianMarkefka} alt="zdjęcie Adriana" />
        </ImageContainer>

        {content}
    </Wrapper>

);