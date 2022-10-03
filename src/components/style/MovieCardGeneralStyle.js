import styled from "styled-components"

const MovieCardGeneralStyle =styled.div`
margin-bottom: 5rem;
padding-top: 2rem;
.top-section{
    display: flex;
    justify-content: space-around
}
.left-section{
    background-color: gray;
    height: 200px;
    width: 150px;
}
.right-section{
    margin-left: 10px;
    width: 300px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
}

`;

export default MovieCardGeneralStyle