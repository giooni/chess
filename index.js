const play = document.getElementById("play");
const board = document.querySelector(".game")
const restart =document.getElementById("restart")

play.addEventListener("click", ()=>{
    board.style.display = "block";
    restart.style.display="block";
    play.style.display="none"
})
restart.addEventListener("click", ()=>{
    location.reload()
})