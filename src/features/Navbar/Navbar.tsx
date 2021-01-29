import React from "react";
import { Link } from "react-router-dom";
import { Title, Wrapper, LinksWrapper, NavbarLink } from "./Navbar.styles";

const Navbar = () => (
  <Wrapper>
    <Link
      style={{
        color: "inherit",
        textDecoration: "none",
      }}
      to="/"
    >
      <Title>Silo v0.0.1</Title>
    </Link>
    <LinksWrapper>
      <NavbarLink to="/">Home</NavbarLink>
      <NavbarLink to="/traits">Traits</NavbarLink>
    </LinksWrapper>
  </Wrapper>
);

export default Navbar;
