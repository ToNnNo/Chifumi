window.addEventListener('DOMContentLoaded', function(){

    let computer = new Computer();
    let player = new Player("ToNo");

    let game = new Game(player, computer);
    let buttons = document.querySelectorAll(".btn");

    let message = document.querySelector("#message");

    let firstPlayer = document.querySelector("#firstPlayer");
    let secondPlayer = document.querySelector("#secondPlayer");

    let firstPlayerName = document.querySelector("#firstPlayerName");
    let secondPlayerName = document.querySelector("#secondPlayerName");

    let firstPlayerScore = document.querySelector("#firstPlayerScore");
    let secondPlayerScore = document.querySelector("#secondPlayerScore");

    firstPlayerName.innerText = player.name;
    secondPlayerName.innerText = computer.name;

    firstPlayerScore.innerText = player.point;
    secondPlayerScore.innerText = computer.point;

    for(let btn of buttons){
        btn.addEventListener('click', function(){
            player.shape = ShapeFactory.createShape(this.dataset.shape);
            computer.randomShape();

            game.player1 = player;
            game.player2 = computer;

            message.innerText = game.comparator();

            firstPlayerScore.innerText = game.player1.point;
            secondPlayerScore.innerText = game.player2.point;

            firstPlayer.innerText = game.player1.shape.name;
            secondPlayer.innerText = game.player2.shape.name;
        });
    }
});