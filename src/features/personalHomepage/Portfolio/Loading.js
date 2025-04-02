import { Wrapper, LoadingIcon, LoadingState } from "./styled";

export const Loading = () => (
    <Wrapper>
        <LoadingState>
            Please wait, projects are being loaded...
        </LoadingState>
        <LoadingIcon />
    </ Wrapper>
);