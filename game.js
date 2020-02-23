function Game(canvas) {
    this.context = canvas.getContext('2d')
    this.width = canvas.width
    this.height = canvas.height

    this.keyPressed = {}

    $(canvas).on('keydown keyup', e => {
        const keyName = Game.keys[e.which]

        if (keyName) {
            this.keyPressed[keyName] = e.type === 'keydown'
            e.preventDefault()
        }
    })
}

Game.keys = {
    32: 'space',
    37: 'left',
    38: 'up',
    39: 'right',
    40: 'down',
}

Game.prototype.start = function() {
    const fps = 60,
        interval = 1000 / fps
    setInterval(() => {
        this.update()
        this.draw()
    }, interval)
}

Game.prototype.update = function() {
    this.entities.forEach(entity => {
        if (entity.update) entity.update()
    })
}

Game.prototype.draw = function() {
    this.entities.forEach(entity => {
        if (entity.draw) entity.draw(this.context)
    })
}
