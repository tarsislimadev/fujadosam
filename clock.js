export class TickEvent extends CustomEvent {
  static NAME = 'tick'

  constructor() {
    super(TickEvent.NAME)
  }
}

export class Clock extends EventTarget {
  id = null
  second = null

  constructor(second = 1e3) {
    super()
    this.second = second
  }

  start() {
    this.id = setInterval(() => {
      this.dispatchEvent(new TickEvent())
    }, this.second)
  }

  stop() {
    clearInterval(this.id)
  }
}
