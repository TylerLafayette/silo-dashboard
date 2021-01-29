import { Link } from "react-router-dom";
import styled from "styled-components";

/**
 * Wraps the navbar with a bottom border.
 */
export const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  padding: 0.5rem;
  border-bottom: 1px solid #e5e5ec;
`;

/**
 * Shows the Silo title.
 */
export const Title = styled.span`
  font-weight: bold;
  padding-right: 1rem;
  border-right: 1px solid #e5e5ec;
`;

/**
 * Wraps the navigation links.
 */
export const LinksWrapper = styled.div`
  padding-left: 0.5rem;
`;

/**
 * A styled link.
 */
export const NavbarLink = styled(Link)`
  padding: 0rem 0.5rem;
  color: #535361;
  text-decoration: none;
  transition: 0.3s ease;

  &:hover {
    cursor: pointer;
    color: #000000;
  }
`;
