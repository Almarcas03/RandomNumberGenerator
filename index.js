function st() {
    var min = document.getElementById("min").value;
    var max = document.getElementById("max").value;

    RNG(min,max)

}

function dmg () {
    var atq = document.getElementById("atq").value;
    var def = document.getElementById("def").value;
    var pot = document.getElementById("pot").value;
    function atk_dmg (atq, def, pot)
}
function prec () {
    var pre = document.getElementById("pre").value;
    var eva = document.getElementById("eva").value;
    var acc = document.getElementById("acc").value;

    function atk_prec (pre, eva, acc)
}

function RNG(min,max){
    document.getElementById("result").innerHTML = Math.floor((Math.random() * max) + min)+1;
}

function atk_dmg (atq, def, pot){
    document.getElementById("dmg").innerHTML = (atq + pot)/def;
}

function atk_prec ( pre, eva, acc) {
    document.getElementById("prec").innerHTML = "dc(" + ((pre - eva)+acc)*0.9 + ")";
}