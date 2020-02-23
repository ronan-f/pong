function Ball() {
    Entity.call(this)

    this.width = 20
    this.height = 20
}

Ball.prototype = Object.create(Entity.prototype)
Ball.prototype.constructor = Ball
