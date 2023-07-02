"use client";

import { styled } from "styled-components";

export const Section = styled.section`
  
  display: flex;
  flex-direction: row;
  gap: 2rem;
`;

export const CardThumbnailRound = styled.div`
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  border-radius: 1rem;
  width: auto;
  box-shadow: 2px 13px 15px 0px rgba(232, 236, 238, 1);
`;

export const CardThumbnailFlat = styled.div`
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  border-radius: 0 0 1rem 1rem;
  width: auto;
  box-shadow: 2px 13px 15px 0px rgba(232, 236, 238, 1);
`;

export const Img = styled.img`
  border-radius: 1rem;
`;

export const Text = styled.p`
  padding: 1rem 2rem;
  color: #1c3c50;
  justify-content: center;
  font-weight: bold;
`;
