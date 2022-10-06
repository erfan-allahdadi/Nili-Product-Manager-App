import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: flex-start;
    padding: 1rem;
    width: 80%;
    margin: 5rem auto;
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
    border-radius: 1rem;
`

export const Right = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 50%;
    background-color: beige;

    @media screen and (max-width : 768px) {
        width: 100%;
    }

`

export const Left = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 50%;
    height: 100%;

    img {
        max-width: 95%;
    }

    @media screen and (max-width : 768px) {
        display: none;
    }
`

export const TitleBox = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
`

export const InputBox = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 0 1rem;
    width: 80%;
    gap: 1rem;
    padding: 1rem;

    div{
        width: 100%;
        display: flex;
        flex-direction: column;
    }
    

    input {
        width: 90%;
        border: none;
        outline: none;
        padding: 0.5rem 0.5rem;
        /* margin: 1rem auto; */
        text-align: center;
        font-family: "Vazir";
        border-radius: 0.8rem;
        margin-top: 0.5rem;
        box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;

    }
`

export const ButtonBox = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 80%;
    margin: 1rem auto;

    button {
        border: none;
        outline: none;
        padding: 0.5rem 2rem;
        font-family: "Vazir";
        font-size: 1.1rem;
        border-radius: 0.8rem;
        background-color: #1976d2;
        cursor: pointer;
        color: #fff;
    }
`