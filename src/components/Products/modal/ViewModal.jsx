import React from 'react';

import { ModalContainer, ModalHeader, Title, ModalBody, Row, Col, ModalFooter, ModalContent } from '../../Modals/ModalStyles';
import { GrClose } from 'react-icons/gr';

const ViewModal = ({ item, setShowInfoModal }) => {
    return (
        <ModalContainer>
            <ModalContent>
                <ModalHeader>
                    <GrClose onClick={() => setShowInfoModal(false)} cursor="pointer" color='red' size={20} />
                    <Title>ویژگی های ثبت شده</Title>
                </ModalHeader>
                <ModalBody>
                    <Row>
                        {
                            item?.colorFeature?.map((x, index) => {
                                return <p key={index}>{`${x?.color} = ${x?.count}`}</p>
                            })
                        }
                    </Row>
                    <hr style={{ width: "100%" }} />
                    <Row>
                        {
                            item?.sizeFeature?.map((x, index) => {
                                return <p key={index}>{`${x?.size} = ${x?.count}`}</p>
                            })
                        }
                    </Row>

                </ModalBody>
                <ModalFooter>
                    footer
                </ModalFooter>
            </ModalContent>
        </ModalContainer>
    );
};

export default ViewModal;