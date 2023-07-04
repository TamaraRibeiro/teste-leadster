"use client";

import { styled } from "styled-components";

export const Section = styled.section`
  max-width:1140px;
  margin: 4rem auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const DivOne = styled.div`
  display: flex;
  margin-bottom: 2rem;
  flex-direction: row;
  justify-content: space-between;
`;

export const DivButton = styled.div`
  display: flex;
  flex-direction: row;
  gap: 0.8rem;
  padding-right: 4rem;
  justify-content: space-between;
`;

export const DivDate = styled.div`
  padding-left: 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 0.5rem;
  font-weight: bold;
`;
export const Select = styled.select`
  padding: 0.5rem;
  border: 1px solid #000000;
  border-radius: 0.5rem;
  background-color: #ffffff;
  font-weight: 400;
`;


