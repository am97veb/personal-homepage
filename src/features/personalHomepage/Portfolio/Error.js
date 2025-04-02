import { useSelector } from "react-redux";
import { selectTheme } from "../homepageSlice";
import { Button } from "../../../common/Button/Index";
import { gitHub } from "../links";
import { Wrapper, DangerIconDark, DangerIconLight, ErrorHeader, LoadingState } from "./styled";

export const Error = () => {
    const darkTheme = useSelector(selectTheme);

    return (
        <Wrapper>
            {darkTheme !== true ? <DangerIconDark /> : <DangerIconLight />}
            <ErrorHeader>
                Ooops! Something went wrong...
            </ErrorHeader>
            <LoadingState>
                Sorry, failed to load Github projects.
                <br />
                You can check them directly on Github.
            </LoadingState>
            <Button
                adress={gitHub}
                rel="noreferrer noopener"
                target="_blank"
                content="Go to GitHub"
            />
        </ Wrapper>
    )
};