import React from 'react';
import styled from "styled-components";

const TitleStyled = styled.h2`
    margin:0 auto;
    color:#fff;

    text-align:center;
`;

export interface TitleProps {
    title:string;
};

export const ProductTitle = ({title, ...rest}:TitleProps) => {

    return(
        <TitleStyled {...rest}>{title}</TitleStyled>
    );
};