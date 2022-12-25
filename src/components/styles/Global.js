import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle `
*{
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    
    &::-webkit-scrollbar {
      width: .3rem;
      height: .3rem;
    }
     
    &::-webkit-scrollbar-track {
        background-color:${({ theme }) => theme.colors.light};
    }
    
    &::-webkit-scrollbar-thumb {
        background-color: ${({ theme }) => theme.colors.mild};
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