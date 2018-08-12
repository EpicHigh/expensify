import React from "react";
import { Link } from "react-router-dom";
import { startLogout } from "../actions/auth";
import { connect } from "react-redux";
import styled from "styled-components";
import { darkBlue, sSize, ContentContainer } from "../styles/common";

const Navtab = styled.nav`
  background: ${darkBlue};
`;

const LinkTitle = styled(Link)`
  color: white;
  text-decoration: none;
  h1 {
    margin: 0;
  }
`;

const HeaderContent = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding: ${sSize} 0;
`;

const LogoutButton = styled.button`
	background-color: #364051;
  text-transform: uppercase;
  padding: 15px 25px;
  font-size: medium;
  color: white;
  cursor: pointer;
  text-decoration: none;
  box-sizing: inherit;
  transition-property: all;
  transition-duration: .6s;
  transition-timing-function: ease;
  &:hover {
    background-color: #6d7687;
  }
`;

const Navbar = props => (
  <Navtab>
    <ContentContainer>
	    <HeaderContent>
      <LinkTitle to="/dashboard">
        <h1>Expensify</h1>
      </LinkTitle>
      <LogoutButton onClick={props.startLogout}>Logout</LogoutButton>
	    </HeaderContent>
    </ContentContainer>
  </Navtab>
);

const mapDispatchToProps = dispatch => ({
  startLogout: () => dispatch(startLogout())
});

export default connect(
  undefined,
  mapDispatchToProps
)(Navbar);
