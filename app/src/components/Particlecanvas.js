import React from 'react';
import { createVector, floor, cos, sin, TWO_PI } from 'p5';
import { ReactP5Wrapper } from 'react-p5-wrapper';

class Particle {
  constructor() {
    this.pos = createVector();
    this.vel = createVector();
    this.acc = createVector();
    this.maxspeed = 4;
    this.h = 0;
    this.prevPos = createVector();
  }

  update(p5) {
    this.vel.add(this.acc);
    this.vel.limit(this.maxspeed);
    this.pos.add(this.vel);
    this.acc.mult(0);
  }

  follow(p5, vectors, cols, scl) {
    const x = floor(this.pos.x / scl);
    const y = floor(this.pos.y / scl);
    const index = x + y * cols;
    const force = vectors[index];
    this.applyForce(force);
  }

  applyForce(force) {
    this.acc.add(force);
  }

  show(p5) {
    this.h = (this.h + 1) % 255;
    p5.stroke(this.h, 255, 255, 25);
    p5.strokeWeight(1);
    p5.line(this.pos.x, this.pos.y, this.prevPos.x, this.prevPos.y);
    this.updatePrev();
  }

  updatePrev() {
    this.prevPos.x = this.pos.x;
    this.prevPos.y = this.pos.y;
  }

  edges(p5, width, height) {
    if (this.pos.x > width) {
      this.pos.x = 0;
      this.updatePrev();
    }
    if (this.pos.x < 0) {
      this.pos.x = width;
      this.updatePrev();
    }
    if (this.pos.y > height) {
      this.pos.y = 0;
      this.updatePrev();
    }
    if (this.pos.y < 0) {
      this.pos.y = height;
      this.updatePrev();
    }
  }
}

function ParticleCanvas() {
  const cols = 40;
  const rows = 40;
  const inc = 0.1;
  const scl = 10;
  const particlesCount = 300;

  let zoff = 0;
  let flowfield = [];
  let particles = [];

  const setup = (p5, canvasParentRef) => {
    p5.createCanvas(400, 400).parent(canvasParentRef);
    p5.colorMode(p5.HSB, 255);

    flowfield = new Array(cols * rows);
    particles = Array.from({ length: particlesCount }, () => new Particle());

    p5.background(51);
  };

  const draw = (p5) => {
    let yoff = 0;
    for (let y = 0; y < rows; y++) {
      let xoff = 0;
      for (let x = 0; x < cols; x++) {
        const index = x + y * cols;
        const angle = p5.noise(xoff, yoff, zoff) * TWO_PI * 4;
        const v = p5.createVector(cos(angle), sin(angle));
        v.setMag(1);
        flowfield[index] = v;
        xoff += inc;
        p5.stroke(0, 50);
      }
      yoff += inc;
      zoff += 0.0003;
    }

    for (let i = 0; i < particles.length; i++) {
      particles[i].follow(p5, flowfield, cols, scl);
      particles[i].update(p5);
      particles[i].edges(p5, p5.width, p5.height);
      particles[i].show(p5);
    }
  };

  const sketch = (p5) => {
    p5.setup = () => setup(p5, 'canvas-container');
    p5.draw = () => draw(p5);
  };

  return <ReactP5Wrapper sketch={sketch} />;
}

export default ParticleCanvas;
