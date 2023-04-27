for (let pořadí = 0; pořadí <= 3; pořadí++) {
    music.playTone(262, music.beat(BeatFraction.Quarter))
    basic.showNumber(3 - pořadí)
}
music.playTone(784, music.beat(BeatFraction.Whole))
basic.showString("Go")
basic.forever(function () {
	
})
