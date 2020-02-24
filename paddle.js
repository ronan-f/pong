function Paddle(xCoordinate) {
    Entity.call(this)

    this.width = 20
    this.height = 150

    this.x = xCoordinate
    this.y = game.height / 2 - this.height / 2
}

Paddle.prototype = Object.create(Entity.prototype)