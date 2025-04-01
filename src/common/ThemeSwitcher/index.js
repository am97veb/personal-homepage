import { useDispatch, useSelector } from "react-redux";
import { Wrapper, Caption, ThemeButton, ButtonWrapper, StyledButtonDisc, StyledButtonSun, } from "./styled";
import { selectTheme, toggleTheme } from "../../features/personalHomepage/homepageSlice";

export const ThemeSwitcher = () => {
    const darkTheme = useSelector(selectTheme);
    const dispatch = useDispatch();
    
    return (
        <Wrapper>
            <Caption>
                Dark mode {darkTheme ? "on" : "off"}
            </Caption>
            <ThemeButton
                onClick={() => dispatch(toggleTheme())}
            >
                <ButtonWrapper>
                    <StyledButtonDisc
                    $darkTheme={darkTheme}
                    />
                    <StyledButtonSun
                    $darkTheme={darkTheme}/>
                </ButtonWrapper>
            </ThemeButton>
        </Wrapper>
    )
};