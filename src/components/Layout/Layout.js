import * as React from 'react';
import { Link } from 'gatsby';

// styles
import { Container, Heading, NavLink, NavLinkItem } from './styled/Layout.styled';

const Layout = ({ pageTitle, children }) => {
  return (
    <Container>
      <nav>
        <NavLink>
          <NavLinkItem>
            <Link to="/">
              Home
            </Link>
          </NavLinkItem>
          <NavLinkItem>
            <Link to="/about">
              About
            </Link>
          </NavLinkItem>
        </NavLink>
      </nav>
      <main>
        <Heading>{pageTitle}</Heading>
        {children}
      </main>
    </Container>
  );
};

export default Layout;