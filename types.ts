// types.ts
export type StatCategory =
  | "Points"
  | "Rebounds"
  | "Assists"
  | "Passing Yards"
  | "Rushing Yards"
  | "Receiving Yards"
  | "Goals"
  | "Shots";

export interface PlayerStatMarket {
  id: string;
  playerName: string;
  team: string;
  opponent: string;
  startTime: string; // ISO date
  league: "NBA" | "NFL" | "NHL" | "MLB" | "EPL";
  stat: StatCategory;
  line: number; // e.g., Over/Under line (e.g., 24.5 points)
  price: number; // quoted price / implied probability (0..1 or 0..100 depending on your design)
  liquidity?: number;
  status?: "open" | "suspended" | "settled";
  headshotUrl?: string;
}
