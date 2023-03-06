radio.onReceivedNumber(function (receivedNumber) {
    if (receivedNumber == 0) {
        basic.showNumber(0)
    } else if (receivedNumber == 1) {
        basic.showNumber(1)
    } else if (receivedNumber == 2) {
        basic.showNumber(2)
    } else if (receivedNumber == 3) {
        basic.showNumber(3)
    } else if (receivedNumber == 4) {
        basic.showNumber(4)
    }
})
input.onButtonPressed(Button.AB, function () {
    basic.showString("Are you sure about that?")
    basic.clearScreen()
    if (input.buttonIsPressed(Button.A)) {
        radio.sendNumber(subject)
    } else {
        control.waitMicros(10000)
        basic.showNumber(subject)
    }
})
input.onButtonPressed(Button.B, function () {
    if (subject == 4) {
        subject = 0
    } else {
        subject += 1
    }
})
let subject = 0
subject = 0
basic.forever(function () {
    basic.showNumber(subject)
})
