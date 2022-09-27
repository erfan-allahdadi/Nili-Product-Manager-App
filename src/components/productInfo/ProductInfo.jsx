import React, {useState} from 'react';
import { Buttons, ButtonsContainer, ColorColumn, Column, Container, CostColumn, CountColumn, Input, Label, LeftContainer, ProductColumn, RightContainer, SizeColumn } from "./ProductInfoStyle";
import SizeModal from './../Modals/SizeModal';
import ColorModal from '../Modals/ColorModal';


const ProductInfo = () => {

    const [ShowSizeModal , setShowMSizeModal] = useState(false);
    const [showColorModal , setShowColorModal] = useState(false);

    const [productData , setProductData] = useState({
        productName : "",
        productCount : "",
        productSize : [],
        productColor : [],
        productCost : ""
    })

    const changeHandler = (e) => {
        setProductData({
            ...productData,
            [e.target.name] : e.target.value
        })
    } 

    return (
        <Container>
            <RightContainer>
                <ProductColumn>
                    <Label>نام کامل محصول به همراه برند</Label>
                    <Input onChange={changeHandler} value={productData.productName} name="productName" placeholder='مثال : وان حمام'/>
                </ProductColumn>
            </RightContainer>

            <LeftContainer>
                <CountColumn>
                    <Label>تعداد</Label>
                    <Input onChange={changeHandler} value={productData.productCount} name="productCount" placeholder='مثال : 5'/>
                </CountColumn>

                <SizeColumn>
                    <Label>سایز بندی</Label>
                    <button onClick={() => {setShowMSizeModal(!ShowSizeModal)}}>انتخاب</button>
                </SizeColumn>

                {
                    ShowSizeModal && 
                        <SizeModal
                            headerTitle = "لطفا سایزبندی خود را به همراه تعداد هر کدام وارد نمایید"
                            inputLabel="سایز"
                            Quantity="تعداد (به عدد)"
                            setShowMSizeModal = {setShowMSizeModal}
                        />  
                }

                <ColorColumn>
                    <Label>رنگ بندی</Label>
                    <button onClick={() => {setShowColorModal(!showColorModal)}}>انتخاب</button>
                </ColorColumn>

                {
                    showColorModal && 
                        <ColorModal
                            headerTitle = "لطفا رنگ بندی خود را به همراه تعداد هر کدام وارد نمایید"
                            inputLabel="رنگ"
                            Quantity="تعداد (به عدد)"
                            setShowColorModal = {setShowColorModal}
                        />
                }

                <CostColumn>
                    <Label>قیمت</Label>
                    <Input onChange={changeHandler} value={productData.productCost} name="productCost" placeholder='مثال : 50000'/>
                </CostColumn>
            </LeftContainer>

            <ButtonsContainer>
                <Label>عملیات</Label>
                <Buttons>
                    <button style={{backgroundColor:"blue"}}>ثبت</button>
                    <button style={{backgroundColor:"red"}}>حذف</button>
                </Buttons>
            </ButtonsContainer>
        </Container>
    );
};

export default ProductInfo;