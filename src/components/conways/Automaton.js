import PreSeeds from './PreSeeds.js'
import Renderer from './Renderer.js'
import Cell from './Cell.js'

export default class Automaton {
  constructor (canvas, settings) {
    this.updateSettings(settings)
    this.renderer = new Renderer(canvas, settings)
  }

  updateSettings (newSettings) {
    this.updatePreSeed(newSettings.preSeed)
    this.renderStyle = newSettings.renderStyle
    this.fps = newSettings.fps
    this.width = newSettings.width
    this.height = newSettings.height
    this.unit = newSettings.unit
    console.log(this)
  }

  draw () {
    this.liveCells.map(cell => this.renderer.draw(cell))
  }

  updatePreSeed (preSeedName) {
    if (this.preSeedName === preSeedName) {
      return
    }

    this.preSeedName = preSeedName
    this.preSeed = PreSeeds[preSeedName]
    this.liveCells = this.preSeed.reduce((cells, [x, y]) => [
      ...cells,
      new Cell(x, y, true)
    ], [])
  }
}
