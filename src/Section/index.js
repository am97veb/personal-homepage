
import { Header, List, ListItem, StyledSection } from "./styled";
import blueDisc from "./listItemBlueDisc.svg";

export const Section = ({ title, content }) => (

    <StyledSection>
        <Header>
            {title}
        </Header>
        <List>
            {
                content.map((item) => (
                    <ListItem key={item}><img src={blueDisc}></img>{item}</ListItem>
                ))
            }
        </List>
    </StyledSection>
)
