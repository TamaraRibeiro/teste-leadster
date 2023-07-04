"use client";

import { styled } from "styled-components";

export const Page = styled.div`
  padding: 2rem 0;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Text = styled.p`
  font-weight: 500;
  padding-right: 0.5rem;
`;

export const UList = styled.ul`
  display: flex;
`;

export const List = styled.button`
  background: none;
  border: 1px solid #ffffff;
  font-size: 1rem;
  display: flex;
  padding: 0.2rem 0.5rem;
  &:focus {
    border: 1px solid #007eff;
    border-radius: 0.3rem;
  }
`;
