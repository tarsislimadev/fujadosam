import * as THREE from 'three';

export class GameRoad extends THREE.Group {
  constructor() {
    super()
    this.add(this.createFloor())
    this.add(this.createLeftWall())
    this.add(this.createRightWall())
  }

  createFloor() {
    return this.createPlaneGeometry(1, 10)
  }

  createLeftWall() {
    const left = this.createPlaneGeometry(1, 10)
    left.rotation.x = Math.PI
    return left
  }

  createRightWall() {
    const right = this.createPlaneGeometry(1, 10)
    right.rotation.y = Math.PI
    return right
  }

  createPlaneGeometry(width, height, color = 0xffffff) {
    return new THREE.Mesh(
      new THREE.PlaneGeometry(width, height),
      new THREE.MeshBasicMaterial({ color, side: THREE.DoubleSide }),
    );
  }
}
