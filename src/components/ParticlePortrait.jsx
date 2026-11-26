
import { useEffect, useRef } from "react";

export default function ParticlePortrait() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    const W = 450;
    const H = 650;

    canvas.width = W;
    canvas.height = H;

    const image = new Image();
    image.src = "/dark.jpg";

    let particles = [];
    let animationId;
    let startTime;
    let active = true;

    image.onload = () => {
      if (!active) return;

      const sample = document.createElement("canvas");
      sample.width = 225;
      sample.height = 325;

      const sampleCtx = sample.getContext("2d");

      const scale = Math.min(
        225 / image.width,
        325 / image.height
      );

      const iw = image.width * scale;
      const ih = image.height * scale;

      sampleCtx.drawImage(
        image,
        (225 - iw) / 2,
        (325 - ih) / 2,
        iw,
        ih
      );

      const pixels = sampleCtx.getImageData(
        0, 0, 225, 325
      ).data;

      for (let y = 0; y < 325; y += 3) {
        for (let x = 0; x < 225; x += 3) {
          const index = (y * 225 + x) * 4;

          const r = pixels[index];
          const g = pixels[index + 1];
          const b = pixels[index + 2];

          const brightness = (r + g + b) / 3;

          if (brightness < 12) continue;

          const angle = Math.random() * Math.PI * 2;
          const distance = 70 + Math.random() * 180;

          particles.push({
            x: x * 2,
            y: y * 2,

            startX: x * 2 + Math.cos(angle) * distance,
            startY: y * 2 + Math.sin(angle) * distance,

            size: 0.7 + Math.random() * 0.9,
            alpha: 0.3 + (brightness / 255) * 0.7,

            depth: Math.random() * 2 - 1,
            phase: Math.random() * Math.PI * 2
          });
        }
      }

      startTime = performance.now();
      animate(startTime);
    };

    function animate(now) {
      if (!active) return;

      const elapsed = (now - startTime) / 1000;
      const cycle = elapsed % 7;

      let progress;

      if (cycle < 2) {
        progress = cycle / 2;
      } else if (cycle < 4.5) {
        progress = 1;
      } else {
        progress = 1 - (cycle - 4.5) / 2.5;
      }

      // Smooth particle movement
      progress = Math.max(0, Math.min(1, progress));
      progress = progress * progress * (3 - 2 * progress);

      ctx.clearRect(0, 0, W, H);

      particles.forEach((p) => {
        const scatter = 1 - progress;

        const floatX = Math.sin(
          elapsed * 1.5 + p.phase
        ) * (2 + p.depth * 2);

        const floatY = Math.cos(
          elapsed * 1.5 + p.phase
        ) * (3 + p.depth * 2);

        const x =
          p.startX * scatter +
          p.x * progress +
          floatX;

        const y =
          p.startY * scatter +
          p.y * progress +
          floatY;

        const depthScale = 1 + p.depth * 0.12;

        ctx.globalAlpha = p.alpha * (0.35 + progress * 0.65);
        ctx.fillStyle = "#00B8D9";

        ctx.beginPath();

        ctx.arc(
          x,
          y,
          p.size * depthScale,
          0,
          Math.PI * 2
        );

        ctx.fill();
      });

      ctx.globalAlpha = 1;

      animationId = requestAnimationFrame(animate);
    }

    image.onerror = () => {
      console.error("Could not load /dark.jpg");
    };

    return () => {
      active = false;
      cancelAnimationFrame(animationId);
    };
  }, []);

  return (
    <div className="particle-portrait">
      <canvas ref={canvasRef} />
    </div>
  );
}
