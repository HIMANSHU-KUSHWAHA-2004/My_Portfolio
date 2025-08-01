import React, { useEffect, useRef, useState } from 'react';

const BackgroundEffect = () => {
  const canvasRef = useRef(null);
  const animationRef = useRef(null);
  const mouseRef = useRef({ x: 0, y: 0 });
  const particlesRef = useRef([]);
  const [mouseTrail, setMouseTrail] = useState([]);

  // Particle class
  class Particle {
    constructor(canvas) {
      this.canvas = canvas;
      this.reset();
      this.opacity = Math.random() * 0.5 + 0.3;
      this.baseOpacity = this.opacity;
    }

    reset() {
      this.x = Math.random() * this.canvas.width;
      this.y = Math.random() * this.canvas.height;
      this.vx = (Math.random() - 0.5) * 0.5;
      this.vy = (Math.random() - 0.5) * 0.5;
      this.size = Math.random() * 2 + 1;
    }

    update(mouse) {
      // Move particle
      this.x += this.vx;
      this.y += this.vy;

      // Bounce off edges
      if (this.x < 0 || this.x > this.canvas.width) this.vx *= -1;
      if (this.y < 0 || this.y > this.canvas.height) this.vy *= -1;

      // Mouse interaction
      const dx = mouse.x - this.x;
      const dy = mouse.y - this.y;
      const distance = Math.sqrt(dx * dx + dy * dy);

      if (distance < 100) {
        const force = (100 - distance) / 100;
        this.opacity = this.baseOpacity + force * 0.5;
        
        // Gentle attraction to mouse
        this.vx += (dx / distance) * force * 0.01;
        this.vy += (dy / distance) * force * 0.01;
      } else {
        this.opacity = this.baseOpacity;
      }

      // Limit velocity
      const maxSpeed = 1;
      const speed = Math.sqrt(this.vx * this.vx + this.vy * this.vy);
      if (speed > maxSpeed) {
        this.vx = (this.vx / speed) * maxSpeed;
        this.vy = (this.vy / speed) * maxSpeed;
      }
    }

    draw(ctx) {
      ctx.save();
      ctx.globalAlpha = this.opacity;
      ctx.fillStyle = '#00d4ff';
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
      ctx.fill();
      
      // Add glow effect
      ctx.shadowColor = '#00d4ff';
      ctx.shadowBlur = 10;
      ctx.fill();
      
      ctx.restore();
    }
  }

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      
      // Reinitialize particles
      particlesRef.current = [];
      const particleCount = Math.min(80, Math.floor((canvas.width * canvas.height) / 15000));
      
      for (let i = 0; i < particleCount; i++) {
        particlesRef.current.push(new Particle(canvas));
      }
    };

    const handleMouseMove = (e) => {
      mouseRef.current = { x: e.clientX, y: e.clientY };
      
      // Add to mouse trail
      setMouseTrail(prev => {
        const newTrail = [...prev, { x: e.clientX, y: e.clientY, opacity: 1, id: Date.now() }];
        return newTrail.slice(-8); // Keep last 8 points
      });
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // Update and draw particles
      particlesRef.current.forEach(particle => {
        particle.update(mouseRef.current);
        particle.draw(ctx);
      });

      // Draw connections between nearby particles
      ctx.save();
      ctx.globalAlpha = 0.2;
      ctx.strokeStyle = '#00d4ff';
      ctx.lineWidth = 1;
      ctx.shadowColor = '#00d4ff';
      ctx.shadowBlur = 5;

      for (let i = 0; i < particlesRef.current.length; i++) {
        for (let j = i + 1; j < particlesRef.current.length; j++) {
          const dx = particlesRef.current[i].x - particlesRef.current[j].x;
          const dy = particlesRef.current[i].y - particlesRef.current[j].y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < 120) {
            ctx.beginPath();
            ctx.moveTo(particlesRef.current[i].x, particlesRef.current[i].y);
            ctx.lineTo(particlesRef.current[j].x, particlesRef.current[j].y);
            ctx.stroke();
          }
        }
      }
      ctx.restore();

      animationRef.current = requestAnimationFrame(animate);
    };

    resizeCanvas();
    animate();

    window.addEventListener('resize', resizeCanvas);
    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      window.removeEventListener('mousemove', handleMouseMove);
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, []);

  // Fade out mouse trail
  useEffect(() => {
    if (mouseTrail.length > 0) {
      const timer = setTimeout(() => {
        setMouseTrail(prev => 
          prev.map(point => ({ ...point, opacity: point.opacity * 0.9 }))
            .filter(point => point.opacity > 0.1)
        );
      }, 50);
      return () => clearTimeout(timer);
    }
  }, [mouseTrail]);

  return (
    <>
      <canvas
        ref={canvasRef}
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          pointerEvents: 'none',
          zIndex: -1,
        }}
      />
      
      {/* Mouse trail */}
      {mouseTrail.map((point, index) => (
        <div
          key={point.id}
          style={{
            position: 'fixed',
            left: point.x - 3,
            top: point.y - 3,
            width: '8px',
            height: '8px',
            borderRadius: '50%',
            backgroundColor: '#00d4ff',
            boxShadow: '0 0 10px #00d4ff',
            opacity: point.opacity * (index / mouseTrail.length),
            pointerEvents: 'none',
            zIndex: 1000,
            transform: `scale(${0.3 + (index / mouseTrail.length) * 0.7})`,
            transition: 'opacity 0.1s ease-out',
          }}
        />
      ))}
    </>
  );
};

export default BackgroundEffect;