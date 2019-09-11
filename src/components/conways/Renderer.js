export default class Renderer {
  constructor (canvas, { width, height, unit }) {
    this.canvas = canvas
    this.ctx = canvas.getContext('2d')
    this.width = width
    this.height = height
    this.unit = unit
  }

  draw (cell) {
    this.ctx.beginPath()
    this.ctx.fillStyle = 'black'
    this.ctx.fillRect(cell.x * this.unit, cell.y * this.unit, this.unit, this.unit)
    this.ctx.closePath()
  }
}
