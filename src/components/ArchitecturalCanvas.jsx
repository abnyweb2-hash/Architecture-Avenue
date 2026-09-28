import React, { useRef, useEffect } from 'react';

export default function BlueprintCanvas() {
  const canvasRef = useRef(null);
  const interactionRef = useRef({
    rotY: -0.52,
    rotX: 0.30,
    targetRotY: -0.52,
    targetRotX: 0.30,
    isDragging: false,
    startX: 0,
    startY: 0,
    mouseNX: 0,
    mouseNY: 0,
    targetNX: 0,
    targetNY: 0,
  });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let animationFrameId;
    let W = (canvas.width = canvas.parentElement.clientWidth);
    let H = (canvas.height = canvas.parentElement.clientHeight);
    let time = 0;

    const handleResize = () => {
      if (!canvas?.parentElement) return;
      W = canvas.width = canvas.parentElement.clientWidth;
      H = canvas.height = canvas.parentElement.clientHeight;
    };
    window.addEventListener('resize', handleResize);

    const onMouseDown = (e) => {
      interactionRef.current.isDragging = true;
      interactionRef.current.startX = e.clientX;
      interactionRef.current.startY = e.clientY;
    };
    const onMouseMove = (e) => {
      const r = canvas.getBoundingClientRect();
      interactionRef.current.targetNX = ((e.clientX - r.left) / W - 0.5) * 2;
      interactionRef.current.targetNY = ((e.clientY - r.top) / H - 0.5) * 2;
      if (interactionRef.current.isDragging) {
        const dx = e.clientX - interactionRef.current.startX;
        const dy = e.clientY - interactionRef.current.startY;
        interactionRef.current.targetRotY += dx * 0.007;
        interactionRef.current.targetRotX += dy * 0.005;
        interactionRef.current.startX = e.clientX;
        interactionRef.current.startY = e.clientY;
      }
    };
    const onMouseUp = () => { interactionRef.current.isDragging = false; };

    const onTouchStart = (e) => {
      interactionRef.current.isDragging = true;
      interactionRef.current.startX = e.touches[0].clientX;
      interactionRef.current.startY = e.touches[0].clientY;
    };
    const onTouchMove = (e) => {
      if (!interactionRef.current.isDragging) return;
      const dx = e.touches[0].clientX - interactionRef.current.startX;
      const dy = e.touches[0].clientY - interactionRef.current.startY;
      interactionRef.current.targetRotY += dx * 0.007;
      interactionRef.current.targetRotX += dy * 0.005;
      interactionRef.current.startX = e.touches[0].clientX;
      interactionRef.current.startY = e.touches[0].clientY;
    };
    const onTouchEnd = () => { interactionRef.current.isDragging = false; };

    canvas.parentElement.addEventListener('mousedown', onMouseDown);
    window.addEventListener('mousemove', onMouseMove);
    window.addEventListener('mouseup', onMouseUp);
    canvas.parentElement.addEventListener('touchstart', onTouchStart, { passive: true });
    window.addEventListener('touchmove', onTouchMove, { passive: true });
    window.addEventListener('touchend', onTouchEnd);

    // ── Unified Structural Amber Palette ─────────────────────────────────
    const GRAPHITE = 'rgba(42, 42, 42, ';    // Deep Graphite #2A2A2A (Form Lines)
    const OCHRE = 'rgba(216, 165, 110, ';     // Warm Ochre/Clay #D8A56E (Active Accents)
    const TERRACOTTA = 'rgba(189, 135, 80, '; // Deeper Terracotta #BD8750 (Hover/Glow)

    // ── 3D House Vertex & Edge Geometry ────────────────────────────────────
    const buildGeometry = () => {
      const V = []; // vertices [x, y, z]
      const E = []; // edges [i, j, type]

      const add = (x, y, z) => { V.push([x, y, z]); return V.length - 1; };
      const edge = (a, b, t = 'primary') => E.push([a, b, t]);

      // Helper: rectangular prism
      const box = (cx, cy, cz, w, h, d, type = 'primary') => {
        const hw = w / 2, hh = h / 2, hd = d / 2;
        const i0 = V.length;
        // bottom face
        add(cx - hw, cy - hh, cz - hd);
        add(cx + hw, cy - hh, cz - hd);
        add(cx + hw, cy - hh, cz + hd);
        add(cx - hw, cy - hh, cz + hd);
        // top face
        add(cx - hw, cy + hh, cz - hd);
        add(cx + hw, cy + hh, cz - hd);
        add(cx + hw, cy + hh, cz + hd);
        add(cx - hw, cy + hh, cz + hd);
        // bottom
        edge(i0, i0 + 1, type); edge(i0 + 1, i0 + 2, type); edge(i0 + 2, i0 + 3, type); edge(i0 + 3, i0, type);
        // top
        edge(i0 + 4, i0 + 5, type); edge(i0 + 5, i0 + 6, type); edge(i0 + 6, i0 + 7, type); edge(i0 + 7, i0 + 4, type);
        // verticals
        edge(i0, i0 + 4, type); edge(i0 + 1, i0 + 5, type); edge(i0 + 2, i0 + 6, type); edge(i0 + 3, i0 + 7, type);
        return i0;
      };

      // Foundation podium
      box(0, -92, 0, 400, 16, 280, 'dim');

      // Reflecting pool
      box(-80, -85, 65, 180, 5, 130, 'pool');

      // Ground floor main block
      box(50, -40, -10, 260, 96, 200, 'secondary');

      // Interior floor-level divider hint
      const sf = V.length;
      add(-80, -40, -110); add(180, -40, -110);
      add(180, -40, 110);  add(-80, -40, 110);
      edge(sf, sf + 1, 'detail'); edge(sf + 1, sf + 2, 'detail'); edge(sf + 2, sf + 3, 'detail'); edge(sf + 3, sf, 'detail');

      // Cantilevered upper floor
      box(-50, 40, 0, 360, 76, 220, 'primary');

      // Deep cantilevered roof / canopy slab
      box(-70, 82, 0, 390, 14, 240, 'primary');

      // Roof garden parapet
      box(-68, 96, 0, 388, 10, 238, 'dim');

      // Vertical louver screen
      const louverCount = 18;
      for (let i = 0; i < louverCount; i++) {
        const lx = -220 + i * 14;
        const la = V.length;
        add(lx, 6, 120); add(lx, 82, 120);
        edge(la, la + 1, 'louver');
      }

      // Slim structural columns (accented in Warm Ochre)
      const cols = [[170, 0, 80], [170, 0, -90], [30, 0, -90], [-190, 0, 100], [-190, 0, -80]];
      cols.forEach(([cx, cy, cz]) => {
        const ca = V.length;
        add(cx, cy - 48, cz); add(cx, cy + 50, cz);
        edge(ca, ca + 1, 'column');
      });

      // Window cutouts
      const wins = [[-160, 55, -110], [-50, 55, -110], [70, 55, -110], [165, 55, -110]];
      wins.forEach(([wx, wy, wz]) => {
        const wa = V.length;
        add(wx - 24, wy - 24, wz); add(wx + 24, wy - 24, wz);
        add(wx + 24, wy + 24, wz); add(wx - 24, wy + 24, wz);
        edge(wa, wa + 1, 'glass'); edge(wa + 1, wa + 2, 'glass'); edge(wa + 2, wa + 3, 'glass'); edge(wa + 3, wa, 'glass');
        edge(wa, wa + 2, 'detail'); edge(wa + 1, wa + 3, 'detail');
      });

      // Ground floor windows
      const gwins = [[-60, -10, -110], [50, -10, -110], [150, -10, -110]];
      gwins.forEach(([wx, wy, wz]) => {
        const wa = V.length;
        add(wx - 26, wy - 28, wz); add(wx + 26, wy - 28, wz);
        add(wx + 26, wy + 28, wz); add(wx - 26, wy + 28, wz);
        edge(wa, wa + 1, 'glass'); edge(wa + 1, wa + 2, 'glass'); edge(wa + 2, wa + 3, 'glass'); edge(wa + 3, wa, 'glass');
      });

      // Ground axis grid
      for (let g = -5; g <= 5; g++) {
        const ga = V.length;
        add(g * 62, -85, -240); add(g * 62, -85, 240);
        edge(ga, ga + 1, 'grid');
        const gb = V.length;
        add(-290, -85, g * 48); add(290, -85, g * 48);
        edge(gb, gb + 1, 'grid');
      }

      return { V, E };
    };

    const { V, E } = buildGeometry();

    // Floating ambient ochre particles
    const particles = Array.from({ length: 45 }, () => ({
      x: (Math.random() - 0.5) * 900,
      y: (Math.random() - 0.5) * 500,
      z: (Math.random() - 0.5) * 700,
      vy: -0.18 - Math.random() * 0.28,
      r: Math.random() * 2 + 0.8,
      a: Math.random() * 0.6 + 0.2,
    }));

    // Laser scan
    let laserY = -140, laserDir = 1;

    const render = () => {
      time += 0.014;
      const ir = interactionRef.current;

      ir.rotY += (ir.targetRotY - ir.rotY) * 0.055;
      ir.rotX += (ir.targetRotX - ir.rotX) * 0.055;
      ir.mouseNX += (ir.targetNX - ir.mouseNX) * 0.06;
      ir.mouseNY += (ir.targetNY - ir.mouseNY) * 0.06;

      if (!ir.isDragging) ir.targetRotY += 0.0015;

      const rotY = ir.rotY + ir.mouseNX * 0.18;
      const rotX = ir.rotX + ir.mouseNY * 0.10;

      laserY += laserDir * 1.4;
      if (laserY > 150) laserDir = -1;
      if (laserY < -150) laserDir = 1;

      // Clear with Warm Stone-Linen (#E1DDD4)
      ctx.clearRect(0, 0, W, H);
      ctx.fillStyle = '#E1DDD4';
      ctx.fillRect(0, 0, W, H);

      // Radial Warm Ochre aura
      const grd = ctx.createRadialGradient(W * 0.72, H * 0.50, 40, W * 0.72, H * 0.50, W * 0.55);
      grd.addColorStop(0, 'rgba(216, 165, 110, 0.20)');
      grd.addColorStop(0.5, 'rgba(216, 165, 110, 0.07)');
      grd.addColorStop(1, 'rgba(225, 221, 212, 0)');
      ctx.fillStyle = grd;
      ctx.fillRect(0, 0, W, H);

      // Projection
      const FOV = 560, CAM_Z = 640;
      const CX = W * 0.72;
      const CY = H * 0.50;

      const cosY = Math.cos(rotY), sinY = Math.sin(rotY);
      const cosX = Math.cos(rotX), sinX = Math.sin(rotX);

      const project = (vx, vy, vz) => {
        const x1 = vx * cosY - vz * sinY;
        const z1 = vz * cosY + vx * sinY;
        const y2 = vy * cosX - z1 * sinX;
        const z2 = z1 * cosX + vy * sinX;
        const s = FOV / (CAM_Z + z2);
        return { px: CX + x1 * s, py: CY + y2 * s, s, z: z2 };
      };

      const PV = V.map(([x, y, z]) => project(x, y, z));

      // Particles
      particles.forEach((p) => {
        p.y += p.vy;
        if (p.y < -260) p.y = 260;
        const pp = project(p.x, p.y, p.z);
        if (pp.s > 0) {
          ctx.beginPath();
          ctx.arc(pp.px, pp.py, p.r * pp.s, 0, Math.PI * 2);
          ctx.fillStyle = `${OCHRE}${Math.min(p.a * pp.s * 1.4, 0.85)})`;
          ctx.fill();
        }
      });

      // Wireframe edges in Deep Graphite & Warm Ochre
      const sortedEdges = [...E].sort((a, b) => {
        const za = (PV[a[0]].z + PV[a[1]].z) / 2;
        const zb = (PV[b[0]].z + PV[b[1]].z) / 2;
        return zb - za;
      });

      sortedEdges.forEach(([i, j, type]) => {
        const p1 = PV[i], p2 = PV[j];
        if (p1.s <= 0 || p2.s <= 0) return;

        ctx.beginPath();
        ctx.moveTo(p1.px, p1.py);
        ctx.lineTo(p2.px, p2.py);

        if (type === 'primary') {
          ctx.strokeStyle = `${GRAPHITE}0.85)`;
          ctx.lineWidth = 1.8;
          ctx.setLineDash([]);
        } else if (type === 'secondary') {
          ctx.strokeStyle = `${GRAPHITE}0.55)`;
          ctx.lineWidth = 1.3;
          ctx.setLineDash([]);
        } else if (type === 'dim') {
          ctx.strokeStyle = `${GRAPHITE}0.25)`;
          ctx.lineWidth = 1.0;
          ctx.setLineDash([]);
        } else if (type === 'louver') {
          ctx.strokeStyle = `${OCHRE}0.65)`;
          ctx.lineWidth = 1.0;
          ctx.setLineDash([]);
        } else if (type === 'column') {
          ctx.strokeStyle = `${OCHRE}0.95)`;
          ctx.lineWidth = 2.4;
          ctx.setLineDash([]);
        } else if (type === 'glass') {
          ctx.strokeStyle = `${GRAPHITE}0.45)`;
          ctx.lineWidth = 1.1;
          ctx.setLineDash([]);
        } else if (type === 'detail') {
          ctx.strokeStyle = `${GRAPHITE}0.20)`;
          ctx.lineWidth = 0.8;
          ctx.setLineDash([4, 4]);
        } else if (type === 'pool') {
          const shimmer = 0.35 + 0.2 * Math.sin(time * 3 + i);
          ctx.strokeStyle = `rgba(189, 135, 80, ${shimmer})`;
          ctx.lineWidth = 1.4;
          ctx.setLineDash([]);
        } else if (type === 'grid') {
          ctx.strokeStyle = `${GRAPHITE}0.08)`;
          ctx.lineWidth = 0.6;
          ctx.setLineDash([]);
        } else {
          ctx.strokeStyle = `${GRAPHITE}0.35)`;
          ctx.lineWidth = 1.0;
          ctx.setLineDash([]);
        }
        ctx.stroke();
        ctx.setLineDash([]);
      });

      // Joint nodes (Warm Ochre #D8A56E)
      PV.forEach((p, i) => {
        if (p.s <= 0) return;
        const isKey = E.some(([a, b, t]) => (a === i || b === i) && (t === 'primary' || t === 'column'));
        if (!isKey) return;
        ctx.beginPath();
        ctx.arc(p.px, p.py, 2.5 * p.s, 0, Math.PI * 2);
        ctx.fillStyle = `${OCHRE}0.95)`;
        ctx.shadowColor = '#D8A56E';
        ctx.shadowBlur = 6;
        ctx.fill();
        ctx.shadowBlur = 0;
      });

      // Horizontal laser scan line in Warm Ochre
      const sl1 = project(-230, laserY, 0);
      const sl2 = project(230, laserY, 0);
      if (sl1.s > 0 && sl2.s > 0) {
        ctx.beginPath();
        ctx.moveTo(sl1.px, sl1.py);
        ctx.lineTo(sl2.px, sl2.py);
        ctx.strokeStyle = `${OCHRE}0.50)`;
        ctx.lineWidth = 1.2;
        ctx.setLineDash([8, 6]);
        ctx.stroke();
        ctx.setLineDash([]);
      }

      // HUD: compass dial in Deep Graphite & Ochre
      const cx2 = W - 64, cy2 = H - 90;
      ctx.strokeStyle = `${GRAPHITE}0.25)`;
      ctx.lineWidth = 1;
      ctx.beginPath(); ctx.arc(cx2, cy2, 20, 0, Math.PI * 2); ctx.stroke();

      const compassAngle = -rotY - Math.PI / 2;
      ctx.strokeStyle = `${OCHRE}0.90)`;
      ctx.lineWidth = 1.6;
      ctx.beginPath();
      ctx.moveTo(cx2, cy2);
      ctx.lineTo(cx2 + Math.cos(compassAngle) * 16, cy2 + Math.sin(compassAngle) * 16);
      ctx.stroke();

      ctx.font = `bold 9px "Space Grotesk", monospace`;
      ctx.fillStyle = `${GRAPHITE}0.75)`;
      ctx.textAlign = 'center';
      ctx.fillText('N', cx2 + Math.cos(compassAngle) * 24, cy2 + Math.sin(compassAngle) * 24 + 3);

      ctx.font = `8px "Space Grotesk", monospace`;
      ctx.fillStyle = `${GRAPHITE}0.50)`;
      ctx.fillText('1:50', cx2, cy2 + 35);
      ctx.fillText('DRAG TO ORBIT', cx2, cy2 + 47);

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', handleResize);
      canvas.parentElement?.removeEventListener('mousedown', onMouseDown);
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('mouseup', onMouseUp);
      canvas.parentElement?.removeEventListener('touchstart', onTouchStart);
      window.removeEventListener('touchmove', onTouchMove);
      window.removeEventListener('touchend', onTouchEnd);
    };
  }, []);

  return (
    <div className="absolute inset-0 w-full h-full overflow-hidden pointer-events-auto cursor-grab active:cursor-grabbing">
      <canvas ref={canvasRef} className="w-full h-full block" />
    </div>
  );
}
