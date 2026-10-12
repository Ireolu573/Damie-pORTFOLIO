import type { ThemeId } from "./data/types";

const KEYS = ["--bg", "--ink", "--mute", "--line", "--card", "--rose", "--g1", "--g2", "--on-accent", "--h1", "--h2", "--h3", "--r1", "--r2", "--r3", "--b1", "--b2", "--b3"];

// "rose" is the default look and follows the visitor's light/dark setting.
const PALETTES: Record<Exclude<ThemeId, "rose">, string[]> = {
  berry: ["#FFF0F5","#4A1230","#9A5A78","#F2C9D8","#FADCE6","#C2185B","#FFC1D6","#F06292","#4A1230","#C2185B","#E040A0","#FF8A65","#4A1230","#A01650","#F48FB1","rgba(255,150,190,.5)","rgba(255,190,150,.4)","rgba(200,120,230,.3)"],
  lilac: ["#F3EEFB","#2E1F4A","#7C6A9C","#D9CCEE","#E6DCF6","#7A3FC4","#E9D5FF","#B48CE8","#2E1F4A","#7A3FC4","#D05CA8","#5B7BE0","#2E1F4A","#6B46B5","#C58AD9","rgba(180,140,232,.5)","rgba(250,190,220,.5)","rgba(120,160,240,.3)"],
  peach: ["#FFF2EA","#4A2118","#96685A","#F2D0BE","#FADCCB","#D2492F","#FFD1A8","#F28B6B","#4A2118","#D2492F","#F28B6B","#C9892B","#5A2418","#C2543A","#F5A27A","rgba(255,190,150,.55)","rgba(242,139,107,.35)","rgba(255,220,130,.4)"],
  sage: ["#F2F5EE","#26382C","#6E8574","#D3DDCB","#E1EAD9","#4F8A5E","#D5E6C3","#8FB48A","#26382C","#4F8A5E","#C9A55B","#D07A8E","#1F3A2B","#4F8A5E","#C9D8A4","rgba(160,200,150,.5)","rgba(240,215,160,.45)","rgba(220,150,170,.3)"],
  night: ["#14101C","#F7EEDC","#B8A98A","#3A3150","#231B33","#E9C27F","#F3D79C","#C9953F","#14101C","#E9C27F","#F7E3B5","#D98BA8","#0B0813","#3A2A66","#B8863A","rgba(120,80,190,.35)","rgba(201,149,63,.2)","rgba(217,139,168,.18)"],
};

export function applyTheme(id: ThemeId): void {
  const root = document.documentElement;
  KEYS.forEach((k) => root.style.removeProperty(k));
  if (id === "rose") return;
  PALETTES[id].forEach((value, i) => root.style.setProperty(KEYS[i], value));
}
