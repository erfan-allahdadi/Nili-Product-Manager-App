import React, { useState } from 'react';

// styled component
import { Col, Head, ModalContainer, ModalBody, ModalContent, ModalDetail, ModalDetails, ModalHeader, Row, Title, ModalFooter, RowFeature } from './ModalStyles';

// icon
import { GrClose } from "react-icons/gr"

// redux
import { useDispatch, useSelector } from 'react-redux';

// action
import { addSizeFeature } from './../../server/Actions/modalAction';


const SizeModal = ({ headerTitle, inputLabel, Quantity, setShowMSizeModal }) => {

    const dispatch = useDispatch();
    const sizeFeature = useSelector(state => state?.modal?.sizeFeature);


    const [sizeFeatureData, setSizeFeatureData] = useState({
        size: "",
        count: ""
    })

    const handleCloseModal = () => {
        setShowMSizeModal(false)
    }

    const sizeFeatureChangeHandler = (e) => {
        setSizeFeatureData({
            ...sizeFeatureData,
            [e.target.name]: e.target.value
        })
    }

    const addSizeFeatureHandler = () => {
        if (sizeFeatureData.size && sizeFeatureData.count) dispatch(addSizeFeature(sizeFeatureData))
        console.log("feature", sizeFeature);
        setSizeFeatureData({
            size: "", count: ""
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
                            <input value={sizeFeatureData.size} name="size" onChange={sizeFeatureChangeHandler} type="text" />
                        </Col>
                        <Col>
                            <label htmlFor="">{Quantity}</label>
                            <input value={sizeFeatureData.count} name="count" onChange={sizeFeatureChangeHandler} type="text" />
                        </Col>
                        <Col>
                            <button onClick={addSizeFeatureHandler}>افزودن</button>
                        </Col>
                    </Row>
                </ModalBody>
                <ModalFooter>
                    {
                        sizeFeature?.map((item , index) => {
                            return (
                                <RowFeature key={index}>
                                    <span>{item.size}</span>
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

export default SizeModal;