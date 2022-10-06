import React, { useState, useEffect } from 'react';
import { Buttons, ButtonsContainer, ColorColumn, Column, Container, CostColumn, CountColumn, Input, Label, LeftContainer, ProductColumn, RightContainer, SizeColumn } from "./ProductInfoStyle";

import styled from 'styled-components';

// components
import SizeModal from './../Modals/SizeModal';
import ColorModal from '../Modals/ColorModal';

import { useDispatch, useSelector } from 'react-redux';
import { sendProduct } from './../../server/Actions/productAction';
import Products from '../Products/Products';

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { visitRequestToast } from './../../helper/toastify';

const ProductInfo = () => {

    const [ShowSizeModal, setShowMSizeModal] = useState(false);
    const [showColorModal, setShowColorModal] = useState(false);


    const dispatch = useDispatch();

    const productState = useSelector(state => state?.products?.products);

    const sizeFeatureState = useSelector(state => state?.modal?.sizeFeature);
    const colorFeatureState = useSelector(state => state?.modal?.colorFeature);
    console.log("colorFeatureState" , colorFeatureState);

    const [productData, setProductData] = useState({
        productName: "",
        productCount: "",
        productSize: [],
        productColor: [],
        productCost: ""
    })

    const changeHandler = (e) => {
        setProductData({
            ...productData,
            [e.target.name]: e.target.value
        })
    }

    const submitHandler = () => {
        if(!productData.productName || !productData.productCount || !productData.productCost) {
            visitRequestToast("لطفا مقادیر اجباری را تکمیل کنید" , "error")
        } else {
            dispatch(sendProduct({
                productName: productData.productName,
                quantity: Number(productData.productCount),
                sizeFeature: sizeFeatureState,
                colorFeature: colorFeatureState,
                cost: Number(productData.productCost)
            }))
            setProductData({
                productName: "",
                productCount: "",
                productSize: [],
                productColor: [],
                productCost: ""
            })
            visitRequestToast("محصول شما با موفقیت ثبت شد" , "success");
            window.location.reload();
        }
    }

    const [, forceUpdate] = useState(0);

    useEffect(() => {
        forceUpdate(1)
    },[forceUpdate])

    const removeHandler = () => {

    }

    const productsList = useSelector(state => state?.product?.products?.data?.result?.totalItems);

    return (
        <>
            <Container>
                <RightContainer>
                    <ProductColumn>
                        <Label>نام کامل محصول به همراه برند</Label>
                        <Input onChange={changeHandler} value={productData.productName} name="productName" placeholder='مثال : وان حمام' />
                    </ProductColumn>
                </RightContainer>

                <LeftContainer>
                    <CountColumn>
                        <Label>تعداد</Label>
                        <Input onChange={changeHandler} value={productData.productCount} name="productCount" placeholder='مثال : 5' />
                    </CountColumn>

                    <SizeColumn>
                        <Label>سایز بندی</Label>
                        <button onClick={() => { setShowMSizeModal(!ShowSizeModal) }}>انتخاب</button>
                    </SizeColumn>

                    {
                        ShowSizeModal &&
                        <SizeModal
                            headerTitle="لطفا سایزبندی خود را به همراه تعداد هر کدام وارد نمایید"
                            inputLabel="سایز"
                            Quantity="تعداد (به عدد)"
                            setShowMSizeModal={setShowMSizeModal}
                        />
                    }

                    <ColorColumn>
                        <Label>رنگ بندی</Label>
                        <button onClick={() => { setShowColorModal(!showColorModal) }}>انتخاب</button>
                    </ColorColumn>

                    {
                        showColorModal &&
                        <ColorModal
                            headerTitle="لطفا رنگ بندی خود را به همراه تعداد هر کدام وارد نمایید"
                            inputLabel="رنگ"
                            Quantity="تعداد (به عدد)"
                            setShowColorModal={setShowColorModal}
                        />
                    }

                    <CostColumn>
                        <Label>قیمت</Label>
                        <Input onChange={changeHandler} value={productData.productCost} name="productCost" placeholder='مثال : 50000' />
                    </CostColumn>
                </LeftContainer>

                <ButtonsContainer>
                    <Label>عملیات</Label>
                    <Buttons>
                        <button onClick={submitHandler} style={{ backgroundColor: "blue" }}>ثبت</button>
                        <button onClick={removeHandler} style={{ backgroundColor: "red" }}>حذف</button>
                    </Buttons>
                </ButtonsContainer>
            </Container>
            <ToastContainer/>

            <ProductListContainer>
                <p>تعداد تمامی محصولات درج شده : {productsList}</p>
                <Products/> 
            </ProductListContainer>

            
        </>
    );
};

export default ProductInfo;

export const ProductListContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 1rem;
    width: 90%;
    /* height: 300px; */
    margin: 5rem auto;
    background-color: aqua;
    padding: 1rem 0;
    /* overflow-y: scroll; */
    
`