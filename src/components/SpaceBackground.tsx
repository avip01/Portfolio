import React, { useEffect, useState, useRef } from 'react';

const SpaceBackground: React.FC = () => {
  const [stars, setStars] = useState<Array<{ id: number; x: number; y: number; size: string; delay: number }>>([]);
  const [comet, setComet] = useState<
    { id: number; direction: 'leftToRight' | 'rightToLeft'; yStart: number; yEnd: number; angle: number; delay: number } | null
  >(null);
  const [nebulas, setNebulas] = useState<Array<{ id: number; x: number; y: number; type: string; delay: number }>>([]);
  const [dustParticles, setDustParticles] = useState<Array<{ id: number; x: number; delay: number }>>([]);
  const cometId = useRef(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const hasSpawnedInitially = useRef(false);
  const animationDurationMs = 8000; // must match CSS keyframes duration

  useEffect(() => {
    // Generate natural star distribution
    const starArray = [];
    for (let i = 0; i < 180; i++) {
      const randomValue = Math.random() * 100;
      let size = 'small';
      if (randomValue < 60) size = 'small';
      else if (randomValue < 90) size = 'medium';
      else size = 'large';
      starArray.push({
        id: i,
        x: Math.random() * 100,
        y: Math.random() * 100,
        size,
        delay: Math.random() * 6
      });
    }
    setStars(starArray);

    // Generate high-resolution nebulas
    const nebulaArray = [];
    for (let i = 0; i < 5; i++) {
      const types = ['type1', 'type2', 'type3'];
      const type = types[Math.floor(Math.random() * types.length)];
      nebulaArray.push({
        id: i,
        x: Math.random() * 100,
        y: Math.random() * 100,
        type,
        delay: Math.random() * 40
      });
    }
    setNebulas(nebulaArray);

    // Generate cosmic dust particles
    const dustArray = [];
    for (let i = 0; i < 80; i++) {
      dustArray.push({
        id: i,
        x: Math.random() * 100,
        delay: Math.random() * 25
      });
    }
    setDustParticles(dustArray);
  }, []);

  // Helper to create and set a new comet
  const spawnComet = () => {
    if (!containerRef.current) return;
    const height = containerRef.current.offsetHeight;
    const width = containerRef.current.offsetWidth;
    const yStart = Math.floor(Math.random() * height); // 0% - 100%
    const yEnd = Math.floor((Math.random() * 0.8 + 0.1) * height); // 10%-90%
    const direction: 'leftToRight' | 'rightToLeft' = Math.random() < 0.5 ? 'leftToRight' : 'rightToLeft';

    const dx = direction === 'leftToRight' ? width : -width;
    const dy = yEnd - yStart;
    const angleRad = Math.atan2(dy, dx);
    const angleDeg = angleRad * (180 / Math.PI);

    setComet({
      id: cometId.current++,
      direction,
      yStart,
      yEnd,
      angle: angleDeg,
      delay: 0
    } as const);
  };

  // Comet lifecycle: play once for 8s, then wait 1–4s before spawning the next
  useEffect(() => {
    let timeout: NodeJS.Timeout | undefined;
    if (!containerRef.current) return;

    if (!comet) {
      if (!hasSpawnedInitially.current) {
        hasSpawnedInitially.current = true;
        spawnComet(); // first comet spawns immediately
      } else {
        const gapMs = (Math.floor(Math.random() * 4) + 1) * 1000; // 1-4s
        timeout = setTimeout(() => {
          spawnComet();
        }, gapMs);
      }
    } else {
      // Remove comet after it finishes its animation
      timeout = setTimeout(() => {
        setComet(null);
      }, animationDurationMs);
    }

    return () => {
      if (timeout) clearTimeout(timeout);
    };
  }, [comet]);

  return (
    <div className="space-background" ref={containerRef}>
      {/* Stars with natural distribution */}
      <div className="stars">
        {stars.map((star) => (
          <div
            key={star.id}
            className={`star ${star.size}`}
            style={{
              left: `${star.x}%`,
              top: `${star.y}%`,
              animationDelay: `${star.delay}s`
            }}
          />
        ))}
      </div>

      {/* Single random comet */}
      {comet && (
        <div
          key={`${comet.id}-${comet.yStart}-${comet.yEnd}`}
          className={`comet ${comet.direction}`}
          style={{
            animationDelay: `${comet.delay}s`,
            '--comet-y-start': `${comet.yStart}px`,
            '--comet-y-end': `${comet.yEnd}px`,
            '--comet-angle': `${comet.angle}deg`
          } as React.CSSProperties}
        >
          <div className="comet-tail" />
        </div>
      )}

      {/* High-resolution nebulas */}
      {nebulas.map((nebula) => (
        <div
          key={nebula.id}
          className={`nebula ${nebula.type}`}
          style={{
            left: `${nebula.x}%`,
            top: `${nebula.y}%`,
            animationDelay: `${nebula.delay}s`
          }}
        />
      ))}

      {/* Cosmic dust for depth */}
      <div className="cosmic-dust">
        {dustParticles.map((particle) => (
          <div
            key={particle.id}
            className="dust-particle"
            style={{
              left: `${particle.x}%`,
              animationDelay: `${particle.delay}s`
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default SpaceBackground; 