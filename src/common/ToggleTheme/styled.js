import styled from "styled-components";
import { ReactComponent as ThemeChanger } from "./themeButton.svg";

export const Wrapper = styled.div`
    display: flex;
    flex-shrink: 0;
    gap: 12px;
`;

export const Caption = styled.p`
    font-size: 12px;
    font-weight: 700;
    line-height: 15.6px;
    color: ${({ theme }) => theme.colors.caption};
    text-transform: uppercase;
    letter-spacing: 0px;

    @media (max-width: 992px) {
        font-size: 0px
    }
`;

export const ThemeButton = styled.button`
    width: 48px;
    height: 26px;
    margin-top: 6px;
    border: none;
    background-color: transparent;
    padding: 0px;
`;

export const ToDarkMode = styled(ThemeChanger)`
@keyframes toRight {
    from {
        transform: translateX(0%);   
    } to {
        transform: translateX(46%);
    }
};

[id="toggle"] {
    animation-name: themeButtonDisc, toRight;
    animation-duration: 0.5s;
    animation-fill-mode: forwards;
    animation-iteration-count: 1;
}

@keyframes themeButtonDisc {
    from {
        fill: #6E7E91;
    } 
    to {
        fill: #FFFFFF;
    }
};

[id="brightness 1"]  {
    animation-name: toRight;
    animation-duration: 0.5s;   
    animation-fill-mode: forwards;      
};

[id="brightness 1"] path {
    animation-name: themeButtonLogo;
    animation-duration: 0.5s;   
    animation-fill-mode: forwards;
}

@keyframes themeButtonLogo {
    from {
        fill: #FFFFFF;  
    } 
    to {
        fill: #252525;
    }
};
   
[id="Vector"] {
    animation-name: themeButtonBorder;
    animation-duration: 0.5s;   
    animation-fill-mode: forwards;
}

@keyframes themeButtonBorder {
    from {
        stroke: #6E7E91;
    } 
    to {
        stroke: #FFFFFF;     
    }
};

[id="Vector_2"] {
    animation-name: themeButtonBackground;
    animation-duration: 0.5s;   
    animation-fill-mode: forwards;
}

@keyframes themeButtonBackground {
    from {
        fill: #E5E5E5;
    } 
    to {
        fill: #363636B8; 
    }
}
`;

export const ToLightMode = styled(ThemeChanger)`
@keyframes toLeft {
    from {
        transform: translateX(46%);   
    } 
    to {
        transform: translateX(0%);
    }
};

[id="toggle"] {
    animation-name: themeButtonDiscLight, toLeft;
    animation-duration: 0.5s;
    animation-fill-mode: forwards;
}

@keyframes themeButtonDiscLight {
    from {
        fill: #FFFFFF;
    } 
    to {
        fill: #6E7E91;
    }
};
  
[id="brightness 1"]  {
    animation-name: toLeft;
    animation-duration: 0.5s;   
    animation-fill-mode: forwards;      
};

[id="brightness 1"] path {
    animation-name: themeButtonLogoLight;
    animation-duration: 0.5s;   
    animation-fill-mode: forwards;
} 

@keyframes themeButtonLogoLight {
    from {     
        fill: #252525;  
    } 
    to {
       fill: #FFFFFF;
    }
};

[id="Vector"] {
    animation-name: themeButtonBorderLight;
    animation-duration: 0.5s;   
    animation-fill-mode: forwards;
}

@keyframes themeButtonBorderLight {
    from {
        stroke: #FFFFFF;  
    } 
    to {
        stroke: #6E7E91;    
    }
};

[id="Vector_2"] {
    animation-name: themeButtonBackgroundLight;
    animation-duration: 0.5s;   
    animation-fill-mode: forwards;
}

@keyframes themeButtonBackgroundLight {
    from {
        fill: #363636B8;
    } 
    to {
        fill: #E5E5E5;
    }
}
`;