import { Link } from 'gatsby';
import React, { useRef } from 'react';
import styled from 'styled-components';
import { StaticImage } from "gatsby-plugin-image";
import useSmoothScroll from 'react-smooth-scroll-hook';

const LinkItem = ({ title, to }) => {
  const ref = useRef(document.documentElement);
 
  const { scrollTo } = useSmoothScroll({
    ref,
    speed: 40,
    direction: 'y',
  });

  return (
    <LinkWrapper>
      <StyledLink onClick={() => scrollTo(`${to}`)}>
        {title}
      </StyledLink>
    </LinkWrapper>
  )
}

const Header = ({links}) => {
  return (
    <Wrapper>
      <Link to="/">
        <StaticImage
          src="../images/Logo.png"
          width={75}
          height={75}
          quality={95}
          formats={["auto", "webp", "avif"]}
          alt="ABC Kamea logo"
          style={{ marginBottom: `1.45rem` }}
        />
      </Link>
      <LinksContainer>
        {links.map((link) => <LinkItem title={link.title} to={link.to} key={link.to} />)}
      </LinksContainer>
    </Wrapper>
  )
}

const Wrapper = styled.header`
  position: fixed;
  top: 0;
  z-index: 1;
  width: 100%;
  padding: 1em 5em;
  display: flex;
  justify-content: space-between;
  background-color: #ffffff;
  // box-shadow: 0 0px 8px 0px rgba(0, 0, 0, 0.2);
`

const LinksContainer = styled.nav`
  display: flex;
  justify-content: right;
  align-items: center;
`

const LinkWrapper = styled.div`
  display: flex;
  margin: 0px 32px;
`

const StyledLink = styled.span`
  font-size: 2em;
  text-transform: uppercase;
	display: inline-block;
	padding: 0.25rem 1rem;
  border: 0.25rem solid transparent;
  -webkit-mask-image: url('https://s3-us-west-2.amazonaws.com/s.cdpn.io/8399/grunge.png');
  -webkit-mask-size: 944px 604px;
  transition: all 0.2s ease-out;
  /* transition: border-width 0s; */
  &:hover {
    color: #fe0000;
    border-color: #fe0000;
    /* border-radius: 5px; */
    mix-blend-mode: multiply;
  }
`

export default Header
