import styled from "styled-components";

const NavigationStyle = styled.div`
  background-color: #001f3f;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-right: 2em ;
  height: 3em;
  .container-right {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  a {display:flex;
    align-items: center;
    text-decoration: none;
    margin-left:2rem;
    color:#DDDDDD;
    transition: 300ms;
    &:hover{
        color: #AAAAAA;
    }
  }
  .add{
    background-color: #85144b;
    padding: 0.3rem 1rem;
    border-radius:1rem;
    &:hover{
        background-color: #79242b;
    }
  }
`;

export default NavigationStyle;
