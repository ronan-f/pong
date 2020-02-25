function Ball() {
    Entity.call(this)

    this.width = 20
    this.height = 20

    this.reset()
}

Ball.prototype = Object.create(Entity.prototype)
Ball.prototype.constructor = Ball

Ball.prototype.reset = function() {
    this.x = game.width / 2 - this.width
    this.y = game.height / 2 - this.height

    const min = 5,
        max = 10

    this.xVelocity = Math.random() > 0.5 ? -5 : 5
    this.yVelocity = Math.floor(Math.random() * (max - min + 1) + min)
}

Ball.prototype.update = function() {
    Entity.prototype.update.apply(this, arguments)

    if (this.y > game.height - this.height || this.y < 0) {
        this.yVelocity *= -1
    }

    if (this.x > game.width - this.width || this.x < 0) {
        this.reset()
    }

    let hitter

    if (this.intersect(game.bot)) {
        hitter = game.bot
    } else if (this.intersect(game.player)) {
        hitter = game.player
    }

    if (hitter) {
        this.xVelocity *= -1.1
        this.yVelocity *= -1.1

        this.yVelocity += hitter.yVelocity / 4
    }
}
