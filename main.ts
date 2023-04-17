let degree = 0
let strip = neopixel.create(DigitalPin.P0, 150, NeoPixelMode.RGB)
strip.showRainbow(1, 360)
strip.easeBrightness()
basic.forever(function () {
    strip.rotate(1)
    strip.show()
    degree = input.compassHeading()
    if (degree <= 10) {
        strip.showColor(neopixel.colors(NeoPixelColors.Blue))
    } else if (degree <= 50) {
        strip.showColor(neopixel.colors(NeoPixelColors.Green))
    } else if (degree <= 90) {
        strip.showColor(neopixel.colors(NeoPixelColors.Purple))
    } else if (degree <= 180) {
        strip.showColor(neopixel.colors(NeoPixelColors.Yellow))
    } else if (degree <= 250) {
        strip.showColor(neopixel.colors(NeoPixelColors.Orange))
    } else if (degree <= 360) {
        strip.showColor(neopixel.colors(NeoPixelColors.Red))
    }
})
