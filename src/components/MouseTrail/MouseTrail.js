import React, { useState, useEffect, useRef } from 'react';
import './MouseTrail.css';

const MouseTrail = () => {
  const [trails, setTrails] = useState([]);
  const mousePosition = useRef({ x: 0, y: 0 });
  const animationFrameId = useRef(null);
  const lastTime = useRef(0);

  useEffect(() => {
    const handleMouseMove = (e) => {
      mousePosition.current = { x: e.clientX, y: e.clientY };
      
      const currentTime = Date.now();
      if (currentTime - lastTime.current > 20) { // Throttle to create trail effect
        setTrails(prevTrails => [
          ...prevTrails.slice(-15), // Keep only last 15 trails
          {
            id: currentTime,
            x: e.clientX,
            y: e.clientY,
            size: Math.random() * 20 + 10
          }
        ]);
        lastTime.current = currentTime;
      }
    };

    const animate = () => {
      setTrails(prevTrails => 
        prevTrails
          .map(trail => ({
            ...trail,
            opacity: trail.opacity ? trail.opacity - 0.02 : 1,
            size: trail.size + 0.5
          }))
          .filter(trail => trail.opacity > 0)
      );
      
      animationFrameId.current = requestAnimationFrame(animate);
    };

    window.addEventListener('mousemove', handleMouseMove);
    animationFrameId.current = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      if (animationFrameId.current) {
        cancelAnimationFrame(animationFrameId.current);
      }
    };
  }, []);

  return (
    <div className="mouse-trail-container">
      {trails.map(trail => (
        <div
          key={trail.id}
          className="mouse-trail"
          style={{
            left: `${trail.x}px`,
            top: `${trail.y}px`,
            width: `${trail.size}px`,
            height: `${trail.size}px`,
            opacity: trail.opacity || 1
          }}
        />
      ))}
    </div>
  );
};

export default MouseTrail;
