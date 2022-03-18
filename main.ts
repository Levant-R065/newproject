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
let mySprite = sprites.create(img`
    ................................................................................................
    ......................................bbbbbbbbbcbbbbbbbbb.......................................
    ..................................bbbbbbbbbbbbbcbbbbbbbbbbbbb...................................
    ...............................bbbbbbbbbbbbbbbbcbbbbbbbbbbbbbbbb................................
    ............................bbbbbbbbbbbbbbbbbbbcbbbbbbbbbbbbbbbbbbb.............................
    ..........................bbbbbbbbbbbbbbbbbbbbbcbbbbbbbbbbbbbbbbbbbbb...........................
    ........................bbbbbbbbbbbbbbbbbbbbbbbcbbbbbbbbbbbbbbbbbbbbbbb.........................
    .......................bbbbbbbbbbbbbbbbbbbbbbbbcbbbbbbbbbbbbbbbbbbbbbbbb........................
    .....................bbbbbbbbbbbbbbbbbbbbbbbbbbcbbbbbbbbbbbbbbbbbbbbbbbbbb......................
    ....................bbbbbbbbbbbbbbbbbbbbbbbbbbbcbbbbbbbbbbbbbbbbbbbbbbbbbbb.....................
    ..................bbbbbbbbbbbbbbbbbbbbbbbbbbbbbcbbbbbbbbbbbbbbbbbbbbbbbbbbbbb...................
    .................bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbcbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb..................
    ................bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbcbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb.................
    ...............bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbcbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb................
    ..............bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbcbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbc..............
    .............cbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbcbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbcb..............
    ............bbcbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbcbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbcbbb.............
    ...........bbbbcbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbcbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbcbbbbb............
    ..........bbbbbbcbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbcbbbbbbbbbbbbbbbbbbbbbbbbbbbbbcbbbbbbb...........
    .........bbbbbbbbcbbbbbbbbbbbbbbbbbbbbbbbbbbbbbcbbbbbbbbbbbbbbbbbbbbbbbbbbbbcbbbbbbbbb..........
    .........bbbbbbbbbcbbbbbbbbbbbbbbbbbbbbbbbbbbbbcbbbbbbbbbbbbbbbbbbbbbbbbbbbcbbbbbbbbbb..........
    ........bbbbbbbbbbbcbbbbbbbbbbbbbbbbbbbbbbbbbbbcbbbbbbbbbbbbbbbbbbbbbbbbbbcbbbbbbbbbbbb.........
    .......bbbbbbbbbbbbbcbbbbbbbbbbbbbbbbbbbbbbbbbbcbbbbbbbbbbbbbbbbbbbbbbbbbcbbbbbbbbbbbbbb........
    .......bbbbbbbbbbbbbbcbbbbbbbbbbbbbbbbbbbbbbbbbcbbbbbbbbbbbbbbbbbbbbbbbbcbbbbbbbbbbbbbbb........
    ......bbbbbbbbbbbbbbbbcbbbbbbbbbbbbbbbbbbbbbbbbcbbbbbbbbbbbbbbbbbbbbbbbcbbbbbbbbbbbbbbbbb.......
    .....bbbbbbbbbbbbbbbbbbcbbbbbbbbbbbbbbbbbbbbbbbcbbbbbbbbbbbbbbbbbbbbbbcbbbbbbbbbbbbbbbbbbb......
    .....bbbbbbbbbbbbbbbbbbbcbbbbbbbbbbbbbbbbbbbbbbcbbbbbbbbbbbbbbbbbbbbbcbbbbbbbbbbbbbbbbbbbb......
    ....bbbbbbbbbbbbbbbbbbbbbcbbbbbbbbbbbbbbbbbbbbbcbbbbbbbbbbbbbbbbbbbbcbbbbbbbbbbbbbbbbbbbbbb.....
    ....bbbbbbbbbbbbbbbbbbbbbbcbbbbbbbbbbbbbbbbbbbbcbbbbbbbbbbbbbbbbbbbcbbbbbbbbbbbbbbbbbbbbbbb.....
    ...bbbbbbbbbbbbbbbbbbbbbbbbcbbbbbbbbbbbbbbbbbbbcbbbbbbbbbbbbbbbbbbcbbbbbbbbbbbbbbbbbbbbbbbbb....
    ...bbbbbbbbbbbbbbbbbbbbbbbbbcbbbbbbbbbbbbbbbbbbcbbbbbbbbbbbbbbbbbcbbbbbbbbbbbbbbbbbbbbbbbbbb....
    ...bbbbbbbbbbbbbbbbbbbbbbbbbbcbbbbbbbbbbbbbbbbbcbbbbbbbbbbbbbbbbcbbbbbbbbbbbbbbbbbbbbbbbbbbb....
    ..bbbbbbbbbbbbbbbbbbbbbbbbbbbbcbbbbbbbbbbbbbbbbcbbbbbbbbbbbbbbbcbbbbbbbbbbbbbbbbbbbbbbbbbbbbb...
    ..bbbbbbbbbbbbbbbbbbbbbbbbbbbbbcbbbbbbbbbbbbbbbcbbbbbbbbbbbbbbcbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb...
    ..bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbcbbbbbbbbbbbbbbcbbbbbbbbbbbbbcbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb...
    .bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbcbbbbbbbbbbbbbcbbbbbbbbbbbbcbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb..
    .bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbcbbbbbbbbbbbbcbbbbbbbbbbbcbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb..
    .bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbcbbbbbbbbbbbcbbbbbbbbbbcbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb..
    .bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbcbbbbbbbbbbcbbbbbbbbbcbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb..
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbcbbbbbbbbbcbbbbbbbbcbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb.
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbcbbbbbbbbcbbbbbbbcbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb.
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbcbbbbbbbcbbbbbbcbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb.
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbcbbbbbbcbbbbbcbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb.
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbcbbbbbcbbbbcbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb.
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbcbbbbcbbbcbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb.
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbcbbbcbbcbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb.
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbcbbcbcbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb.
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb.
    ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc.
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb.
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb.
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbcbbcbcbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb.
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbcbbbcbbcbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb.
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbcbbbbcbbbcbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb.
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbcbbbbbcbbbbcbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb.
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbcbbbbbbcbbbbbcbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb.
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbcbbbbbbbcbbbbbbcbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb.
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbcbbbbbbbbcbbbbbbbcbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb.
    .bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbcbbbbbbbbbcbbbbbbbbcbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb..
    .bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbcbbbbbbbbbbcbbbbbbbbbcbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb..
    .bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbcbbbbbbbbbbbcbbbbbbbbbbcbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb..
    .bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbcbbbbbbbbbbbbcbbbbbbbbbbbcbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb..
    ..bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbcbbbbbbbbbbbbbcbbbbbbbbbbbbcbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb...
    ..bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbcbbbbbbbbbbbbbbcbbbbbbbbbbbbbcbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb...
    ..bbbbbbbbbbbbbbbbbbbbbbbbbbbbbcbbbbbbbbbbbbbbbcbbbbbbbbbbbbbbcbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb...
    ...bbbbbbbbbbbbbbbbbbbbbbbbbbbcbbbbbbbbbbbbbbbbcbbbbbbbbbbbbbbbcbbbbbbbbbbbbbbbbbbbbbbbbbbbb....
    ...bbbbbbbbbbbbbbbbbbbbbbbbbbcbbbbbbbbbbbbbbbbbcbbbbbbbbbbbbbbbbcbbbbbbbbbbbbbbbbbbbbbbbbbbb....
    ...bbbbbbbbbbbbbbbbbbbbbbbbbcbbbbbbbbbbbbbbbbbbcbbbbbbbbbbbbbbbbbcbbbbbbbbbbbbbbbbbbbbbbbbbb....
    ....bbbbbbbbbbbbbbbbbbbbbbbcbbbbbbbbbbbbbbbbbbbcbbbbbbbbbbbbbbbbbbcbbbbbbbbbbbbbbbbbbbbbbbb.....
    ....bbbbbbbbbbbbbbbbbbbbbbcbbbbbbbbbbbbbbbbbbbbcbbbbbbbbbbbbbbbbbbbcbbbbbbbbbbbbbbbbbbbbbbb.....
    .....bbbbbbbbbbbbbbbbbbbbcbbbbbbbbbbbbbbbbbbbbbcbbbbbbbbbbbbbbbbbbbbcbbbbbbbbbbbbbbbbbbbbb......
    .....bbbbbbbbbbbbbbbbbbbcbbbbbbbbbbbbbbbbbbbbbbcbbbbbbbbbbbbbbbbbbbbbcbbbbbbbbbbbbbbbbbbbb......
    ......bbbbbbbbbbbbbbbbbcbbbbbbbbbbbbbbbbbbbbbbbcbbbbbbbbbbbbbbbbbbbbbbcbbbbbbbbbbbbbbbbbb.......
    .......bbbbbbbbbbbbbbbcbbbbbbbbbbbbbbbbbbbbbbbbcbbbbbbbbbbbbbbbbbbbbbbbcbbbbbbbbbbbbbbbb........
    .......bbbbbbbbbbbbbbcbbbbbbbbbbbbbbbbbbbbbbbbbcbbbbbbbbbbbbbbbbbbbbbbbbcbbbbbbbbbbbbbbb........
    ........bbbbbbbbbbbbcbbbbbbbbbbbbbbbbbbbbbbbbbbcbbbbbbbbbbbbbbbbbbbbbbbbbcbbbbbbbbbbbbb.........
    .........bbbbbbbbbbcbbbbbbbbbbbbbbbbbbbbbbbbbbbcbbbbbbbbbbbbbbbbbbbbbbbbbbcbbbbbbbbbbb..........
    .........bbbbbbbbbcbbbbbbbbbbbbbbbbbbbbbbbbbbbbcbbbbbbbbbbbbbbbbbbbbbbbbbbbcbbbbbbbbbb..........
    ..........bbbbbbbcbbbbbbbbbbbbbbbbbbbbbbbbbbbbbcbbbbbbbbbbbbbbbbbbbbbbbbbbbbcbbbbbbbb...........
    ...........bbbbbcbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbcbbbbbbbbbbbbbbbbbbbbbbbbbbbbbcbbbbbb............
    ............bbbcbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbcbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbcbbbb.............
    .............bcbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbcbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbcbbb.............
    ..............bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbcbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbc...............
    ...............bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbcbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb................
    ................bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbcbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb.................
    .................bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbcbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb..................
    ..................bbbbbbbbbbbbbbbbbbbbbbbbbbbbbcbbbbbbbbbbbbbbbbbbbbbbbbbbbbb...................
    ....................bbbbbbbbbbbbbbbbbbbbbbbbbbbcbbbbbbbbbbbbbbbbbbbbbbbbbbb.....................
    .....................bbbbbbbbbbbbbbbbbbbbbbbbbbcbbbbbbbbbbbbbbbbbbbbbbbbbb......................
    .......................bbbbbbbbbbbbbbbbbbbbbbbbcbbbbbbbbbbbbbbbbbbbbbbbb........................
    ........................bbbbbbbbbbbbbbbbbbbbbbbcbbbbbbbbbbbbbbbbbbbbbbb.........................
    ..........................bbbbbbbbbbbbbbbbbbbbbcbbbbbbbbbbbbbbbbbbbbb...........................
    ............................bbbbbbbbbbbbbbbbbbbcbbbbbbbbbbbbbbbbbbb.............................
    ...............................bbbbbbbbbbbbbbbbcbbbbbbbbbbbbbbbb................................
    ..................................bbbbbbbbbbbbbcbbbbbbbbbbbbb...................................
    ......................................bbbbbbbbbcbbbbbbbbb.......................................
    `, SpriteKind.Player)
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
