import React from 'react';
import { ReactP5Wrapper } from 'react-p5-wrapper';

const SteeringTextPaths = () => {
  let font;
  let vehicles = [];

  const preload = (p5) => {
    font = p5.loadFont('./AvenirNextLTPro-Demi.otf', () => {
      const points = font.textToPoints('Nick', 100, 200, 192, {
        sampleFactor: 0.25,
      });

      for (let i = 0; i < points.length; i++) {
        const pt = points[i];
        const vehicle = new Vehicle(pt.x, pt.y, p5);
        vehicles.push(vehicle);
      }
    });
  };

  const setup = (p5, canvasParentRef) => {
    p5.createCanvas(600, 300).parent(canvasParentRef);
    p5.background(51);
  };

  const draw = (p5) => {
    p5.background(51);
    for (let i = 0; i < vehicles.length; i++) {
      const v = vehicles[i];
      v.behaviors(p5);
      v.update();
      v.show(p5);
    }
  };

  class Vehicle {
    constructor(x, y, p5) {
      this.pos = p5.createVector(p5.random(p5.width), p5.random(p5.height));
      this.target = p5.createVector(x, y);
      this.vel = p5.createVector().random2D();
      this.acc = p5.createVector();
      this.r = 8;
      this.maxspeed = 10;
      this.maxforce = 1;
    }

    behaviors(p5) {
      const arrive = this.arrive(this.target, p5);
      const mouse = p5.createVector(p5.mouseX, p5.mouseY);
      const flee = this.flee(mouse, p5);

      arrive.mult(1);
      flee.mult(5);

      this.applyForce(arrive);
      this.applyForce(flee);
    }

    applyForce(f) {
      this.acc.add(f);
    }

    update() {
      this.pos.add(this.vel);
      this.vel.add(this.acc);
      this.acc.mult(0);
    }

    show(p5) {
      p5.stroke(255);
      p5.strokeWeight(this.r);
      p5.point(this.pos.x, this.pos.y);
    }

    arrive(target, p5) {
      const desired = p5.Vector.sub(target, this.pos);
      const d = desired.mag();
      let speed = this.maxspeed;
      if (d < 100) {
        speed = p5.map(d, 0, 100, 0, this.maxspeed);
      }
      desired.setMag(speed);
      const steer = p5.Vector.sub(desired, this.vel);
      steer.limit(this.maxforce);
      return steer;
    }

    flee(target, p5) {
      const desired = p5.Vector.sub(target, this.pos);
      const d = desired.mag();
      if (d < 50) {
        desired.setMag(this.maxspeed);
        desired.mult(-1);
        const steer = p5.Vector.sub(desired, this.vel);
        steer.limit(this.maxforce);
        return steer;
      } else {
        return p5.createVector(0, 0);
      }
    }
  }

  return <ReactP5Wrapper preload={preload} setup={setup} draw={draw} />;
};

export default SteeringTextPaths;
