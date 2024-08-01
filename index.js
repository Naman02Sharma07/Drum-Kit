// document.querySelector("button").addEventListener("click",function (){
//     alert("hello everyone");
// })
// function handleclick(){
//     alert("u what's up00");
// }
for(var i=0;i<document.querySelectorAll(".drum").length;i++){
    document.querySelectorAll(".drum")[i].addEventListener("click",function (){
        var inhtml=this.innerHTML;
        makesound(inhtml);
        animat(inhtml);
    })

    document.addEventListener("keydown",function (event){
        makesound(event.key);
        animat(event.key);
    })
    
}
function makesound(key){
    switch (key) {
        case "s":
            var audio=new Audio('Sounds/snare.mp3');
            audio.play();
            break;
        case "w":
            var audio=new Audio('Sounds/crash.mp3');
            audio.play();
            break;
        case "d":
            var audio=new Audio('Sounds/kick-bass.mp3');
            audio.play();
            break;
        case "a":
            var audio=new Audio('Sounds/tom-1.mp3');
            audio.play();
            break;
        case "j":
            var audio=new Audio('Sounds/tom-2.mp3');
            audio.play();
            break;
        case "k":
            var audio=new Audio('Sounds/tom-3.mp3');
            audio.play();
            break;
        case "l":
            var audio=new Audio('Sounds/tom-4.mp3');
            audio.play();
            break;       
        default:
            console.log(inhtml);
    }
}
function animat(currentkey){
    var activeButton=document.querySelector("."+currentkey);
    activeButton.classList.add("pressed");
    setTimeout(function(){
        activeButton.classList.remove("pressed");

    },1000)
}

//handleclick is another function that do the same thing we can use it too
//here the click is the venet that the use would do
//the above function that we actually use is the anonymous function

