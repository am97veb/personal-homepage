import { StyledButton } from "./styled";

export const Button = ({ content, adress, icon, rel, target }) => (
    <StyledButton href={adress} rel={rel} target={target}>{icon}{content}</StyledButton>
);