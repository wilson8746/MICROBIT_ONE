input.onButtonPressed(Button.A, function () {
    basic.showNumber(9)
    basic.pause(1000)
    basic.showNumber(5)
    basic.pause(1000)
    basic.showNumber(2)
    basic.pause(1000)
    basic.showLeds(`
        # # . # #
        # # . # #
        . . . . .
        . # # # .
        # . . . #
        `)
    basic.pause(1000)
})
basic.forever(function () {
	
})
