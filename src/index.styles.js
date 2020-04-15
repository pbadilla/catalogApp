import styled, { createGlobalStyle } from 'styled-components';
import { normalize } from 'styled-normalize';
import catalogAppTheme from './styles/themes/catalogApp';

const { fonts, colors } = catalogAppTheme;

export const GlobalStyle = createGlobalStyle`
  ${normalize}

  // You can continue writing global styles here
  body {
    padding: 0;
    background-color: white;
  }
`;

export const ScrollView = styled.section`
  overflow: hidden;
  font-family: ${fonts.family};
  -webkit-overflow-scrolling: touch;
  overflow-y: auto;
  white-space: nowrap;
  overflow-x: auto;
  overflow-y: hidden;
`;

export const MainContent = styled(ScrollView)`
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  font-size: ${fonts.base};
  padding: 3em;
  ${props =>
    props.bg &&
    `
    background-color: ${props.bg};
  `}
`;

export const Slide = styled.section`
  font-weight: 400;
  flex: 1;
  height: ${props => (props.height ? props.height : '100%')};
  width: ${props => (props.width ? props.width : '100%')};
  justify-content: center;
  flex-direction: column;
  align-items: center;
  text-align: center;
  display: flex;
  font-size: 3em;
  color: ${colors.white};
`;

export const App = styled.div`
  *,
  & {
    box-sizing: border-box;
  }
`;
