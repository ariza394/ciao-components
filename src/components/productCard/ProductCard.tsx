import React from 'react';
import styled from "styled-components";
import {createContext, useCallback, useState} from 'react';

export const ProductCardContext = createContext({} as CardContextProps);
const { Provider } = ProductCardContext;

export interface ProductCardProps {
    // children:React.ReactElement | React.ReactElement[];
    children:(args:ProductCardHandlers) => JSX.Element;
    initialValues?:InitialValues;
};

interface InitialValues {
    count?:number;
    maxCount?:number;
}

interface CardContextProps {
    total:number;
    setTotal: React.Dispatch<React.SetStateAction<number>>;
    increaseBy: (value:number) => void;
    isMaxReached:() => boolean;
};

interface ProductCardHandlers {
    count: number;
    isMaxCountReached: () => boolean;
    maxCount?: number;

    increaseBy: ( value: number ) => void;
    reset: () => void;
};

const ProductCardStyled = styled.div`
    max-width:320px;
    background-color: rgb(56, 56, 56);
    border-radius:5px;
    
`;

export const ProductCard = ({children, initialValues}:ProductCardProps) => {

    const [ total, setTotal ] = useState(initialValues?.count || 0);

    const increaseBy = (increase:number) => {

        const newNumber = initialValues?.maxCount && total + increase >= initialValues?.maxCount ? initialValues?.maxCount : total + increase;
        setTotal(newNumber);
    }
    
    const isMaxReached = useCallback(() => {
        if (initialValues?.maxCount === total) {
            return true;
        }
        return false;
    },[total, initialValues?.maxCount])


    const reset = () => {
        setTotal(initialValues?.count || 0);
    }

    return ( 
        <Provider value={{
            total,
            setTotal,
            increaseBy,
            isMaxReached
        }}>

        
            <ProductCardStyled>
                {
                    children({
                        count:total,
                        isMaxCountReached:isMaxReached,
                        reset,
                        increaseBy
                    })
                }
            </ProductCardStyled>
        </Provider>
     );
}
 

/* ProductCard.Img = ProductImg;
ProductCard.Title = ProductTitle;
ProductCard.Buttons = ProductButtons; */