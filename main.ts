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
    led.unplot(x, y)
    x = 2
    y = 2
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
basic.showNumber(6)
x = 2
y = 2
basic.forever(function () {
    led.plot(x, y)
})
