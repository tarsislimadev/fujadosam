import * as THREE from 'three';
import { GameScene } from './game.scene.js'
import { GameRenderer } from './game.renderer.js'
import { GameCamera } from './game.camera.js'
import { GamePlayer } from './game.player.js'
import { GameRoad } from './game.road.js'

export class Game {
  isAI = false
  isPlaying = false

  renderer = new GameRenderer({ width: 800, height: 450, animate: () => this.animate() })
  scene = new GameScene(800, 450)
  light = new THREE.AmbientLight(0xffffff)
  camera = new GameCamera()
  player = new GamePlayer({})
  road = new GameRoad({})

  constructor() {
    // player
    this.player.position.set(0, 0, 0)
    this.scene.add(this.player)
    // camera
    this.camera.position.set(0, 5, -5)
    this.scene.add(this.camera)
    this.camera.lookAt(this.player.position)
    // light
    this.scene.add(this.light)
    // road
    this.road.position.set(0, 0, 0)
    this.scene.add(this.road)
  }

  setIsAI(isAI) {
    this.isAI = !!isAI
    return this
  }

  enableKeyboardEvents() {
    window.addEventListener('keydown', (event) => {
      switch (event.code) {
        case 'ArrowLeft': this.player.position.x += 1; break;
        case 'ArrowRight': this.player.position.x -= 1; break;
      }
    })
  }

  enableAiControls() { /* fixme */ }

  start() {
    this.isAI ? this.enableAiControls() : this.enableKeyboardEvents()
    this.isPlaying = true
  }

  stop() {
    this.isPlaying = false
  }

  animate() {
    this.road.position.x += 1e-2
    this.renderer.render(this.scene, this.camera)
  }
}
