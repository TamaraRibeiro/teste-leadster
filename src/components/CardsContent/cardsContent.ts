"use client";

import { device } from "@/styles/breakpoint";
import { styled } from "styled-components";

export const Section = styled.section`
  margin: 0 auto;
  display: flex;
  flex-direction: row;
  justify-content: center;
`;

export const DivCards = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;
  border-top: 1px solid #cfdae3;
  border-bottom: 1px solid #cfdae3;
  padding: 3rem 0 4rem 0;

  @media ${device.laptop} {
    margin: 0 auto; 
    grid-template-columns: 1fr 1fr 1fr;
  }
`;
