import styled from "styled-components";

export const ModalContainer = styled.div`
    display: block; 
    position: fixed; 
    z-index: 1; 
    left: 0;
    top: 0;
    width: 100%; 
    height: 100%; 
    overflow: auto; 
    background-color: rgba(0, 0, 0, 0.8); 
    transition:all ease 0.3s;
`
export const ModalContent = styled.div`

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    background: linear-gradient(107.84deg, rgba(255, 255, 255, 0.44) 0%, rgba(255, 255, 255, 0.0836) 100%);
    /* background-color: blue; */
    border: 1px solid #FFFFFF;
    backdrop-filter: blur(39px);
    border-radius: 40px;
    margin: 11% auto; 
    padding: 20px;
    border: 1px solid #888;
    width: 60%; 
`
export const ModalHeader = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  /* background-color: red; */
`
export const Head = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  gap: 10px;
  width: 100%;
`
export const Title = styled.div`
  background-color: #fff;
  border-radius:10px;
  font-size:16px;
  padding:5px 10px;
  font-weight:bold;
  text-align: center;
  margin: 0 auto;
`
export const ModalBody = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    /* background-color: aqua; */
    margin: 2rem auto;
    width: 100%;
`
export const Row = styled.div`
    display: flex;
    justify-content: space-evenly;
    /* align-items: center; */
    /* background-color: yellow; */
    width: 80%;
    gap: 1rem;
`
export const Col = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    align-items: flex-start;
    /* background-color: blueviolet; */
    padding: 0.5rem;

    label{
        color: #fff;
    }

    input {
        border : none;
        outline : none;
        padding : 0.3rem 0.5rem;
        border-radius : 0.5rem;
        text-align : center;
        width: 90%;
        font-family: "Vazir";
    }

    button {
        border: none;
        outline: none;
        width: 100%;
        padding: 0.2rem 1rem;
        border-radius: 0.2rem;
        cursor: pointer;
        color: #fff;
        font-family: "Vazir";
        background-color: blueviolet;
    }

`
export const ModalFooter = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    /* background-color: red; */
    width: 100%;
`

export const RowFeature = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
    background-color: #00ffbf;
    border-radius: 1rem;
    width: 60%;
    margin: 0.5rem auto;
    padding: 0.5rem 0;
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;   

    span{
        color: #000;
    }
`