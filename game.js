import { GameScene } from './game.scene.js'
import { GameRenderer } from './game.renderer.js'

export class Game {
  isAI = false
  isPlaying = false

  scene = new GameScene()
  renderer = new GameRenderer()

  constructor() { }

  setIsAI(isAI) {
    this.isAI = isAI
    return this
  }

  start() {
    this.isPlaying = true
    this.update()
    return this
  }

  stop() {
    this.isPlaying = false
    return this
  }

  update() {
    if (this.isPlaying) {
      window.requestAnimationFrame(() => this.update())
    }
    return this
  }
}
