import * as THREE from 'three';

export class GameRenderer extends THREE.WebGLRenderer {
  constructor({ width = window.innerWidth, height = window.innerHeight, animate } = {}) {
    super()
    this.setSize(width, height);
    this.setPixelRatio(width / height)
    if (animate) this.setAnimationLoop(animate);
  }
}
