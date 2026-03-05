import * as THREE from 'three';

export class GameRoad extends THREE.Group {
  constructor() {
    super()
    this.add(this.createFloor())
    this.add(this.createLeftWall())
    this.add(this.createRightWall())
  }

  createFloor() {
    const floor = this.createPlaneGeometry(20, 100, 0xff0000)
    floor.rotation.x = Math.PI / 2
    return floor
  }

  createLeftWall() {
    const left = this.createPlaneGeometry(1, 100, 0xff9900)
    left.position.x = -10
    left.rotation.x = Math.PI / 2
    left.rotation.y = Math.PI / 2
    return left
  }

  createRightWall() {
    const right = this.createPlaneGeometry(1, 100, 0xff9900)
    right.position.x = 10
    right.rotation.y = Math.PI / 2
    right.rotation.z = Math.PI / 2
    return right
  }

  createPlaneGeometry(width, height, color = 0xffffff) {
    return new THREE.Mesh(
      new THREE.PlaneGeometry(width, height),
      new THREE.MeshBasicMaterial({ color, side: THREE.DoubleSide }),
    );
  }
}
