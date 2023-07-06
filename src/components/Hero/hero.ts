"use client";

import { device } from "@/styles/breakpoint";
import { styled } from "styled-components";

export const HeroStyle = styled.div`
  margin: 0.8rem 0;
  justify-content: center;
  display: flex;
  flex-direction: column;
  background-color: #eff8ff;
  padding: 6rem;
`;

export const Text = styled.p`
  margin: 0 auto;
  border-top: 1px solid #cfdae3;
  padding: 1rem 1.2rem;
  font-size: 0.9rem;

  @media ${device.laptop} {
    font-size: 1rem;  }
`;

export const TitleOne = styled.h1`
  font-size: 2.8rem;
  font-weight: 450;
  margin: 0 auto;
`;

export const TitleTwo = styled.h1`
  font-size: 3rem;
  font-weight: 650;
  margin: 0 auto;
  display: flex;
  position: relative;
  background-image: linear-gradient(-45deg, #2c83fb 0%, #1f76f0 100%);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  margin-bottom: 1rem;

  @media ${device.laptop} {
    font-size: 5rem;
  }
`;

export const Img = styled.div`
  position: absolute;
  bottom: 20px;
  right: -20px;

  @media ${device.laptop} {
    bottom: 38px;
    right: -18px;
  }
`;

export const Webinar = styled.p`
  margin: 0 auto;
  border: 2px solid #005ffe;
  font-weight: 600;
  font-size: 0.9rem;
  color: #0077ff;
  padding: 0.4rem 1.5rem;
  text-transform: uppercase;
  border-radius: 1rem 1rem 1rem 0.2rem;
  margin-bottom: 0.8rem;

  @media ${device.laptop} {
    font-size: 1rem;
  }
`;
