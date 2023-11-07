function startGame () {
    chosenImage = shapes._pickRandom()
    chosenImage.showImage(0)
    x = 2
    y = 2
}
input.onButtonPressed(Button.A, function () {
    if (x > 0) {
        led.unplot(x, y)
        x += -1
    } else {
        music.play(music.builtinPlayableSoundEffect(soundExpression.hello), music.PlaybackMode.UntilDone)
    }
})
input.onButtonPressed(Button.B, function () {
    if (x < 4) {
        led.unplot(x, y)
        x += 1
    } else {
        music.play(music.builtinPlayableSoundEffect(soundExpression.sad), music.PlaybackMode.InBackground)
    }
})
input.onGesture(Gesture.Shake, function () {
    startGame()
})
input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    led.unplot(x, y)
    if (y > 0) {
        y += -1
    } else {
        y = 4
    }
})
let y = 0
let x = 0
let chosenImage: Image = null
let shapes: Image[] = []
shapes = [
images.iconImage(IconNames.Heart),
images.iconImage(IconNames.Happy),
images.iconImage(IconNames.Ghost),
images.iconImage(IconNames.Snake),
images.iconImage(IconNames.Giraffe),
images.iconImage(IconNames.EighthNote),
images.iconImage(IconNames.SmallSquare),
images.iconImage(IconNames.Rollerskate),
images.iconImage(IconNames.Triangle),
images.iconImage(IconNames.Surprised),
images.iconImage(IconNames.Chessboard)
]
startGame()
basic.forever(function () {
    led.plot(x, y)
})
