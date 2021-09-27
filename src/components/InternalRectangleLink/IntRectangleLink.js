import React from 'react';
import { useTranslation } from 'react-i18next';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

/* Internal Link component using the i18next translation + NavLink from React Router */

const StyledLink = styled.div`

width: 120px;

a{
    background-color: black;
    
    height: 40px;
    padding: 10px 30px;
    margin: 10px 0px;
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
    left: 95px;
    bottom: 33px;   
    transition: all 0.2s ease-in;
    opacity: 0;
} 
&:hover:after{
    opacity: 1;
}

`;

const IntRectangleLink = (props) => {

    const { t } = useTranslation();

    return (

        <StyledLink>
            <NavLink to={props.href}>
                {t(props.label)}
            </NavLink>
        </StyledLink>

    )
}

export default IntRectangleLink;