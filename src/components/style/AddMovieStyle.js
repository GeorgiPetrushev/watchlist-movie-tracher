import styled from "styled-components";

const AddMovieStyle = styled.div`
  text-align: center;
  min-height: 93vh;
  .input-search {
    margin-top: 4rem;
    margin-bottom: 3rem;
    padding-left: 1rem;
    background-color: none;
    border: none;
    border-radius: 0.5rem;
    height: 3rem;
    width: 70%;
    max-width: 460px;
    font-size: 1.1rem;
    box-shadow: rgba(0, 0, 0, 0.56) 0px 22px 70px 4px;
    &:focus {
      outline: none;
    }
  }
  .result-list{
    padding: 1rem;
    max-width: 1240px;
    margin: auto;
    display:grid;
    grid-template-columns: repeat( auto-fit, minmax(250px, 1fr) );;
    grid-gap: 5rem;
  }

  button,
      button::after {
        transition: all 0.3s;
      }
      button {
        background: none;
        border-radius: 0.5rem;
        border: 1px green solid;
        color: black;
        display: block;
        font-weight: bold;
        margin: 10px auto;
        padding:0.2rem 1rem;
        position: relative;
        text-transform: uppercase;
      }
      button::before,
      button::after {
        background: green;
        content: '';
        position: absolute;
        z-index: -1;
      }
      button:hover {
        color: white;
      }
      .button2::after {
        height: 100%;
        left: 0;
        top: 0;
        width: 0;
      }
      .button2:hover:after {
        width: 100%;
      }
      .button2:disabled{
        background-color:green;
      }









`;

export default AddMovieStyle;
