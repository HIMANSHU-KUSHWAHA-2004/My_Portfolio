import { useEffect, useRef } from "react";

const themePalette = {
  dark: {
    particle: "122, 141, 255",
    line: "87, 214, 255",
  },
  light: {
    particle: "72, 88, 255",
    line: "0, 168, 198",
  },
  forest: {
    particle: "46, 194, 126",
    line: "142, 234, 157",
  },
};

function BackgroundEffect({ theme }) {
  const canvasRef = useRef(null);
  const rafRef = useRef(null);
  const mouseRef = useRef({ x: 0, y: 0 });
  const particlesRef = useRef([]);
  const cursorRef = useRef(null);
  const trailRef = useRef(null);
  const cursorTargetRef = useRef({ x: 0, y: 0 });
  const cursorCurrentRef = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    const palette = themePalette[theme] || themePalette.dark;

    class Particle {
      constructor() {
        this.reset();
        this.alpha = Math.random() * 0.45 + 0.18;
      }

      reset() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.vx = (Math.random() - 0.5) * 0.35;
        this.vy = (Math.random() - 0.5) * 0.35;
        this.size = Math.random() * 2 + 0.8;
      }

      move() {
        this.x += this.vx;
        this.y += this.vy;

        if (this.x < -20 || this.x > canvas.width + 20) this.vx *= -1;
        if (this.y < -20 || this.y > canvas.height + 20) this.vy *= -1;

        const dx = mouseRef.current.x - this.x;
        const dy = mouseRef.current.y - this.y;
        const distance = Math.hypot(dx, dy);

        if (distance > 0 && distance < 140) {
          const pull = (140 - distance) / 140;
          this.vx += (dx / distance) * pull * 0.015;
          this.vy += (dy / distance) * pull * 0.015;
        }

        this.vx = Math.max(-0.9, Math.min(0.9, this.vx));
        this.vy = Math.max(-0.9, Math.min(0.9, this.vy));
      }

      draw() {
        ctx.beginPath();
        ctx.shadowColor = `rgba(${palette.line}, 0.7)`;
        ctx.shadowBlur = 12;
        ctx.fillStyle = `rgba(${palette.particle}, ${Math.min(0.95, this.alpha + 0.1)})`;
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
        ctx.shadowBlur = 0;
      }
    }

    const onResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      const count = Math.min(95, Math.floor((canvas.width * canvas.height) / 17000));
      particlesRef.current = Array.from({ length: count }, () => new Particle());
    };

    const onMouseMove = (event) => {
      mouseRef.current = { x: event.clientX, y: event.clientY };
      cursorTargetRef.current = { x: event.clientX, y: event.clientY };
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      particlesRef.current.forEach((particle) => {
        particle.move();
        particle.draw();
      });

      for (let i = 0; i < particlesRef.current.length; i += 1) {
        for (let j = i + 1; j < particlesRef.current.length; j += 1) {
          const first = particlesRef.current[i];
          const second = particlesRef.current[j];
          const dx = first.x - second.x;
          const dy = first.y - second.y;
          const distance = Math.hypot(dx, dy);

          if (distance < 120) {
            const alpha = (1 - distance / 120) * 0.36;
            ctx.strokeStyle = `rgba(${palette.line}, ${alpha})`;
            ctx.lineWidth = 1;
            ctx.beginPath();
            ctx.moveTo(first.x, first.y);
            ctx.lineTo(second.x, second.y);
            ctx.stroke();
          }
        }
      }

      const canUseFinePointer = window.matchMedia("(pointer: fine)").matches;
      if (canUseFinePointer && cursorRef.current && trailRef.current) {
        const target = cursorTargetRef.current;
        const current = cursorCurrentRef.current;
        current.x += (target.x - current.x) * 0.18;
        current.y += (target.y - current.y) * 0.18;

        cursorRef.current.style.transform = `translate(${target.x}px, ${target.y}px)`;
        trailRef.current.style.transform = `translate(${current.x}px, ${current.y}px)`;
      }

      rafRef.current = requestAnimationFrame(animate);
    };

    onResize();
    animate();

    window.addEventListener("resize", onResize);
    window.addEventListener("mousemove", onMouseMove);

    return () => {
      window.removeEventListener("resize", onResize);
      window.removeEventListener("mousemove", onMouseMove);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, [theme]);

  const palette = themePalette[theme] || themePalette.dark;

  return (
    <>
      <canvas
        ref={canvasRef}
        style={{
          position: "fixed",
          inset: 0,
          width: "100%",
          height: "100%",
          zIndex: 1,
          pointerEvents: "none",
        }}
      />
      <div
        ref={trailRef}
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "34px",
          height: "34px",
          borderRadius: "999px",
          transform: "translate(-100px, -100px)",
          marginLeft: "-17px",
          marginTop: "-17px",
          background: `radial-gradient(circle, rgba(${palette.line}, 0.28), rgba(${palette.line}, 0.02) 72%)`,
          border: `1px solid rgba(${palette.line}, 0.35)`,
          backdropFilter: "blur(2px)",
          pointerEvents: "none",
          zIndex: 60,
        }}
      />
      <div
        ref={cursorRef}
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "8px",
          height: "8px",
          borderRadius: "999px",
          transform: "translate(-100px, -100px)",
          marginLeft: "-4px",
          marginTop: "-4px",
          background: `rgba(${palette.line}, 1)`,
          boxShadow: `0 0 18px rgba(${palette.line}, 0.9)`,
          pointerEvents: "none",
          zIndex: 61,
        }}
      />
    </>
  );
}

export default BackgroundEffect;
