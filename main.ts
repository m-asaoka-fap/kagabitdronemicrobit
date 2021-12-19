input.onGesture(Gesture.TiltRight, function () {
    Tello.right(50)
    basic.showLeds(`
        . . # . .
        . . . # .
        # # # # #
        . . . # .
        . . # . .
        `)
    basic.pause(100)
})
input.onButtonPressed(Button.A, function () {
    distanse += -10
    basic.showString("" + (distanse))
})
input.onGesture(Gesture.TiltLeft, function () {
    Tello.left(50)
    basic.showLeds(`
        . . # . .
        . # . . .
        # # # # #
        . # . . .
        . . # . .
        `)
    basic.pause(100)
})
input.onGesture(Gesture.LogoUp, function () {
    Tello.back(50)
    basic.showLeds(`
        . . # . .
        . . # . .
        # . # . #
        . # # # .
        . . # . .
        `)
    basic.pause(100)
})
input.onGesture(Gesture.LogoDown, function () {
    Tello.forward(50)
    basic.showLeds(`
        . . # . .
        . # # # .
        # . # . #
        . . # . .
        . . # . .
        `)
    basic.pause(100)
})
input.onButtonPressed(Button.AB, function () {
    if (Tello.getflying()) {
        Tello.land()
        basic.showLeds(`
            . # # # .
            . # # # .
            # # # # #
            . # # # .
            . . # . .
            `)
    } else {
        Tello.takeoff()
        basic.showLeds(`
            . . # . .
            . # # # .
            # # # # #
            . # # # .
            . # # # .
            `)
    }
})
input.onButtonPressed(Button.B, function () {
    distanse += 10
    basic.showString("" + (distanse))
})
let distanse = 0
Tello.radiosetgroup(101)
distanse = 30
