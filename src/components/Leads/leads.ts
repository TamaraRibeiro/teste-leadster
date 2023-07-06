"use client";

import { device } from "@/styles/breakpoint";
import { styled } from "styled-components";

export const Section = styled.section`
  display: flex;
  justify-content: center;
  margin: 0 auto;
  background-color: #eff8ff;
`;

export const LeadStyle = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  padding: 2rem;

  @media ${device.laptop} {
    flex-direction: row;
  }
`;

export const TextTitle = styled.p`
  color: #1c3c50;
  font-size: 1.5rem;
  font-weight: 450;
  margin: 0 auto;
  @media ${device.laptop} {
    font-size: 2rem;
  }
`;

export const DivImg = styled.div`
  margin: 0 auto;

`;

export const TextCreation = styled.p`
  color: #1c3c50;
  font-size: 1.2rem;
  font-weight: 450;
  padding: 1rem 0;

  @media ${device.laptop} {
    font-size: 1.5rem;
  }
`;

export const Img = styled.img`
  width: 25rem;
`;

export const DivStation = styled.div`
  border-top: 1px solid #eff8ff;
`;

export const SectionText = styled.div`
  border-bottom: 1px solid #cfdae3;
  margin-bottom: 2rem;
`;

export const SectionTwo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media ${device.laptop} {
    align-items: normal;
    margin-left: 4rem;
  }
`;

export const SectionRdStation = styled.div`
  display: flex;
  align-items: center;
  gap: 2rem;
`;

export const Button = styled.button`
  text-transform: uppercase;
  background-color: #0083ff;
  border: 1px solid #0083ff;
  border-radius: 2rem;
  color: #ffffff;
  font-size: 0.8rem;
  font-weight: 600;
  padding: 1rem 0.5rem;
  width: 12rem;
`;

export const SectionRating = styled.div`
  margin: 0.5rem 0;
  display: flex;
  justify-content: space-between;
`;

export const TextCard = styled.p`
  color: #1c3c50;
  font-size: 0.8rem;
  font-weight: 400;
  padding: 0 0.3rem;
`;

export const TextRating = styled.p`
  color: #1c3c50;
  font-size: 0.8rem;
  font-weight: 400;
  padding-left: 0.3rem;
`;
