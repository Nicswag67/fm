// mock.ts
import type { PlayerStatMarket } from "./types";

export const playerMarkets: PlayerStatMarket[] = [
  {
    id: "nba-2025-08-12-den-phx-murray-pts",
    playerName: "Jamal Murray",
    team: "DEN",
    opponent: "PHX",
    startTime: "2025-08-12T19:30:00-06:00",
    league: "NBA",
    stat: "Points",
    line: 24.5,
    price: 0.56,
    liquidity: 12000,
    status: "open",
    headshotUrl: "/players/murray.png"
  },
  {
    id: "nba-2025-08-12-den-phx-jokic-reb",
    playerName: "Nikola Jokić",
    team: "DEN",
    opponent: "PHX",
    startTime: "2025-08-12T19:30:00-06:00",
    league: "NBA",
    stat: "Rebounds",
    line: 12.5,
    price: 0.52,
    liquidity: 15000,
    status: "open",
    headshotUrl: "/players/jokic.png"
  },
  {
    id: "nfl-2025-09-08-den-kc-wilson-pass",
    playerName: "Bo Nix",
    team: "DEN",
    opponent: "KC",
    startTime: "2025-09-08T18:20:00-06:00",
    league: "NFL",
    stat: "Passing Yards",
    line: 235.5,
    price: 0.48,
    liquidity: 9800,
    status: "open",
    headshotUrl: "/players/nix.png"
  }
  // add more…
];
