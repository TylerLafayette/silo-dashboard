import React from "react";
import { Link } from "react-router-dom";
import { LinksWrapper, NavbarLink, Title, Wrapper } from "./Navbar.styles";

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
      <NavbarLink to="/jobs">Jobs</NavbarLink>
    </LinksWrapper>
  </Wrapper>
);

export default Navbar;
