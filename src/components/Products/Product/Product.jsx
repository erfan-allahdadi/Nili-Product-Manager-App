import React, { useState } from 'react';

import styled from 'styled-components';
import ViewModal from '../modal/ViewModal';

const Product = ({ item }) => {

    // console.log(item);

    const [showInfoModal, setShowInfoModal] = useState(false);


    return (
        <ProductContainer>
            <div><span>{item.productName}</span></div>
            <div><span>{item.quantity}</span></div>
            <div><button onClick={() => {setShowInfoModal(!showInfoModal)}}>مشاهده مشخصات</button></div>
            {
                showInfoModal &&
                    <ViewModal item = {item} setShowInfoModal= {setShowInfoModal} />
            }
            <div><span>{item.cost}</span></div>
        </ProductContainer>
    );
};

export default Product;

const ProductContainer = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
    background-color: gray;
    width: 90%;
    padding: 1rem;
    border-radius: 1rem;

    span{
        color: #000;
    }

    button {
        padding: 0.2rem 1rem;
        font-family: "Vazir";
        border-radius: 0.5rem;
        border: none;
        outline: none;
        cursor: pointer;
    }
`