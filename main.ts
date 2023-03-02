input.onButtonPressed(Button.A, function () {
	
})
input.onButtonPressed(Button.AB, function () {
	
})
input.onButtonPressed(Button.B, function () {
    if (subject == 4) {
        subject = 1
    } else {
        subject += 1
    }
})
let subject = 0
subject = 1
basic.forever(function () {
    basic.showNumber(subject)
})
