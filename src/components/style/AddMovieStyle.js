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
    box-shadow: rgba(0, 0, 0, 0.56) 0px 22px 70px 4px;
    &:focus {
      outline: none;
    }
  }
  .result-list{
    padding: 1rem;
    max-width: 1260px;
    margin: auto;
    display:grid;
    grid-template-columns: repeat( auto-fit, minmax(250px, 1fr) );;
    grid-gap: 5rem;
  }
`;

export default AddMovieStyle;
