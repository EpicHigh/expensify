import React from "react";
import styled from "styled-components"

const Loading = styled.div`
	background-color: #FFF;
  width: 100%;
  height: 100%;
  position: fixed;
  display: flex;
 	align-items: center;
  justify-content: center;
`;

const LoadingImage = styled.img`
	display: block;
  min-height: 209px;
  min-width: 200px;
`;

const LoadingPage = () => (
	<Loading className="loading">
		<LoadingImage src="http://a.top4top.net/p_1990j031.gif" alt="Loading"/>
	</Loading>
);

export default LoadingPage