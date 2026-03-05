export class EnemyCollisionEvent extends CustomEvent {
  static NAME = 'enemy.collision'

  constructor() {
    super(EnemyCollisionEvent.NAME)
  }
}
