'use client'

import { styled } from "styled-components";


export const ButtonStyle = styled.button<{ $selected?: boolean; }>`
    /* background: ${props => props.$selected ? "#1c3c50" : "#1c3c50"}; */
    /* color: ${props => props.$selected ? "#1c3c50" : "#ffffff"}; */

    border: 1px solid black;
    border-radius: 2rem;
    border-color: black;
    font-weight: 400;
    &:hover {
        color: #007eff;
        border-color: #007eff;
    }
    padding: 0.5rem 1rem;
    background-color: white;
`;