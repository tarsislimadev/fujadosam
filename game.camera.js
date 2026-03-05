import * as THREE from 'three';

export class GameCamera extends THREE.PerspectiveCamera {
  constructor(width = window.innerWidth, height = window.innerHeight) {
    super(75, width / height, 0.1, 1000);
  }
}
