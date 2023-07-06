"use client";

import { styled } from "styled-components";
import { device } from "@/styles/breakpoint";

export const Section = styled.section`
  margin: 4rem auto;
  display: flex;
  flex-direction: column;
  justify-content: center;

  @media ${device.laptop} { 
    max-width: 1024px;
  }

  @media ${device.desktop} {
    max-width: 1400px;
  }
`;

export const DivOne = styled.div`
  display: flex;
  margin-bottom: 2rem;
  flex-direction: column;

  @media ${device.laptop} {
    flex-direction: row;
    align-items: center;
    justify-content: space-between; 
  }
`;

export const DivButton = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
  justify-content: center;
  margin: 0 auto;

  @media ${device.laptop} {
    flex-direction: row;
    margin: 0;
  }
`;

export const DivDate = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;
  font-weight: bold;
  margin-top: 1rem;

  @media ${device.laptop} {
    justify-content: space-between;
    margin-top: 0;
  }
`;
export const Select = styled.select`
  padding: 0.5rem;
  border: 1px solid #cfdae3;
  border-radius: 0.5rem;
  background-color: #ffffff;
  font-weight: 400;
`;


