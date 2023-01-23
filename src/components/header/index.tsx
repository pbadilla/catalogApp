import { Link } from "react-router-dom";

import * as SC from "./styles";

import logo from "../../assets/react.svg";

export const HeaderComponent = () => {
  return (
    <SC.HeaderContainer data-testid="header-container">
      <Link to="/">
        <img data-testid="logo" src={logo} alt="Logo" />
      </Link>

      <section></section>
    </SC.HeaderContainer>
  );
};
