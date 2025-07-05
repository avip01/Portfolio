import React, { useEffect, useState } from 'react';

const SpaceBackground: React.FC = () => {
  const [stars, setStars] = useState<Array<{ id: number; x: number; y: number; size: string; delay: number }>>([]);
  const [comets, setComets] = useState<Array<{ id: number; direction: string; startPosition: { top?: string; left?: string }; delay: number }>>([]);
  const [nebulas, setNebulas] = useState<Array<{ id: number; x: number; y: number; type: string; delay: number }>>([]);
  const [dustParticles, setDustParticles] = useState<Array<{ id: number; x: number; delay: number }>>([]);

  useEffect(() => {
    // Generate natural star distribution
    const starArray = [];
    for (let i = 0; i < 180; i++) {
      const randomValue = Math.random() * 100;
      let size = 'small';
      
      // Natural distribution: 60% small, 30% medium, 10% large
      if (randomValue < 60) size = 'small';
      else if (randomValue < 90) size = 'medium';
      else size = 'large';

      starArray.push({
        id: i,
        x: Math.random() * 100,
        y: Math.random() * 100,
        size,
        delay: Math.random() * 6 // Randomized twinkling
      });
    }
    setStars(starArray);

    // Generate random comet directions (left or right only)
    const cometArray = [];
    for (let i = 0; i < 2; i++) {
      const directions = ['leftToRight', 'rightToLeft'];
      const direction = directions[Math.floor(Math.random() * directions.length)];
      
      // Set random starting height for horizontal movement
      const startPosition = { top: Math.random() * 80 + 10 + '%' }; // Random height 10-90%
      
      cometArray.push({
        id: i,
        direction,
        startPosition,
        delay: Math.random() * 20 + i * 15 // Cinematic timing
      });
    }
    setComets(cometArray);

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

  return (
    <div className="space-background">
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

      {/* Random direction comets */}
      {comets.map((comet) => (
        <div
          key={comet.id}
          className={`comet ${comet.direction}`}
          style={{
            animationDelay: `${comet.delay}s`,
            ...comet.startPosition
          }}
        />
      ))}

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