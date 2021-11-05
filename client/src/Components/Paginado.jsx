import React from "react";
import {Link} from "react-router-dom";
import styled from "styled-components";
import "./Css-modules/number.module.css"



export default function Paginado({countriesPerPage, allCountries, paginado}){

    const pageNumber = [];

    for(let i = 1; i <= Math.ceil(allCountries/countriesPerPage); i++){
        pageNumber.push(i)
    };

    const NavStyle = styled.nav`
    display: flex;    
    flex-direction: row;
    justify-content: space-evenly;
    border: black 1px solid;    
    `

    const StyledLi = styled.li`
    text-decoration: none;    
    list-style: none; 
    display: inline-flex;
    padding: 0;
    margin: 20px;           
    `
    

    return(
        <NavStyle>
            <ul>
                {
                    pageNumber && pageNumber.map(number => (
                        <StyledLi key={number}>
                            <Link to='Home'>
                        <a href onClick={()=> paginado(number)}>{number}</a>
                            </Link>
                        </StyledLi>
                    ))
                }
            </ul>
        </NavStyle>
    )

}