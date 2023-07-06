" use client";

import { styled } from "styled-components";
import { StyledIconBase } from "@styled-icons/styled-icon";

export const Section = styled.section`
  display: none;
  width: 100%;
  height: 100%;
  position: fixed;
  background-color: #c2e5ffbb;
  justify-content: center;
  padding: 1rem;
  z-index: 1;
  left: 0;
  top: 0;
`;

export const Icons = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  background-color: #FFF;
  left: 0;
  bottom: 0;
  padding: 0.5rem;
`;

export const IconButton = styled.button`
  margin: 0.5rem 0;
  background-color: transparent;
  border-radius: 0.3rem;
  border-color: transparent;
  display: flex;
  width: auto;
  padding-right: 0.5rem;
  align-items: center;
  margin-right: 0.5rem;
  ${StyledIconBase} {
    width: 2rem;
    padding: 0.4rem;
    height: 2rem;
    margin-right: 0.5rem;
  }
  &:nth-child(1) {
    background-color: #c2f4ea;
    color: #00b185;
    ${StyledIconBase} {
      color: #00b185;
      background-color: #a0eedf;
      width: 2rem;
      height: 2rem;
      margin-right: 0.5rem;
    }
  }
  &:nth-child(2) {
    background-color: #c2e5ff;
    color: #1075ea;
    ${StyledIconBase} {
      color: #1075ea;
      background-color: #a0d9ff;
      width: 2rem;
      height: 2rem;
      margin-right: 0.5rem;
    }
  }
  &:nth-child(3) {
    background-color: #fff7d0;
    color: #ab952d;
    ${StyledIconBase} {
      color: #ab952d;
      background-color: #fff1a0;
      width: 2rem;
      height: 2rem;
      margin-right: 0.5rem;
    }
  }
  &:nth-child(4) {
    background-color: #e8eef2;
    color: #8a939c;
    ${StyledIconBase} {
      color: #8a939c;
      background-color: #cfdee7;
      width: 2rem;
      height: 2rem;
      margin-right: 0.5rem;
    }
  }
`;

export const ModalContent = styled.div`
  display: flex;
  position: relative;
  justify-content: center;
  margin-top: 5rem;
  border-top: 0.15rem solid #007eff;
  flex-direction: column;
  width: 525px;
  height: 700px;
  border-radius: 1rem;
  background-color: #fff;
`;

export const Webinar = styled.div`
  margin: 0 auto;
  padding-bottom: 2rem;
  display: flex;
  flex-direction: column;
  display: flex;
  font-weight: 600;
`;

export const TitleWebinar = styled.p`
  padding-right: 0.2rem;
  color: #007eff;
  font-weight: 600;
  font-size: 17px;
  align-items: center;
`;

export const TextWebinar = styled.p`
  color: #002240;
  font-weight: 600;
  font-size: 17px;
  text-align: center;
  display: flex;
`;

export const ButtonClose = styled.button`
  position: absolute;
  right: 18px;
  top: 10px;
  background-color: transparent;
  border: none;
  ${StyledIconBase} {
    color: #6887c6;
    width: 0.9rem;
  }
`;

export const TextOne = styled.div`
  color: #002240;
  display: flex;
  font-size: 18px;
  align-items: center;
`;
export const Video = styled.iframe`
  width: auto;
  height: 300px;
  border: none;
`;

export const Description = styled.div`
  margin: 0 auto;
  padding: 0 2rem;
  display: flex;
  flex-direction: column;
`;

export const Downloads = styled.div`
  padding: 0 2rem;
  display: flex;
  flex-direction: column;
`;

export const Buttons = styled.div`
  border-top: 1px solid #d9dde0;
  display: flex;
`;

export const Title = styled.p`
  color: #002240;
  font-weight: 600;
  font-size: 14px;
  padding-top: 1rem;
  padding-bottom: 0.5rem;
`;

export const Text = styled.p`
  font-size: 15px;
  font-weight: 450;
  color: #002240;
  border-top: 1px solid #d9dde0;
  padding-top: 0.5rem;
  text-align: justify;
`;
