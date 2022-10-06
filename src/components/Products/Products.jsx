import React, { useEffect, useState } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { getProducts } from '../../server/Actions/productAction';

// style
import { ProductsContainer } from './ProductsStyle';

import Product from "./Product/Product";

const Products = () => {

 
    const dispatch = useDispatch();
    const state = useSelector(state => state?.product?.products);

    useEffect(() => {
        dispatch(getProducts());
    }, [dispatch])

    
 

    return (
        <ProductsContainer>
            {
                state?.data?.result?.products.length > 0 ?
                    state?.data?.result?.products.map((item, index) => {
                        return (
                            <Product item = {item} key = {index} />
                        )
                    }) : "خالی"
            }
        </ProductsContainer>
    );
};

export default Products;