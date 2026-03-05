import * as THREE from 'three';

export class GameEnemy extends THREE.Mesh {
  constructor() {
    const geometry = new THREE.BoxGeometry(1, 1, 1);
    const material = new THREE.MeshBasicMaterial({ color: 0xffffff });
    super(geometry, material);
  }

  move() {
    this.position.z -= 1e-2
  }
}
