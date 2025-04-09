
import { Header, List, ListItem, StyledSection, TopicLogo } from "./styled";
import blueDisc from "./listItemBlueDisc.svg";

export const Section = ({ title, icon, content }) => (
  <StyledSection>
    <Header>
      {title}<TopicLogo src={icon}/>
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
