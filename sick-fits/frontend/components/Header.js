import Nav from "./Nav";
import Link from "next/link";
import styled, { ThemeProvider, injectGlobal } from "styled-components";

const Logo = styled.h1`
  font-size: 4rem;
  margin-left: 2rem;
  position: relative;
  z-index: 2;
  transform: skew(-7deg);
  a {
    padding: 0.5 rem 1 rem;
    background: ${props => props.theme.red};
    color: white;
    text-decoration: none;
    text-transform: uppercase;
  }
`;

const Header = () => {
  return (
    <div>
      <div className="bar">
        <Logo>
          <Link href="/">
            <a>Sick Fits</a>
          </Link>
        </Logo>
        <Nav />
      </div>
      <div className="sub-bar">
        <p>Search</p>
      </div>
      <div>Cart</div>
    </div>
  );
};

export default Header;
