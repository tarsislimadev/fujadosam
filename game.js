import * as THREE from 'three';
import { GameScene } from './game.scene.js'
import { GameRenderer } from './game.renderer.js'
import { GameCamera } from './game.camera.js'
import { GamePlayer } from './game.player.js'
import { GameRoad } from './game.road.js'
import { GameEnemy } from './game.enemy.js'
import { PlayerOutsideEvent } from './events/player.outside.event.js'
import { EnemyCollisionEvent } from './events/enemy.collision.event.js'
import { Clock } from './clock.js'

export class Game {
  isAI = false
  isPlaying = false

  renderer = new GameRenderer({ width: 800, height: 450, animate: () => this.animate() })
  scene = new GameScene(800, 450)
  light = new THREE.AmbientLight(0xffffff)
  camera = new GameCamera()
  player = new GamePlayer({})
  road = new GameRoad({})
  enemies = [this.createGameEnemy()]
  timeout = 1e3
  clock = new Clock()

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
    // 
    this.addGameEnemy()
    // 
    this.setEvents()
    //
    this.clock.start()
  }

  setEvents() {
    window.addEventListener(PlayerOutsideEvent.NAME, ({ detail }) => {
      alert('Game Over! You are ' + detail.side)
      this.reset()
    })

    window.addEventListener(EnemyCollisionEvent.NAME, () => {
      alert('Game Over! It\'s a collision...')
      this.reset()
    })

    this.clock.addEventListener('tick', () => this.moveEnemies())
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

      if (Math.abs(this.player.position.x) > 10) {
        window.dispatchEvent(new PlayerOutsideEvent({ side: ({ 'ArrowLeft': 'left', 'ArrowRight': 'right' })[event.code] }))
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

  addGameEnemy() {
    this.enemies.push(this.createGameEnemy())
    setTimeout(() => this.addGameEnemy(), this.timeout)
  }

  createGameEnemy() {
    const enemy = new GameEnemy()
    this.scene.add(enemy)
    return enemy
  }

  moveEnemies() {
    this.enemies.map((e) => e.move())
    this.checkEnemiesCollisions()
  }

  checkEnemiesCollisions({ x, z } = this.player.position) {
    const collisions = this.enemies
      .filter((e) => e.position.x == x)
      .filter((e) => e.position.z == z)

    if (collisions.length > 0) window.dispatchEvent(new EnemyCollisionEvent())
  }

  animate() {
    this.renderer.render(this.scene, this.camera)
  }

  reset() {
    this.player.position.set(0, 0, 0)
  }
}
