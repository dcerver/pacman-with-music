input.onButtonPressed(Button.A, function () {
    Pacman.move(1)
})
function ghostPink () {
    if (Pinky.get(LedSpriteProperty.X) < Pacman.get(LedSpriteProperty.X)) {
        Pinky.change(LedSpriteProperty.X, 1)
        basic.pause(2000)
    } else {
        Pinky.change(LedSpriteProperty.X, -1)
        basic.pause(2000)
    }
    if (Pinky.get(LedSpriteProperty.Y) < Pacman.get(LedSpriteProperty.Y)) {
        Pinky.change(LedSpriteProperty.Y, 1)
        basic.pause(2000)
    } else {
        Pinky.change(LedSpriteProperty.Y, -1)
        basic.pause(2000)
    }
    if (Pacman.isTouching(Pinky)) {
        game.gameOver()
    }
}
function gameLogic () {
    if (Pacman.isTouching(pacdot)) {
        game.addScore(1)
        pacdot.delete()
    }
    pacdot = game.createSprite(randint(0, 4), randint(0, 4))
    pacdot.set(LedSpriteProperty.Blink, 8)
}
input.onButtonPressed(Button.B, function () {
    Pacman.turn(Direction.Right, 90)
})
let pacdot: game.LedSprite = null
let Pinky: game.LedSprite = null
let Pacman: game.LedSprite = null
Pacman = game.createSprite(2, 2)
Pinky = game.createSprite(4, 0)
pacdot = game.createSprite(4, 4)
pacdot.set(LedSpriteProperty.Blink, 8)
game.setScore(0)
game.startCountdown(60000)
basic.forever(function () {
    ghostPink()
    gameLogic()
})
