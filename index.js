import { Game } from './game.js'

const game = new Game()

const app = document.getElementById('app')

const buttons = document.createElement('div')
buttons.style.display = 'flex'
buttons.style.justifyContent = 'space-between'

const createButton = (text, onclick) => {
  const btn = document.createElement('button')
  btn.innerText = text
  btn.addEventListener('click', () => onclick())
  return btn
}

buttons.appendChild(createButton('human', () => {
  buttons.remove()
  game.setIsAI(false).start()
}))
buttons.appendChild(createButton('ai', () => {
  buttons.remove()
  game.setIsAI(true).start()
}))
app.appendChild(buttons)
app.appendChild(game.renderer.domElement)
