controller.B.onEvent(ControllerButtonEvent.Pressed, function () {
    animation.stopAnimation(animation.AnimationTypes.All, wheel)
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    animation.runImageAnimation(
    wheel,
    [img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `],
    100,
    true
    )
})
let wheel: Sprite = null
game.setDialogTextColor(15)
game.setDialogFrame(img`
    ..bbabbaabbaabbaabbbbb..
    .b55ba55ba55ba55babb55b.
    a5555ba55ba55ba55ba5555a
    a5555bbaabbaabbaabb5555a
    ab55baaaaaaaaaaaaaab55ba
    bbabaaaaaaaaaaaaaaaabbab
    babbaaaaaaaaaaaaaaaaba5b
    ab5aaaaaaaaaaaaaaaaaa55a
    a55aaaaaaaaaaaaaaaaaa5ba
    b5abaaaaaaaaaaaaaaaabbab
    babbaaaaaaaaaaaaaaaaba5b
    ab5aaaaaaaaaaaaaaaaaa55a
    a55aaaaaaaaaaaaaaaaaa5ba
    b5abaaaaaaaaaaaaaaaabbab
    babbaaaaaaaaaaaaaaaaba5b
    ab5aaaaaaaaaaaaaaaaaa55a
    a55aaaaaaaaaaaaaaaaaa5ba
    b5abaaaaaaaaaaaaaaaabbab
    babbaaaaaaaaaaaaaaaababb
    ab55baaaaaaaaaaaaaab55ba
    a5555bbaabbaabbaabb5555a
    a5555ab55ab55ab55ab5555a
    .a55bbab55ab55ab55ab55a.
    ..aaabbaabbaabbaabbaaa..
    `)
game.showLongText("Welcome to WHEEL of FUTURE", DialogLayout.Full)
wheel = sprites.create(assets.image`wheel`, SpriteKind.Player)
forever(function () {
    scene.setBackgroundColor(2)
    pause(500)
    scene.setBackgroundColor(4)
    pause(500)
    scene.setBackgroundColor(5)
    pause(500)
    scene.setBackgroundColor(7)
    pause(500)
    scene.setBackgroundColor(8)
    pause(500)
    scene.setBackgroundColor(10)
    pause(500)
})
