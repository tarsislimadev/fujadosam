export class PlayerOutsideEvent extends CustomEvent {
  static NAME = 'player.outside'

  constructor({ side } = {}) {
    super(PlayerOutsideEvent.NAME, { detail: { side } })
  }
}
