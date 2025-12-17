import React from 'react';

export interface Service {
  title: string;
  description: string;
  icon: React.ReactNode;
}

export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
  isError?: boolean;
}

export interface ContactInfo {
  phone: string;
  link1: string;
  link2: string;
  link3: string;
  addressUrl: string;
}

export const BUSINESS_INFO: ContactInfo = {
  phone: "1 809-530-5636",
  link1: "https://tr.ee/EepXqhtIpG",
  link2: "https://tr.ee/EepXqhtIpG",
  link3: "https://tr.ee/lC38IH8FqS",
  addressUrl: "https://www.google.com/maps/place/Comercial+N%26K/@18.4583512,-69.99515,17.53z/data=!4m5!3m4!1s0x8ea561cfd99efdeb:0xa630ed9f7a7bff6!8m2!3d18.4585594!4d-69.9928274?shorturl=1"
};