import React from 'react';
import { useTranslation } from 'react-i18next';
import styled from 'styled-components';


/* External Link component using the i18next translation */

const StyledLink = styled.div`
a{
    background-color: black;
    width: 120px;
    height: 40px;
    padding: 10px 30px;
    margin: 10px 20px;
    border: none;
    color: white;
    text-align: center;
    text-decoration: none;
    font-size: 16px;
    display: inline-block;

    &:visited{
          color: white;
    };

    &:hover{
        color: white;
        background-color: #c7a86f;
        transition: all 0.3s ease-in;
    };
}

&:after{
    content: "";
    display: block;
    position: relative;
    width: 30px;
    height: 30px;
    background-color: transparent;
    border-right: 2px solid black;
    border-bottom: 2px solid black;
    left: 117px;
    bottom: 33px;   
    transition: all 0.2s ease-in;
    opacity: 0;
} 
&:hover:after{
    opacity: 1;
}

`;

const ExtRectangleLink = (props) => {

    const { t } = useTranslation();

    return (

        <StyledLink>
            <a href={props.href}>
                {t(props.label)}
            </a>
        </StyledLink>

    )
}

export default ExtRectangleLink;