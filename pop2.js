const pop = document.querySelector("#btn");
const press = document.querySelector("#pop1");

const openImage = "./image/2.png";
const closeImage = "./image/1.png";

const music = new Audio ('./sound/3.mp3');


press.addEventListener("mousedown",openMount);
press.addEventListener("mouseup",closeMount);

press.addEventListener("touchstart",function(e){
    e.preventDefault();
    openMount();
})
press.addEventListener("touchend",function(e){
    e.preventDefault();
    closeMount();
})

function openMount(){
    pop.src = openImage;
    music.play();
}
function closeMount(){
    pop.src = closeImage;
}