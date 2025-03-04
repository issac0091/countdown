OLED.init(128, 64)
for (let index = 0; index <= 59; index++) {
    basic.showNumber(60 - index)
    music.play(music.tonePlayable(262, music.beat(BeatFraction.Sixteenth)), music.PlaybackMode.UntilDone)
}
basic.pause(500)
music.play(music.tonePlayable(523, music.beat(BeatFraction.Whole)), music.PlaybackMode.UntilDone)
