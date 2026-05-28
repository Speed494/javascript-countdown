function start(){
	document.getElementById("btn").style.display="none";
var time = 60;
x = setInterval(function(){
document.getElementById("count").innerText=time;
time --;
console.log(time);
if(time < 0){
clearInterval(x)
document.getElementById("count").innerText="Done";
document.getElementById("btn").style.display="block";
}
},1000);
}
