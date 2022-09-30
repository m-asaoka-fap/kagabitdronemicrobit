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
    Tello.rotate_cw(90)
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
    Tello.fly_or_land()
    if (Tello.getflying()) {
        basic.showLeds(`
            . . # . .
            . # # # .
            # # # # #
            . # # # .
            . # . # .
            `)
    } else {
        basic.showLeds(`
            . # . # .
            . # # # .
            # # # # #
            . # # # .
            . . # . .
            `)
    }
})
input.onButtonPressed(Button.B, function () {
    Tello.rotate_ccw(90)
})
Tello.radiosetgroup(101)
