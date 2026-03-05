import * as THREE from 'three';

export class GamePlayer extends THREE.Mesh {
  constructor() {
    const geometry = new THREE.BoxGeometry(1, 2, 1);
    const material = new THREE.MeshLambertMaterial({ color: 0xffff00 });
    super(geometry, material);
  }

  moveLeft() {
    this.position.x -= 1
  }

  moveRight() {
    this.position.x += 1
  }
}
