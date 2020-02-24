function Background() {}

Background.prototype.draw = function(context) {
    context.fillStyle = '#000'
    context.fillRect(0, 0, game.width, game.height)
}

const canvas = $('canvas')[0]
game = new Game(canvas)

game.entities = [
    new Background(),
    new Ball(),
    new Paddle(10),
    new Paddle(game.width - 30),
]

game.start()
canvas.focus()
