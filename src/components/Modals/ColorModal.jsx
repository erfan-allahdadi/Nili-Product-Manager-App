import React, { useState } from 'react';

// styled component
import { Col, Head, ModalContainer, ModalBody, ModalContent, ModalDetail, ModalDetails, ModalHeader, Row, Title, ModalFooter, RowFeature } from './ModalStyles';

// icon
import { GrClose } from "react-icons/gr"

// redux 
import { useDispatch, useSelector } from 'react-redux';

// action
import { addColorFeature } from '../../server/Actions/modalAction';


const ColorModal = ({headerTitle , inputLabel , Quantity , setShowColorModal}) => {

    const dispatch = useDispatch();
    const colorFeature = useSelector(state => state?.modal?.colorFeature);


    const [colorFeatureData, setColorFeatureData] = useState({
        color: "",
        count: ""
    })

    const handleCloseModal = () => {
        setShowColorModal(false)
    }

    const featureChangeHandler = (e) => {
        setColorFeatureData({
            ...colorFeatureData,
            [e.target.name]: e.target.value
        })
    }

    const addColorFeatureHandler = () => {
        if (colorFeatureData.color && colorFeatureData.count) dispatch(addColorFeature(colorFeatureData))
        console.log("colorFeature", colorFeature);
        setColorFeatureData({
            color: "", count: ""
        })
    }

    return (
        <ModalContainer>
            <ModalContent>
                <ModalHeader>
                    <GrClose onClick={handleCloseModal} cursor="pointer" color='red' size={20} />
                    <Title>{headerTitle}</Title>
                </ModalHeader>
                <ModalBody>
                    <Row>
                        <Col>
                            <label htmlFor="">{inputLabel}</label>
                            <input value={colorFeatureData.color} name="color" onChange={featureChangeHandler} type="text" />
                        </Col>
                        <Col>
                            <label htmlFor="">{Quantity}</label>
                            <input value={colorFeatureData.count} name="count" onChange={featureChangeHandler} type="text" />
                        </Col>
                        <Col>
                            <button onClick={addColorFeatureHandler}>افزودن</button>
                        </Col>
                    </Row>
                </ModalBody>
                <ModalFooter>
                    {
                        colorFeature?.map((item , index) => {
                            return (
                                <RowFeature key={index}>
                                    <span>{item.color}</span>
                                    <span>{item.count}</span>
                                </RowFeature>
                            )
                        })
                    }
                </ModalFooter>
            </ModalContent>
        </ModalContainer>
    );
};

export default ColorModal;