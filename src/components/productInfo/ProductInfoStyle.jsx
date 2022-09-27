import styled from "styled-components";

export const Container = styled.div`
    width : 90%;
    display : flex;
    justify-content : center;
    align-items: center;
    background-color : #D2F898;
    margin: 5rem auto;
    padding : 1rem;
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
    /* gap:1rem; */

    @media screen and (min-width : 320px) and (max-width : 400px) {
        display: flex;
        flex-direction: column;
        width: 80%;
    }
`
export const RightContainer = styled.div`
    display : flex;
    justify-content : center;
    align-items: center;
    /* background-color: beige; */
    width : 30%;

    @media screen and (min-width : 320px) and (max-width : 400px) {
        width : 100%;
    }
`
export const ProductColumn = styled.div`
    display : flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    /* background-color: aqua; */
    width: 100%; 
`
export const LeftContainer = styled.div`
    display : flex;
    justify-content : space-evenly;
    align-items: center;
    width:50%;
    /* background-color: red; */
    gap: 1.5rem;

    @media screen and (min-width : 320px) and (max-width : 400px) {
        width : 100%;
        /* background-color: red; */
    }
`
export const CountColumn = styled.div`
    display : flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 15%;
    @media screen and (min-width : 320px) and (max-width : 400px) {
        width : 20%;
    }
    
`
export const SizeColumn = styled.div`
    display : flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 15%;
    @media screen and (min-width : 320px) and (max-width : 400px) {
        width : 30%;
    }

    button {
        border : none;
        outline : none;
        padding : 0.3rem 0.5rem;
        border-radius : 1rem;
        text-align : center;
        width: 100%;
        background-color: #fff;
        font-family: "Vazir";
        cursor: pointer;
    }
`
export const ColorColumn = styled.div`
    display : flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 15%;
    @media screen and (min-width : 320px) and (max-width : 400px) {
        width : 30%;
    }

    button {
        border : none;
        outline : none;
        padding : 0.3rem 0.5rem;
        border-radius : 1rem;
        text-align : center;
        width: 100%;
        background-color: #fff;
        font-family: "Vazir";
        cursor: pointer;
    }
`
export const CostColumn = styled.div`
    display : flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 15%;
    @media screen and (min-width : 320px) and (max-width : 400px) {
        width : 20%;
    }
`
export const Label = styled.p`
    color:#000;
    border-bottom : 1px solid gray;
    
`
export const Input = styled.input`
    border : none;
    outline : none;
    padding : 0.3rem 0.5rem;
    border-radius : 1rem;
    text-align : center;
    width: 90%;
    font-family: "Vazir";
`
export const ButtonsContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 20%;
    /* background-color: blue; */

    @media screen and (min-width : 320px) and (max-width : 400px) {
        width: 100%;
    }
`
export const Buttons = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap:0.5rem;
    width: 100%;
    

    button {
        border: none;
        outline: none;
        width: 50%;
        padding: 0.2rem 1rem;
        border-radius: 0.2rem;
        cursor: pointer;
        color: #fff;
        font-family: "Vazir";
    }
`


 