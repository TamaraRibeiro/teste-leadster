"use client";

import { styled } from "styled-components";
import { device } from "@/styles/breakpoint";

export const DivCopyrightContent = styled.div`
  border-top: 1px solid #cfdae3;
  max-width: 1140px;
  padding: 2rem 0;
  display: flex;
  margin: 0 auto;
  justify-content: space-between;
  flex-direction: column;

  @media ${device.laptop} {
    flex-direction: row;
    justify-content: center;
  }
`;

export const Text = styled.p`
  display: flex;
  justify-content: center;
  color: #5c6b90;
  font-size: 12px;
  font-weight: 500;
  margin: 0 1rem;
  padding-bottom: 0.5rem;

  @media ${device.tablet} {
    margin: 0 auto;
    padding-bottom: 0.5rem;
  }
`;

export const Leadster = styled.a`
  text-decoration: none;
  color: #4ba5d8;
  padding-left: 0.2rem;
`;
