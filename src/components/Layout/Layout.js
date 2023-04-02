import * as React from 'react';
import { Link, useStaticQuery, graphql } from 'gatsby';

// styles
import {
  Header,
  Container,
  Heading,
  NavLink,
  NavLinkItem,
} from './styled/Layout.styled';

const Layout = ({ pageTitle, children }) => {

  const data = useStaticQuery(graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
  `);

  return (
    <Container>
      <Header>
        {data.site.siteMetadata.title}
      </Header>
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
          <NavLinkItem>
            <Link to="/blog">
              Blog
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