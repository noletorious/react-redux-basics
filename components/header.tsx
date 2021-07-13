import styled from "styled-components";

const HeaderWrapper = styled.div`
  display: flex;
  flex: 1;
  height: 50px;
  background-color: #efefef;
  justify-content: space-between;
  padding: 0 1em;
`;

const Logo = styled.span`
  font-weight: bold;
  font-size: 1.2em;
  align-self: center;
`;

const Links = styled.ul`
  list-style: none;
`;
const Link = styled.li``;

export default function Header() {
  return (
    <HeaderWrapper>
      <Logo>LOGO</Logo>
      <Links>
        <Link>Home</Link>
      </Links>
    </HeaderWrapper>
  );
}
