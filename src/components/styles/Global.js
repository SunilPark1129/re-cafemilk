import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle `
*{
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    
    &::-webkit-scrollbar {
      width: .5rem;
      height: .5rem;
    }
     
    &::-webkit-scrollbar-track {
        background-color:${({ theme }) => theme.colors.light};
        box-shadow: inset 0 0 6px ${({ theme }) => theme.colors.main};
    }
    
    &::-webkit-scrollbar-thumb {
        background-color: ${({ theme }) => theme.colors.main};
        box-shadow: inset 0 0 6px ${({ theme }) => theme.colors.reversedClr};
    }
}

body {
    min-width: 340px;
    font-family: 'Roboto', sans-serif;
    background-color: ${({ theme }) => theme.colors.light};
    font-size: 1rem;

    @media (max-width: ${({ theme }) => theme.tablet}) {
        font-size: .9rem;
    }    
    @media (max-width: ${({ theme }) => theme.mobile}) {
        font-size: .8rem;
    }    
    
    h2, h3, h4, a {
        color: ${({ theme }) => theme.colors.darkFont};
    }
}


ul {    
    list-style-type: none;
}

a {
    text-decoration: none;
}
`;