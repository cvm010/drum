
for(var i=0; i<document.querySelectorAll(".drum").length;i++){
    document.querySelectorAll("button")[i].addEventListener("click",fun);
}


function fun(){   
   
    var butn = this.innerHTML;

    animation(butn);
    switch(butn){
        case "w":{
            var audio= new Audio("sounds/crash.mp3");
            audio.play();
            break;
        }
        case "a":{
            var audio1= new Audio("sounds/kick-bass.mp3");
            audio1.play();
            break;
        }
        case "s":{
            var audio= new Audio("sounds/snare.mp3");
            audio.play();
            break;
        }
        case "d":{
            var audio= new Audio("sounds/tom-1.mp3");
    audio.play();
    break;
        }
        case "j":{
            var audio= new Audio("sounds/tom-2.mp3");
    audio.play();
    break;
        }
        case "k":{
            var audio= new Audio("sounds/tom-3.mp3");
    audio.play();
    break;
        }
        case "l":{
            var audio= new Audio("sounds/tom-4.mp3");
            audio.play();
            break;
        }
        default:{
            alert("Are u blind, press specific keys");
        }
    }
    
}




document.addEventListener("keypress",function(event){
    // console.log(event);

    var ram= event.key;
    animation(ram);

    switch(ram){
        case "w":{
            var audio= new Audio("sounds/crash.mp3");
            audio.play();
            break;
        }
        case "a":{
            var audio1= new Audio("sounds/kick-bass.mp3");
            audio1.play();
            break;
        }
        case "s":{
            var audio= new Audio("sounds/snare.mp3");
            audio.play();
            break;
        }
        case "d":{
            var audio= new Audio("sounds/tom-1.mp3");
    audio.play();
    break;
        }
        case "j":{
            var audio= new Audio("sounds/tom-2.mp3");
    audio.play();
    break;
        }
        case "k":{
            var audio= new Audio("sounds/tom-3.mp3");
    audio.play();
    break;
        }
        case "l":{
            var audio= new Audio("sounds/tom-4.mp3");
            audio.play();
            break;
        }
        default:{
            alert("Are u blind, press specific keys");
        }
    }
});


function animation(currButn){

    var activeBtn= document.querySelector("."+ currButn);
    activeBtn.classList.add("pressed");
    
    setTimeout(function(){
        activeBtn.classList.remove("pressed");
    },100);

}








// document.querySelectorAll("button")[0].addEventListener("click",function(){
//     var audio= new Audio("sounds/crash.mp3");
//     audio.play();
// });
// document.querySelectorAll("button")[1].addEventListener("click",function(){
//     var audio1= new Audio("sounds/kick-bass.mp3");
//     audio1.play();
// });
// document.querySelectorAll("button")[2].addEventListener("click",function(){
//     var audio= new Audio("sounds/snare.mp3");
//     audio.play();
// });
// document.querySelectorAll("button")[3].addEventListener("click",function(){
//     var audio= new Audio("sounds/tom-1.mp3");
//     audio.play();
// });
// document.querySelectorAll("button")[4].addEventListener("click",function(){
//     var audio= new Audio("sounds/tom-2.mp3");
//     audio.play();
// });
// document.querySelectorAll("button")[5].addEventListener("click",function(){
//     var audio= new Audio("sounds/tom-3.mp3");
//     audio.play();
// });
// document.querySelectorAll("button")[6].addEventListener("click",function(){
//     var audio= new Audio("sounds/tom-4.mp3");
//     audio.play();
// });

