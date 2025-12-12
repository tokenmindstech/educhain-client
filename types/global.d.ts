/**
 * @file global.d.ts
 * @description This file contains global type declarations for the project.
 */

export {};

declare global {
  interface NavMenuItem {
    title: string;
    href: string;
  }

  interface UtilityItem {
    title: string;
    description: string;
    list: string[];
  }

  interface RoadmapItem {
    timeline: string;
    milestones: string[];
  }

  interface SocialItem {
    label: string;
    icon: React.ReactNode;
    href: string;
  }

  interface TokenInfo {
    name: string;
    ticker: string;
    network: string;
    totalSupply: number;
    utility: string;
    buyUrl: string;
  }

  interface APITokenInfoResponse {
    success: boolean;
    response: {
      ico: string;
      total: string;
      total_amount: string;
      total_token: number;
      sold: string;
      sold_amount: string;
      sold_token: number;
      progress: number;
      price: number;
      bonus: {
        base: number;
        start: string;
        end: string;
        timezone: string;
        amount: { [key: string]: number };
      };
      start: string;
      end: string;
      timezone: string;
      min: number;
      max: number;
      soft: {
        cap: number;
        amount: string;
        percent: number;
      };
      hard: {
        cap: number;
        amount: string;
        percent: number;
      };
    };
  }
}
