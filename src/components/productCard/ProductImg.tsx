import React from 'react';
import styled from "styled-components";
import image from "../../assets/coffee-mug2.png"

const ImgContainer = styled.div`
    
    display: flex;
    justify-content: center;

    && > img {
        width:300px;
        border-radius:5px;
        margin-top:0.2rem;
    }
    
`;

export interface ImgProps {
    img?:string;
}

export const ProductImg = ({img, ...rest}:ImgProps) => {

    let imgToShow;

    img ? imgToShow = img : imgToShow = image;
    
    return(
        <ImgContainer {...rest}>
            <img src={imgToShow} alt="" />
        </ImgContainer>
    );
};