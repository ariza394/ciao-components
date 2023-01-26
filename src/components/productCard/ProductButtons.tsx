import React from 'react';
import styled from "styled-components";
import { useContext } from 'react';
import { ProductCardContext } from "./ProductCard";

const ButtonsContainer = styled.div`
    
    display: flex;
    justify-content: center;
    
`;

const ButtonStyled = styled.button<ButtonProps>`
    background-color:${props => props.onDisabled ? 'grey' : '#fff'};
`;

interface ButtonProps {
    onDisabled:boolean;
}

export const ProductButtons = ({...rest}) => {

    const { total, increaseBy, isMaxReached} = useContext(ProductCardContext);

    return(
        <ButtonsContainer {...rest}>
            <ButtonStyled onDisabled={isMaxReached()} onClick={() => increaseBy(1)}>+</ButtonStyled>
            <h5>{total}</h5>
            <button onClick={() => increaseBy(-1)}>-</button>
        </ButtonsContainer>
    );
}