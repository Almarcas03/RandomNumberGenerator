function st() {
    var min = document.getElementById("min").value;
    var max = document.getElementById("max").value;

    RNG(min,max)

}

function RNG(min,max){
    document.getElementById("result").innerHTML = Math.floor((Math.random() * max) + min)+1;
}