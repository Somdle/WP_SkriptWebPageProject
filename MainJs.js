var blackTheme = false;
var blackTheme_target = document.getElementsByClassName("blackTheme_target", "link");
function colorChange(){
    if (blackTheme === false){
        blackTheme = true;
        for(var i = 0; i < blackTheme_target.length; i++){
            blackTheme_target.item(i).style.color = "white";
        }
        document.body.style.background="#2E2E2E";
    }
    else{
        blackTheme = false;
        for(var i = 0; i < blackTheme_target.length; i++){
            blackTheme_target.item(i).style.color = "black";
        }
        document.body.style.background="white";
    }
}