import React, { useEffect } from 'react';
import p5 from 'p5';
import { Vehicle } from './vehicle';

const Sketch = () => {
  let font;
  let vehicles = [];

  useEffect(() => {
    // Load font and create canvas
    font = new p5.Font('AvenirNextLTPro-Demi.otf');
    const canvas = new p5(sketch);

    return () => {
      canvas.remove();
    };
  }, []);

  const sketch = (p) => {
    p.setup = () => {
      const canvasWidth = 600; // Set the desired width here
      const canvasHeight = 300; // Set the desired height here
      p.createCanvas(canvasWidth, canvasHeight);
      p.background(51);

      const points = font.textToPoints('Nick', 100, 200, 192, {
        sampleFactor: 0.25,
      });

      for (let i = 0; i < points.length; i++) {
        const pt = points[i];
        const vehicle = new Vehicle(pt.x, pt.y);
        vehicles.push(vehicle);
      }
    };

    p.draw = () => {
      p.background(51);
      for (let i = 0; i < vehicles.length; i++) {
        const v = vehicles[i];
        v.behaviors();
        v.update();
        v.show();
      }
    };
  };

  return (
    <div id="sketch-container" style={{ width: '600px', height: '300px' }}></div>
  );
};

export default Sketch;
