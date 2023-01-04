var reelement = document.getElementById("verloren");

var blockSize = 25
var rows = 20
var cols = 20
var board
var context

var snakeX = blockSize * 5
var snakeY = blockSize * 5

var velocityX = 0
var velocityY = 0

var snakeBody = []

var foodX
var foodY

var gameOver = false
var gameOver2 = document.getElementById("verloren")

var scr = 0
var hscr = 0

window.onload = function trigger() {
    gameOver = false;
    board = document.getElementById("board")
    board.height = rows * blockSize
    board.width = cols * blockSize
    context = board.getContext("2d")

    placeFood()
    document.addEventListener("keyup", changeDirection)
    setInterval(update, 1000 / 9)
}

function update() {
    if (gameOver) {
        return;
    }

    context.fillStyle = "black"
    context.fillRect(0, 0, board.height, board.width)

    context.fillStyle = "red"
    context.fillRect(foodX, foodY, blockSize, blockSize)

    if (snakeX == foodX && snakeY == foodY) {
        scr++
        snakeBody.push([foodX, foodY])
        placeFood()
    }

    for (let i = snakeBody.length - 1; i > 0; i--) {
        snakeBody[i] = snakeBody[i - 1]
    }
    if (snakeBody.length) {
        snakeBody[0] = [snakeX, snakeY]
    }

    context.fillStyle = "lime"
    snakeX += velocityX * blockSize
    snakeY += velocityY * blockSize
    context.fillRect(snakeX, snakeY, blockSize, blockSize)
    for (let i = 0; i < snakeBody.length; i++) {
        context.fillRect(snakeBody[i][0], snakeBody[i][1], blockSize, blockSize)
    }

    for (let i = 0; i < snakeBody.length; i++) {
        if (snakeX == snakeBody[i][0] && snakeY == snakeBody[i][1]) {
            gameOver = true;
            reelement.classList.add("show");
        }
        else {
            reelement.classList.remove("show");
        }
    }

    if (snakeX <= 0 || snakeX >= cols * blockSize || snakeY <= 0 || snakeY >= rows * blockSize) {
        gameOver = true
        reelement.classList.add("show");
    }
    else {
        reelement.classList.remove("show");
    }
}

function changeDirection(e) {
    if (e.code == "ArrowUp" && velocityY != 1) {
        velocityX = 0
        velocityY = -1
    }
    else if (e.code == "ArrowDown" && velocityY != -1) {
        velocityX = 0
        velocityY = 1
    }
    else if (e.code == "ArrowLeft" && velocityX != 1) {
        velocityX = -1
        velocityY = 0
    }
    else if (e.code == "ArrowRight" && velocityX != -1) {
        velocityX = 1
        velocityY = 0
    }
}

function placeFood() {
    foodX = Math.floor(Math.random() * cols) * blockSize
    foodY = Math.floor(Math.random() * rows) * blockSize
}
function rebtn() {
    document.getElementById("score").innerText = scr
    if (scr > hscr) {
        hscr = scr
        document.getElementById("hscore").innerText = hscr
    } else {
        scr = 0

        blockSize = 25
        rows = 20
        cols = 20

        snakeX = blockSize * 5
        snakeY = blockSize * 5

        velocityX = 0
        velocityY = 0

        snakeBody = []
        gameOver = false

        placeFood()
        trigger();
    }

}

