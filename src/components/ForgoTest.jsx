import { useMemo } from "react";

const TREE_H = 10, CHAR_W = 12, ROW_H = 22, SPIN = 5, TAU = Math.PI * 2;
const ORNAMENTS = ["#ff5a5a", "#ffd23f", "#4aa3ff", "#ff6bd6", "#4de1ff"];

function buildTree() {
  const pts = [];
  const add = (row, radius, angle, color, glow = false) => pts.push({ row, radius, angle, color, glow });
  for (let y = 0; y < TREE_H; y++) {
    const r = 0.5 + y * 0.5, n = Math.floor(r * 8) + 4;
    for (let i = 0; i < n; i++) {
      const orn = Math.random() < 0.07;
      add(y + 1, r * 2 * CHAR_W, (i / n) * TAU + y * 0.5, orn ? ORNAMENTS[Math.floor(Math.random() * 5)] : "#3ddc84", orn);
    }
  }
  for (let y = TREE_H; y < TREE_H + 2; y++)
    for (let i = 0; i < 8; i++) add(y + 1, 0.8 * 2 * CHAR_W, (i / 8) * TAU, "#b5733a");
  add(0, 0, 0, "#fff176", true);
  return pts;
}

export default function ForgoTest() {
  const tree = useMemo(buildTree, []);
  const vars = { "--char-w": `${CHAR_W}px`, "--row-h": `${ROW_H}px`, "--stage-h": `${(TREE_H + 3) * ROW_H}px`, "--T": `${SPIN}s` };

  return (
    <div className="xt-root" style={vars}>
      <div className="xt-stage">
        {tree.map((p, i) => (<span key={i} className="xt-char" style={{"--R": `${p.radius}px`,top: p.row * ROW_H,color: p.color,textShadow: p.glow ? `0 0 8px ${p.color}` : "none",animationDelay: `${-(((p.angle + Math.PI / 2) / TAU) % 1) * SPIN}s, ${-(p.angle / TAU) * SPIN}s`,}} >#</span>))}
      </div>
    </div>
  );
}