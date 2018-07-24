import React from "react";
import styled from "styled-components";
import Typing from "react-typing-animation";
import { Link } from "react-router-dom";

const StyledLink = styled.span`
  font-family: "Inconsolata", monospace;
  color: #8bc34a;
  cursor: pointer;
`;

const ErrorBody = styled.div`
  @import url("https://fonts.googleapis.com/css?family=Inconsolata");
  background: #081421;
  color: #d3d7de;
  font-family: "Inconsolata", monospace;
  font-size: 18px;
  line-height: 1.5em;
  cursor: default;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const CodeArea = styled.div`
  width: 450px;
  min-width: 450px;
  @media screen and (max-width: 320px) {
    font-size: 5vw;
    min-width: auto;
    width: 95%;
    margin: auto;
    padding: 5px 5px 5px 10px;
    line-height: 6.5vw;
  }
  & > span {
    display: block;
  }
`;

export default () => (
  <ErrorBody>
    <Typing>
      <CodeArea>
        <span style={{ color: "#777", fontStyle: "italic" }}>
          {"// 404 page not found."}
        </span>
        <span>
          <span style={{ color: "#d65562" }}>import</span>
          <span> redirect</span>
          <span style={{ color: "#d65562" }}> from</span>
          <span style={{ color: "#8bc34a" }}> "home"</span>;
        </span>
        <span>
          <span style={{ color: "#d65562" }}>const</span>
          <span> found</span>
          <span style={{ color: "#4ca8ef" }}> =</span>
          <span> url.params</span>
          <span style={{ color: "#4ca8ef" }}> !==</span>
          <span style={{ color: "#8bc34a" }}> "404"</span>
        </span>
        <span>
          <span style={{ color: "#d65562" }}>try </span>
          {"{"}
        </span>
        <span>
          <span style={{ color: "#d65562" }}>if</span> (
          <span style={{ color: "#4ca8ef" }}>!</span>
          <span style={{ fontStyle: "italic", color: "#bdbdbd" }}>found</span>)
          {" {"}
        </span>
        <span style={{ paddingLeft: "15px" }}>
          console.<span style={{ color: "#4ca8ef" }}>error</span>(
          <span style={{ color: "#8bc34a" }}>
            "ほら!あなたは何をしているの？"
          </span>);
        </span>
        <span>
          <span style={{ paddingLeft: "15px", color: "#d65562" }}>
            throw new
            <span style={{ color: "#2796ec" }}> Error</span>
          </span>
          <span>
            (<span style={{ color: "#8bc34a" }}>"(╯°□°)╯︵ ┻━┻"</span>)
          </span>
          <span style={{ display: "block" }}>{"}"}</span>
        </span>
        <span>
          {"}"}
          <span style={{ color: "#d65562" }}> catch</span>
          <span> (</span>
          <span style={{ color: "#ffcb6b" }}>e</span>
          <span>)</span>
          {" {"}
        </span>
        <span style={{ paddingLeft: "15px" }}>
          <span>redirect(</span>
          <span>
            <Link to="/" title="home">
              <StyledLink>"Click here to home"</StyledLink>
            </Link>
          </span>
          <span>)</span>
        </span>
        <span>{"}"}</span>
      </CodeArea>
    </Typing>
  </ErrorBody>
);
