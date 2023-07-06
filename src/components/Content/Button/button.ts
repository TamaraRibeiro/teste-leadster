"use client";

import { device } from "@/styles/breakpoint";
import { styled } from "styled-components";

export const ButtonStyle = styled.button`
  border: 1px solid black;
  border-radius: 2rem;
  border-color: black;
  font-weight: 400;
  padding: 0.5rem 1rem;
  background-color: white;

  &:hover {
    color: #007eff;
    border-color: #007eff;
  }

  &:focus {
    border-color: #007eff;
    background-color: #0083ff;
    color: #ffffff;
  }
`;
