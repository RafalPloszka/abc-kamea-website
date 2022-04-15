import * as React from "react";
import PropTypes from "prop-types";
import styled from 'styled-components';

import GlobalStyle from "../globalStyles";
import Header from './Header';

const linksData = [
  {
    title: 'Pieczątki',
    to: '#stamps',
  },
  {
    title: 'Grawer',
    to: '#engraver',
  },
  {
    title: 'Kontakt',
    to: '#contact',
  },
]

const Layout = ({ children }) => {
  return (
    <>
      <GlobalStyle />
      <Wrapper>
        <Header links={linksData} />
        <main>{children}</main>
        <Footer>
          © {new Date().getFullYear()}, Built by Rafał Płoszka
        </Footer>
      </Wrapper>
    </>
  )
};

const Wrapper = styled.div`
  margin: 0 auto;
  padding: 0 1.0875rem 1.45rem;
`

const Footer = styled.footer`
  margin-top: 2rem;
  font-family: initial;
`

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout
