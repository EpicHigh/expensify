import React from "react";
import { connect } from "react-redux";
import { startLogin } from "../actions/auth";
import styled from "styled-components";
import { mSize, lSize, LoginButton } from "../styles/common";

const BoxLayout = styled.div`
  background: url("/images/bg.jpg");
  background-size: cover;
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
  top: 0;
  left: 0;
  position: fixed;
  color: whitesmoke;
`;

const BoxLayoutChild = styled.div`
  background-color: rgba(0, 0, 0, 0.75);
  border-radius: 6px;
  text-align: center;
  padding: ${lSize};
`;

const Title = styled.h1`
  margin: 0 0 ${mSize} 0;
  line-height: 1;
`;

const LoginPage = props => (
  <BoxLayout>
    <BoxLayoutChild>
      <Title>Expensify</Title>
      <p>It's time to get your expenses under control</p>
      <LoginButton onClick={props.startLogin}>Login with Google</LoginButton>
    </BoxLayoutChild>
  </BoxLayout>
);

const mapDispatchToProps = dispatch => ({
  startLogin: () => dispatch(startLogin())
});

export default connect(
  undefined,
  mapDispatchToProps
)(LoginPage);
