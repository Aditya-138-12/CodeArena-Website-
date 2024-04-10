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


//SCROLL FUNCTION FOR THE PAGE!!
document.addEventListener('scroll', () => {console.log(scrollY);
	
	if(scrollY > 920){
		document.getElementById("main_2").style.animation = ".3s clip_path_end linear forwards";
	}
	else{
		document.getElementById("main_2").style.animation = ".3s clip_path_res linear forwards";
	}
	//increase scrollY for top_navigation_bar when page length increases!!!
	if(scrollY  > 925){document.getElementById("top_navigation_bar").style.display = "block"; document.getElementById("top_navigation_bar").style.animation = "0.4s nav_down forwards";
	setTimeout(() => {document.getElementById("top_navigation_bar_logo").style.animation = "1s opac_end forwards";}, 1000);
	setTimeout(() => {document.getElementById("top_navigation_bar_link_home").style.animation = "1s opac_end forwards";}, 1100);
	setTimeout(() => {document.getElementById("top_navigation_bar_link_resources").style.animation = "1s opac_end forwards";}, 1150);
	setTimeout(() => {document.getElementById("top_navigation_bar_link_documentation").style.animation = "1s opac_end forwards";}, 1200);
	setTimeout(() => {document.getElementById("top_navigation_bar_link_gallery").style.animation = "1s opac_end forwards";}, 1250);
	setTimeout(() => {document.getElementById("top_navigation_bar_link_alumini").style.animation = "1s opac_end forwards";}, 1300);
	setTimeout(() => {document.getElementById("top_navigation_bar_link_club").style.animation = "1s opac_end forwards";}, 1350);
	}
	else{document.getElementById("top_navigation_bar").style.animation = "0.001s nav_up forwards"; document.getElementById("top_navigation_bar_logo").style.animation = "0.001s opac_sust forwards"; document.getElementById("top_navigation_bar_link_home").style.animation = "0.001s opac_sust forwards"; document.getElementById("top_navigation_bar_link_resources").style.animation = "0.001s opac_sust forwards"; document.getElementById("top_navigation_bar_link_documentation").style.animation = "0.001s opac_sust forwards"; document.getElementById("top_navigation_bar_link_gallery").style.animation = "0.001s opac_sust forwards"; document.getElementById("top_navigation_bar_link_alumini").style.animation = "0.001s opac_sust forwards"; document.getElementById("top_navigation_bar_link_club").style.animation = "0.001s opac_sust forwards";}
	
	if(scrollY > 925){document.getElementById("events_bar").style.right = "-17vw";}
	else{document.getElementById("events_bar").style.right = "-20vw";}
	
	if(scrollY > 880){
	document.getElementById("faculty_profile_div").style.animation = "1s rot_for linear forwards";}
	
	if(scrollY > 1000){
	document.getElementById("student_1_profile_div").style.animation = "1s rot_for linear forwards";}
	
	if(scrollY > 1180){
	document.getElementById("student_2_profile_div").style.animation = "1s rot_for linear forwards";}
	
	if(scrollY > 1500){
	document.getElementById("student_5_profile_div").style.animation = "1s rot_for linear forwards";}
	
	if(scrollY > 1620){
	document.getElementById("student_4_profile_div").style.animation = "0.5s rot_for linear forwards";}
	
	if(scrollY > 1800){
	document.getElementById("student_3_profile_div").style.animation = "0.5s rot_for linear forwards";}
	
	if(scrollY > 2070){
	document.getElementById("student_6_profile_div").style.animation = "1s rot_for linear forwards";}
	
	if(scrollY > 2190){
	document.getElementById("student_7_profile_div").style.animation = "0.5s rot_for linear forwards";}
	
	if(scrollY > 2270){
	document.getElementById("student_8_profile_div").style.animation = "0.5s rot_for linear forwards";}
	
	if(scrollY > 2600){
	document.getElementById("student_9_profile_div").style.animation = "0.5s rot_for linear forwards";}
	
	else if(scrollY < 880){document.getElementById("faculty_profile_div").style.animation = "0.5s rot_rev linear forwards"; document.getElementById("student_1_profile_div").style.animation = "0.5s rot_rev linear forwards"; document.getElementById("student_2_profile_div").style.animation = "0.5s rot_rev linear forwards";}
	
	else if(scrollY < 1500){document.getElementById("student_5_profile_div").style.animation = "0.5s rot_rev linear forwards"; document.getElementById("student_4_profile_div").style.animation = "0.5s rot_rev linear forwards"; document.getElementById("student_3_profile_div").style.animation = "0.5s rot_rev linear forwards";}
	
	else if(scrollY < 2070){document.getElementById("student_6_profile_div").style.animation = "0.5s rot_rev linear forwards"; document.getElementById("student_7_profile_div").style.animation = "0.5s rot_rev linear forwards"; document.getElementById("student_8_profile_div").style.animation = "0.5s rot_rev linear forwards";}
	
	else if(scrollY < 2600){document.getElementById("student_9_profile_div").style.animation = "0.5s rot_rev linear forwards";}
	
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

let max_val_stars = 300;

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

document.querySelector('.top_navigation_bar_link_club').addEventListener('mouseover', () => {

	document.querySelector('.cmg_sn').style.opacity = '1';

});

document.querySelector('.top_navigation_bar_link_club').addEventListener('mouseout', () => {

	document.querySelector('.cmg_sn').style.opacity = '0';

});

document.addEventListener('DOMContentLoaded', () => {

		const parallaxElement = document.getElementById("stylish_p");
		const offset = parallaxElement.offsetTop;
	window.addEventListener('scroll', ()=> {

		let scroll_posVW = (window.scrollY / window.innerWidth) * 100;

		let parallaxOffset = scroll_posVW * -0.2;

		let scroll_pos_VW = (window.scrollY / window.innerWidth) * 100;
		parallaxElement.style.transform = `translateY(${parallaxOffset - offset}vw)`;

	});

});

let lastY;

function vw_conv(val){
return (val / window.innerWidth) * 100;
}

const div = document.getElementById("events_bar");

div.addEventListener('mouseenter', (e) => {
	lastY = vw_conv(e.clientY);
});

div.addEventListener('mousemove', (e) => {

const dy = vw_conv(e.clientY) - vw_conv(lastY);

lastY = vw_conv(e.clientY);

const style = window.getComputedStyle(div);
const matrix = new DOMMatrixReadOnly(style.transform);

const new_Y = (vw_conv(matrix.m42) + dy) - 19;
div.style.top = `${new_Y}vw`;
//console.log("newY" + new_Y);

});

document.addEventListener('scroll', function() {
    const line1 = document.getElementById('s-line_1');
    const words1 = line1.getElementsByClassName('s-word');
    const line2 = document.getElementById('s-line_2');
    const words2 = line2.getElementsByClassName('s-word');
    const line3 = document.getElementById('s-line_3');
    const words3 = line3.getElementsByClassName('s-word');
    const line4 = document.getElementById('s-line_4');
    const words4 = line4.getElementsByClassName('s-word');
    const line5 = document.getElementById('s-line_5');
    const words5 = line5.getElementsByClassName('s-word');
    const line6 = document.getElementById('s-line_6');
    const words6 = line6.getElementsByClassName('s-word');
    const line7 = document.getElementById('s-line_7');
    const words7 = line7.getElementsByClassName('s-word');
    
    // Adjust this value to where you want the animation to trigger
    const triggerScrollY_1 = 250;
    const triggerScrollY_2 = 350;
    const triggerScrollY_3 = 450;
    const triggerScrollY_4 = 550;
    const triggerScrollY_5 = 560;
    const triggerScrollY_6 = 570;
    const triggerScrollY_7 = 580; // For example, when the user has scrolled 200px
    
    if (window.scrollY > triggerScrollY_1) {
        for (let word of words1) {
            word.style.transform = 'translateY(0%)'; // Move words to original position
        }
    } else {
        for (let word of words1) {
            word.style.transform = 'translateY(100%)'; // Hide words below
        }
    }
    
    if (window.scrollY > triggerScrollY_2) {
        for (let word of words2) {
            word.style.transform = 'translateY(0%)'; // Move words to original position
        }
    } else {
        for (let word of words2) {
            word.style.transform = 'translateY(100%)'; // Hide words below
        }
    }
    
    if (window.scrollY > triggerScrollY_3) {
        for (let word of words3) {
            word.style.transform = 'translateY(0%)'; // Move words to original position
        }
    } else {
        for (let word of words3) {
            word.style.transform = 'translateY(100%)'; // Hide words below
        }
    }
    
    if (window.scrollY > triggerScrollY_4) {
        for (let word of words4) {
            word.style.transform = 'translateY(0%)'; // Move words to original position
        }
    } else {
        for (let word of words4) {
            word.style.transform = 'translateY(100%)'; // Hide words below
        }
    }
    
    if(window.scrollY > triggerScrollY_5){
    	for(let word of words5){
    		word.style.transform = 'translateY(0%)';
    	}
    } else{
    	for(let word of words5){
    		word.style.transform = 'translateY(100%)';
    	}
    }
    
    if(window.scrollY > triggerScrollY_6){
    	for(let word of words6){
    		word.style.transform = 'translateY(0%)';
    	}
    } else{
    	for(let word of words6){
    		word.style.transform = 'translateY(100%)';
    	}
    }
    
    if (window.scrollY > triggerScrollY_7) {
        for (let word of words7) {
            word.style.transform = 'translateY(0%)'; // Move words to original position
        }
    } else {
        for (let word of words7) {
            word.style.transform = 'translateY(100%)'; // Hide words below
        }
    }
    
});
