import { Wrapper, Caption, ThemeButton, ToDarkMode, ToLightMode } from "./styled";
import { useDispatch, useSelector } from "react-redux";
import { selectTheme, toggleTheme } from "../../homepageSlice";

export const ToggleTheme = () => {
    const darkTheme = useSelector(selectTheme);
    const dispatch = useDispatch();
    
    return (
        <Wrapper>
            <Caption>
                {darkTheme === false
                    ? "dark mode off"
                    : "dark mode on"
                }
            </Caption>
            <ThemeButton
                onClick={() => dispatch(toggleTheme())}
            >
                {darkTheme === false
                    ? <ToLightMode />
                    : <ToDarkMode />
                }
            </ThemeButton>
        </Wrapper>
    )
};