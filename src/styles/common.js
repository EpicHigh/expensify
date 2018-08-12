import styled from "styled-components";
import { Link } from "react-router-dom";
// size
export const sSize = "1.2rem";
export const mSize = "1.6rem";
export const lSize = "3.2rem";
export const desktopBreakPoint = "768px";
// color
export const darkGrey = "#333";
export const darkBlue = "#364051";
// common components
export const ContentContainer = styled.div`
  margin: 0 auto;
  padding: 0 ${mSize};
  max-width: 80rem;
`;
// For inputs
export const TextInput = styled.input`
  border: 1px solid #cacccd;
  height: 50px;
  padding: ${mSize};
  font-size: large;
  font-weight: 300;
`;
export const Selector = TextInput.withComponent("select");
export const NoteTextArea = TextInput.withComponent("textarea").extend`
	height: 10rem;
`;

// For headers
export const PageHeader = styled.div`
  background: #f7f7f7;
  margin-bottom: ${lSize};
  padding: ${lSize} 0;
  width: 100%;
  height: auto;
`;

export const PageHeaderTitle = styled.h2`
  font-weight: 300;
  margin: 0;
`;

export const PageHeaderAction = styled.div`
  margin-top: ${mSize};
`;
// For forms
export const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  > * {
    margin-bottom: ${sSize};
  }
`;
// For Validations
export const ErrorArea = styled.p`
  margin: 0 0 ${mSize} 0;
  font-style: italic;
`;
// Button or Links
export const AddExpenseLink = styled(Link)`
  background-color: #55acee;
  box-shadow: 0 5px 0 0 #3c93d5;
  border-radius: 5px;
  padding: 15px 25px;
  font-size: medium;
  color: white;
  cursor: pointer;
  text-decoration: none;
  line-height: 1;
  &:hover {
    background-color: #6fc6ff;
  }
  &:active {
    transform: translate(0px, 5px);
    -webkit-transform: translate(0px, 5px);
    box-shadow: 0px 1px 0px 0px;
  }
`;

export const AddAndEditButton = AddExpenseLink.withComponent("button").extend`
	width: 25%;
`;

export const LoginButton = styled.button`
  background-color: #9b9b9b;
  box-shadow: 0 5px 0 0 #696969;
  border-radius: 5px;
  padding: 15px 25px;
  font-size: medium;
  color: #dce6e1;
  &:hover {
    background-color: ghostwhite;
    color: dimgray;
  }
  &:active {
    transform: translate(0px, 5px);
    -webkit-transform: translate(0px, 5px);
    box-shadow: 0px 1px 0px 0px;
  }
`;

export const RemoveButton = LoginButton.extend`
  width: 25%;
`;

export const ShowForDesktop = styled.div`
  @media only screen and (max-width: ${desktopBreakPoint}) {
    display: none;
  }
`;
export const ShowForMobile = styled.div`
  @media only screen and (min-width: ${desktopBreakPoint}) {
    display: none;
  }
`;

