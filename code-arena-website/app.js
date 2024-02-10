function handlemouseover(event){

if(event.target.classList.contains('square')){console.log("Mouse on", event.target.id);}

}

function handlemouseout(event){console.log("Mouse out",event.target.id);
let arr = [];arr.push(event.target.id);
document.getElementById(event.target.id).style.border = "0.1vw solid white";

setTimeout(() => {

arr.forEach(i => {document.getElementById(i).style.animation = "0.5s hide forwards";});

setTimeout(() => {

arr.forEach(i => {

document.getElementById(i).style.animation = "";
document.getElementById(i).style.border = "0.1vw solid black";

});

}, 300);

}, 300);


}

let cont = document.querySelector('.main_background_div');

cont.addEventListener('mouseover', handlemouseover);

cont.addEventListener('mouseout', handlemouseout);

setTimeout(function(){document.getElementById("hide_anm_help").style.display = "none"; }, 1500)

document.addEventListener('scroll', () => {console.log(scrollY);

	if(scrollY > 920){
		document.getElementById("main_2").style.animation = ".3s clip_path_end linear forwards";
	}
	else{
		document.getElementById("main_2").style.animation = ".3s clip_path_res linear forwards";
	}
	//increase scrollY for top_navigation_bar when page length increases!!!
	if(scrollY  > 900){document.getElementById("top_navigation_bar").style.display = "block"; document.getElementById("top_navigation_bar").style.animation = "0.8s nav_down forwards";}
	else{document.getElementById("top_navigation_bar").style.animation = "0.001s nav_up forwards"; }

});

setTimeout(() => {document.body.style.overflowY = "none"}, 4900);

setTimeout(() => {document.getElementById("check").style.display = "none"; document.getElementById("cc").style.display = "none"; document.body.style.overflow = "scroll"; document.body.style.overflowX = "hidden";}, 4900)

setTimeout(() => {document.getElementById("code_anm_2").style.opacity = "1"; document.getElementById("code_anm").style.animation = "none"; document.getElementById("code_anm").style.borderRight = "none";}, 5000);

setTimeout(() => {document.getElementById("code_anm_2").style.animation = "none"; document.getElementById("code_anm_2").style.borderRight = "none"; document.getElementById("code_anm_3").style.opacity = "1";}, 10000);

setTimeout(() => {document.getElementById("code_anm_3").style.animation = "none"; document.getElementById("code_anm_3").style.borderRight = "none";},12700);

setTimeout(() => {document.getElementById("code_anm_3").style.animation = "none"; document.getElementById("code_anm_3").style.borderRight = "none"; document.getElementById("code_anm_4").style.opacity = "1";}, 12700);

setTimeout(() => {document.getElementById("code_anm_4").style.animation = "none"; document.getElementById("code_anm_4").style.borderRight = "none";},15700);

setTimeout(() => {document.getElementById("code_anm_4").style.animation = "none"; document.getElementById("code_anm_4").style.borderRight = "none"; document.getElementById("code_anm_5").style.opacity = "1";}, 15700);

//setTimeout(() => {document.getElementById("code_anm_5").style.animation = "none"; document.getElementById("code_anm_5").style.borderRight = "none";},33700);

setTimeout(() => {


let i = 0;

let max_val_stars = 1000;

for(i = 0; i < max_val_stars; i++){

	var newdiv = document.createElement("div");
	
	const a = document.getElementById("a");
	
	a.appendChild(newdiv);
	
	newdiv.setAttribute("class", "star");
	
	var posX = Math.floor(Math.random() * 2055);
	var posY = Math.floor(Math.random() * 842);
	var anm_tim = Math.floor(Math.random() * 4 + 1) + "s";
	//var anm_tim = "1s";
	
	newdiv.style.left = posX + "px";
	newdiv.style.top = posY + "px";
	newdiv.style.position = "relative";
	newdiv.style.zIndex = "1000000";
	newdiv.style.animation = `${anm_tim} twinkle linear alternate-reverse infinite`;
	newdiv.style.opacity = "0.7";
	}

}, 4000);
