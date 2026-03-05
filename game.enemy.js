import * as THREE from 'three';

export class GameEnemy extends THREE.Mesh {
  constructor() {
    const geometry = new THREE.BoxGeometry(1, 1, 1);
    const material = new THREE.MeshBasicMaterial({ color: 0xcccccc });
    super(geometry, material);
    this.position.x = Math.floor(Math.random() * 21) - 10 // {0..20} - 10 = {-10..10}
    this.position.z = 10
  }

  move() {
    this.position.z -= 1
  }
}
