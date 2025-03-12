import { Caption, Contact, ContactIcon, Description, Mail, Title, Wrapper } from "./styled";
import message from "./Message.svg";
import { MailAdress } from "../MailAdress/Index";
import image from "../Github_black.svg"
import { aboutMeDescription } from "./aboutMeDescription";


export const AboutMe = ({ caption, title, description, mail }) => (
    <Wrapper>
        <Caption>{caption}</Caption>
        <Title>{title}</Title>
        <Description>{description}
        </Description>
        <Contact>
            <ContactIcon src={message} alt="ikona listu" />
            {mail}
        </Contact>
        
    </Wrapper>
);