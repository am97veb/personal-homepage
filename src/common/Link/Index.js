import { StyledLink } from "./styled";

export const Link = ({ content, adress, icon }) => (
    <StyledLink href={adress}>{icon}{content}</StyledLink>
);