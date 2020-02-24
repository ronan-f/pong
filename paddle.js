function Paddle(xCoordinate) {
    Entity.call(this)

    this.width = 20
    this.height = 150

    this.x = xCoordinate
    this.y = game.height / 2 - this.height / 2
}

Paddle.prototype = Object.create(Entity.prototype)
Paddle.prototype.constructor = Paddle

Paddle.prototype.update = function() {
    Entity.prototype.update.apply(this, arguments)

    const speed = 15

    if (game.keyPressed.up) {
        this.yVelocity = -speed
    }

    if (game.keyPressed.down) {
        this.yVelocity = speed
    }
}
