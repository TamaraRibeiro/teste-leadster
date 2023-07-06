"use client";

import { styled } from "styled-components";
import { StyledIconBase } from "@styled-icons/styled-icon";

export const Section = styled.section`
  display: flex;
  flex-direction: row;
  gap: 2rem;
`;

export const Text = styled.p`
  padding: 1rem 2rem;
  color: #1c3c50;
  justify-content: center;
  font-weight: bold;
`;

export const Img = styled.img`
  border-radius: 1rem 1rem 0 0;
  display: block;
  width: 100%;
  height: auto;
  transition: 0.6s ease;
`;

export const DivImg = styled.div`
  position: relative;
  display: flex;
  border-radius: 1rem 1rem 0 0;
`;

export const ButtonPlay = styled.button`
  display: flex;
  justify-content: space-between;
  margin-right: 4rem;
  margin-bottom: 1.5rem;
  position: absolute;
  border: 0;
  background-color: transparent;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  opacity: 0;
  ${StyledIconBase} {
    color: #ffffff;
    width: 3.5rem;
  }
`;

export const CardThumbnail = styled.div`
  margin: 0 auto;
  position: relative;
  display: flex;
  flex-direction: column;
  border-radius: 1rem;
  width: auto;
  box-shadow: 2px 13px 15px 0px rgba(232, 236, 238, 1);
  &:hover {
    ${DivImg} {
      background-color: rgba(0, 186, 255, 0.6);
    }
    ${Img} {
      opacity: 0.6;
    }
    ${Text} {
      color: #007eff;
      transition: 0.7s ease;
    }
    ${ButtonPlay} {
      opacity: 1;
    }
  }
`;

