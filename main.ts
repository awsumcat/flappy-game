input.onButtonPressed(Button.A, function () {
    flappy.change(LedSpriteProperty.Y, 1)
})
input.onButtonPressed(Button.B, function () {
    flappy.change(LedSpriteProperty.Y, -1)
})
let empty_space = 0
let flappy: game.LedSprite = null
let obstacle: game.LedSprite[] = []
flappy = game.createSprite(0, 2)
flappy.set(LedSpriteProperty.Blink, 6000)
let speed = 5
basic.forever(function () {
    empty_space = randint(0, 4)
    for (let index = 0; index <= 4; index++) {
        if (index != empty_space) {
            obstacle.push(game.createSprite(4, index))
        }
    }
    basic.pause(speed * 1000)
})
basic.forever(function () {
    for (let value of obstacle) {
        value.change(LedSpriteProperty.X, -1)
    }
    for (let value of obstacle) {
        if (flappy.get(LedSpriteProperty.X) == value.get(LedSpriteProperty.X) && flappy.get(LedSpriteProperty.Y) == value.get(LedSpriteProperty.Y)) {
            basic.pause(500)
            game.gameOver()
        }
    }
    for (let value of obstacle) {
        if (value.get(LedSpriteProperty.X) == 0) {
            value.delete()
        }
    }
    basic.pause(1000)
})
