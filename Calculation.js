var f = document.getElementById("inp1").value;
var l = document.getElementById("inp2").value;

function multiply(f, l){
    document.getElementsByTagName("p").innerHTML = "The result is "+(f*l);
}

function divide(f, l){
    document.getElementsByTagName("p").innerHTML = "The result is "+(f/l);
}
