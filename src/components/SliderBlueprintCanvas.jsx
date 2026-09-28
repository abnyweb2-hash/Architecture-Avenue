import React, { useRef, useEffect } from 'react';

/**
 * Structural Amber Architectural Blueprint Component
 * Renders the EXACT identical house as the right-hand photo,
 * transformed into a rich Warm Ochre / Structural Amber CAD blueprint (#D8A56E & #BD8750):
 *  - 100% identical size, position, scale, and perspective (1:1 alignment)
 *  - High-precision SVG Laplacian edge extraction in Warm Ochre / Clay (#D8A56E)
 *  - High-contrast matte background with zero haze
 *  - Animated Warm Ochre laser scan sweep & ambient particles
 *  - Technical architectural dimension callouts and elevation levels
 */
export default function SliderBlueprintCanvas() {
  const overlayCanvasRef = useRef(null);

  useEffect(() => {
    const canvas = overlayCanvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let raf;
    let time = 0;

    let W = (canvas.width = canvas.parentElement.clientWidth);
    let H = (canvas.height = canvas.parentElement.clientHeight);

    const onResize = () => {
      if (!canvas?.parentElement) return;
      W = canvas.width = canvas.parentElement.clientWidth;
      H = canvas.height = canvas.parentElement.clientHeight;
    };
    window.addEventListener('resize', onResize);

    // Unified Structural Amber Palette
    const OCHRE = 'rgba(216, 165, 110,';       // #D8A56E Warm Ochre
    const TERRACOTTA = 'rgba(189, 135, 80,';   // #BD8750 Deeper Terracotta
    const HIGHLIGHT = 'rgba(235, 195, 150,';   // Ochre Light Highlight

    // Floating micro-particles
    const particles = Array.from({ length: 25 }, () => ({
      x: Math.random(),
      y: Math.random(),
      vy: -0.0003 - Math.random() * 0.0003,
      r: Math.random() * 1.4 + 0.5,
      alpha: Math.random() * 0.45 + 0.25,
    }));

    let scanPos = 0;
    let scanDir = 1;

    const render = () => {
      time += 0.015;
      ctx.clearRect(0, 0, W, H);

      // ── 1. Animated Warm Ochre laser scan bar ──
      scanPos += scanDir * 0.002;
      if (scanPos > 1) scanDir = -1;
      if (scanPos < 0) scanDir = 1;

      const scanX = scanPos * W;
      const scanGrd = ctx.createLinearGradient(scanX - 40, 0, scanX + 40, 0);
      scanGrd.addColorStop(0, `${OCHRE}0)`);
      scanGrd.addColorStop(0.5, `${OCHRE}0.18)`);
      scanGrd.addColorStop(1, `${OCHRE}0)`);
      ctx.fillStyle = scanGrd;
      ctx.fillRect(scanX - 40, 0, 80, H);

      // Center laser wire
      ctx.strokeStyle = `${HIGHLIGHT}0.55)`;
      ctx.lineWidth = 1;
      ctx.setLineDash([5, 5]);
      ctx.beginPath();
      ctx.moveTo(scanX, 0);
      ctx.lineTo(scanX, H);
      ctx.stroke();
      ctx.setLineDash([]);

      // ── 2. Floating Ochre atmospheric particles ──
      particles.forEach((p) => {
        p.y += p.vy;
        if (p.y < 0) p.y = 1;
        const px = p.x * W;
        const py = p.y * H;
        const pulse = 0.5 + 0.5 * Math.sin(time * 2 + p.x * 10);
        ctx.beginPath();
        ctx.arc(px, py, p.r, 0, Math.PI * 2);
        ctx.fillStyle = `${OCHRE}${p.alpha * pulse})`;
        ctx.fill();
      });

      // ── 3. Corner CAD registration marks ──
      const markSize = 14;
      const corners = [
        [24, 24, 1, 1],
        [W - 24, 24, -1, 1],
        [24, H - 24, 1, -1],
        [W - 24, H - 24, -1, -1],
      ];
      ctx.strokeStyle = `${OCHRE}0.65)`;
      ctx.lineWidth = 1.2;
      corners.forEach(([cx, cy, dx, dy]) => {
        ctx.beginPath();
        ctx.moveTo(cx, cy + dy * markSize);
        ctx.lineTo(cx, cy);
        ctx.lineTo(cx + dx * markSize, cy);
        ctx.stroke();
      });

      // ── 4. Technical Architectural Dimension Callouts ──
      const topDimY = H * 0.12;
      const xStart = W * 0.15;
      const xMid = W * 0.44;
      const xEnd = W * 0.88;

      ctx.strokeStyle = `${OCHRE}0.5)`;
      ctx.lineWidth = 0.8;
      ctx.setLineDash([3, 3]);

      ctx.beginPath();
      ctx.moveTo(xStart, topDimY - 10); ctx.lineTo(xStart, topDimY + 10);
      ctx.moveTo(xMid, topDimY - 10); ctx.lineTo(xMid, topDimY + 10);
      ctx.moveTo(xEnd, topDimY - 10); ctx.lineTo(xEnd, topDimY + 10);
      ctx.moveTo(xStart, topDimY); ctx.lineTo(xEnd, topDimY);
      ctx.stroke();
      ctx.setLineDash([]);

      const drawArrow = (x, y, dir) => {
        ctx.fillStyle = `${TERRACOTTA}0.85)`;
        ctx.beginPath();
        ctx.moveTo(x, y);
        ctx.lineTo(x + dir * 6, y - 3);
        ctx.lineTo(x + dir * 6, y + 3);
        ctx.closePath();
        ctx.fill();
      };
      drawArrow(xStart, topDimY, 1);
      drawArrow(xMid, topDimY, -1);
      drawArrow(xMid, topDimY, 1);
      drawArrow(xEnd, topDimY, -1);

      ctx.font = '9px "Space Grotesk", monospace';
      ctx.fillStyle = `${HIGHLIGHT}0.90)`;
      ctx.textAlign = 'center';
      ctx.fillText('7.60m TOWER BLOCK', (xStart + xMid) / 2, topDimY - 4);
      ctx.fillText('12.40m LANAI PAVILION', (xMid + xEnd) / 2, topDimY - 4);

      // Vertical elevation markers on left
      const levelX = W * 0.10;
      const levels = [
        { y: H * 0.22, text: '+7.20m ROOF PARAPET' },
        { y: H * 0.52, text: '+3.60m FIRST FLOOR' },
        { y: H * 0.78, text: '±0.00m TIMBER DECK' },
      ];
      levels.forEach(({ y, text }) => {
        ctx.strokeStyle = `${OCHRE}0.45)`;
        ctx.lineWidth = 0.8;
        ctx.setLineDash([2, 4]);
        ctx.beginPath();
        ctx.moveTo(levelX - 12, y);
        ctx.lineTo(levelX + 24, y);
        ctx.stroke();
        ctx.setLineDash([]);

        ctx.fillStyle = `${HIGHLIGHT}0.90)`;
        ctx.font = '8.5px "Space Grotesk", monospace';
        ctx.textAlign = 'left';
        ctx.fillText(text, levelX + 28, y + 3);
      });

      // Structural column crosshairs
      const crosshairs = [
        [W * 0.44, H * 0.62],
        [W * 0.54, H * 0.64],
        [W * 0.74, H * 0.65],
      ];
      crosshairs.forEach(([cx, cy]) => {
        const pulse = 0.45 + 0.35 * Math.sin(time * 3 + cx);
        ctx.strokeStyle = `${OCHRE}${pulse})`;
        ctx.lineWidth = 1;
        ctx.beginPath();
        ctx.arc(cx, cy, 5, 0, Math.PI * 2);
        ctx.moveTo(cx - 8, cy); ctx.lineTo(cx + 8, cy);
        ctx.moveTo(cx, cy - 8); ctx.lineTo(cx, cy + 8);
        ctx.stroke();
      });

      // Bottom CAD title bar
      ctx.textAlign = 'left';
      ctx.font = 'bold 9.5px "Space Grotesk", monospace';
      ctx.fillStyle = `${HIGHLIGHT}0.90)`;
      ctx.fillText('AA-CAD // OBSIDIAN RESIDENCE // STRUCTURAL OCHRE BLUEPRINT', 24, H - 28);
      ctx.font = '8px "Space Grotesk", monospace';
      ctx.fillStyle = `${OCHRE}0.70)`;
      ctx.fillText('SCALE 1:50 · LOD-400 BIM · 3D ORTHOGRAPHIC PROJECTION', 24, H - 16);

      raf = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener('resize', onResize);
    };
  }, []);

  return (
    <div className="relative w-full h-full bg-[#070707] overflow-hidden select-none">
      {/* ── 1. SVG Filter Definition for Structural Warm Ochre (#D8A56E) Blueprint ── */}
      <svg className="absolute w-0 h-0 pointer-events-none" aria-hidden="true">
        <defs>
          <filter id="golden-blueprint-edges" colorInterpolationFilters="sRGB">
            {/* Convert to luminance grayscale */}
            <feColorMatrix
              type="matrix"
              values="
                0.299 0.587 0.114 0 0
                0.299 0.587 0.114 0 0
                0.299 0.587 0.114 0 0
                0     0     0     1 0"
              result="gray"
            />
            {/* Laplacian edge convolution for sharp architectural contours */}
            <feConvolveMatrix
              order="3"
              kernelMatrix="
                -1 -1 -1
                -1  8 -1
                -1 -1 -1"
              in="gray"
              result="edges"
              preserveAlpha="true"
            />
            {/* High-contrast threshold: cuts out all background haze to pure black, sharpens lines */}
            <feComponentTransfer in="edges" result="brightEdges">
              <feFuncR type="linear" slope="4.8" intercept="-0.16" />
              <feFuncG type="linear" slope="4.8" intercept="-0.16" />
              <feFuncB type="linear" slope="4.8" intercept="-0.16" />
            </feComponentTransfer>
            {/* Warm Ochre Color Matrix: #D8A56E (R: 216/255=0.847, G: 165/255=0.647, B: 110/255=0.431) */}
            <feColorMatrix
              type="matrix"
              in="brightEdges"
              values="
                0.847 0 0 0 0
                0.647 0 0 0 0
                0.431 0 0 0 0
                0     0 0 1 0"
              result="ochreLines"
            />
            {/* Subtle warm amber/terracotta glow */}
            <feGaussianBlur in="ochreLines" stdDeviation="1.0" result="warmGlow" />
            <feMerge>
              <feMergeNode in="warmGlow" />
              <feMergeNode in="ochreLines" />
            </feMerge>
          </filter>
        </defs>
      </svg>

      {/* ── 2. Subtle Dark Base ── */}
      <img
        src="/comparison-house.jpg"
        alt="Architectural Blueprint Base"
        className="absolute inset-0 w-full h-full object-cover filter invert contrast-250 brightness-[0.08] sepia saturate-[400%] hue-rotate-[340deg]"
        style={{ opacity: 0.20 }}
      />

      {/* ── 3. High-Precision Structural Ochre Wireframe Contours ── */}
      <img
        src="/comparison-house.jpg"
        alt="Warm Ochre CAD Architectural Wireframe"
        className="absolute inset-0 w-full h-full object-cover"
        style={{
          filter: 'url(#golden-blueprint-edges)',
          mixBlendMode: 'screen',
        }}
      />

      {/* ── 4. Technical Architectural Warm Ochre CAD Grid ── */}
      <div
        className="absolute inset-0 pointer-events-none opacity-30"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(216, 165, 110, 0.10) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(216, 165, 110, 0.10) 1px, transparent 1px)
          `,
          backgroundSize: '32px 32px',
        }}
      />

      {/* ── 5. Subtle Vignette to Frame the Blueprint ── */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse at 50% 50%, transparent 40%, rgba(7,7,7,0.7) 80%, rgba(7,7,7,0.95) 100%)',
        }}
      />

      {/* ── 6. Dynamic CAD Overlay Canvas (Scan line, particles, dimensions) ── */}
      <canvas
        ref={overlayCanvasRef}
        className="absolute inset-0 w-full h-full pointer-events-none z-10"
      />
    </div>
  );
}
