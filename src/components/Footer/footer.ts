"use client";

import { styled } from "styled-components";
import { StyledIconBase } from "@styled-icons/styled-icon";
import { device } from "@/styles/breakpoint";

export const FooterStyle = styled.footer`
  margin: 0 auto;
  max-width: 1140px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-bottom: 4rem;
`;

export const DivLogo = styled.div`
  padding: 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Text = styled.p`
  padding: 0.2rem;
  font-size: 11px;
  color: #58628e;
`;

export const DivLinks = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  margin: 0 auto;

  @media ${device.laptop} {
    padding-top: 1rem;
    display: flex;
    justify-content: space-between;
    margin: 0 4rem;
  }
`;

export const DivColumnSocial = styled.div`
  display: flex;
  flex-direction: column;
`;

export const TitleColumnSocial = styled.p`
  font-weight: 600;
  font-size: 14px;
  padding-bottom: 2rem;
`;

export const TextCaption = styled.p`
  color: #212121;
  font-weight: 500;
  padding-bottom: 0.5rem;
  text-decoration: none;
  font-size: 12px;
`;

export const TextContentSocial = styled.a`
  text-decoration: none;
  color: #4c547e;
  padding-left: 0.2rem;
`;

export const SocialButtons = styled.div`
  display: flex;
  justify-content: space-between;
  margin-right: 4rem;
  margin-bottom: 1.5rem;
  @media ${device.mobileL} {
    display: flex;
    justify-content: start;
    gap: 0.5rem;
  }
  ${StyledIconBase} {
    color: #e8eaf0;
    width: 2.2rem;
  }
`;
