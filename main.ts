let distanz = 0
input.onButtonPressed(Button.A, function () {
    pins.servoWritePin(AnalogPin.P0, 180)
})
input.onButtonPressed(Button.B, function () {
    pins.servoWritePin(AnalogPin.P0, 0)
})
function messe_distanz () {
    distanz = sonar.ping(
    DigitalPin.P1,
    DigitalPin.P2,
    PingUnit.Centimeters
    )
    basic.pause(500)
    if (distanz < 4) {
        pins.servoWritePin(AnalogPin.P0, 180)
    } else {
        pins.servoWritePin(AnalogPin.P0, 0)
    }
}
basic.forever(function () {
	
})
