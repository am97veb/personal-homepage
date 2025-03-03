import { Caption, Contact, ContactIcon, Description, Header, Image, ImageContainer, Mail, Wrapper } from "./styled";

export const AboutMe = () => (
    <Wrapper>
        <ImageContainer>
            <Image src="./images/AdrianMarkefkaPhoto.jpg" alt="zdjęcie Adriana" />
        </ImageContainer>

        <div>
            <Caption>this is</Caption>
            <Header>Adrian Markefka</Header>
            <Description>I'm Frontend Developer and I love new technology,
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus fugit placeat corrupti omnis. Fugit sapiente temporibus sint corporis, nam earum nostrum nihil possimus, illo vel odit vitae aut perferendis delectus?
            </Description>
            <Contact>
                <ContactIcon src="./images/Message.svg" alt="ikona listu" />
                <Mail href="mailto:am97veb@gmail.com">Hire Me</Mail>
            </Contact>
        </div>
    </Wrapper>

);