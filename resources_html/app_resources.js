document.addEventListener('scroll', () => {

	console.log(scrollY);
	
	if(scrollY > 200){
	
	const heading_main_body_2 = document.getElementById("heading_main_body_2");
	heading_main_body_2.style.animation = "0.2s heading_main_body_2_anm linear forwards";
	
	}
	
	else{
	
	const heading_main_body_2 = document.getElementById("heading_main_body_2");
	heading_main_body_2.style.animation = "0.2s heading_main_body_2_anm_rev linear forwards";

	
	}
	
	if(scrollY > 450){
	
	const box1 = document.getElementById("resource_1");
	const box2 = document.getElementById("resource_2");
	const box3 = document.getElementById("resource_3");
	
	box1.style.animation = "0.2s heading_main_body_2_anm linear forwards";
	box2.style.animation = "0.2s heading_main_body_2_anm linear forwards";
	box2.style.animationDelay = "0.05s";
	box3.style.animation = "0.2s heading_main_body_2_anm linear forwards";
	box3.style.animationDelay = "0.1s";
	
	}
	
	else{
	
	const box1 = document.getElementById("resource_1");
	const box2 = document.getElementById("resource_2");
	const box3 = document.getElementById("resource_3");
	
	box1.style.animation = "0.2s heading_main_body_2_anm_rev linear forwards";
	box2.style.animation = "0.2s heading_main_body_2_anm_rev linear forwards";
	box3.style.animation = "0.2s heading_main_body_2_anm_rev linear forwards";
	
	}
	
	if(scrollY > 900){
	
	const box4 = document.getElementById("resource_4");
	const box5 = document.getElementById("resource_5");
	const box6 = document.getElementById("resource_6");
	
	box4.style.animation = "0.2s heading_main_body_2_anm linear forwards";
	box5.style.animation = "0.2s heading_main_body_2_anm linear forwards";
	box5.style.animationDelay = "0.05s";
	box6.style.animation = "0.2s heading_main_body_2_anm linear forwards";
	box6.style.animationDelay = "0.1s";
	
	}
	
	else{
	
	const box4 = document.getElementById("resource_4");
	const box5 = document.getElementById("resource_5");
	const box6 = document.getElementById("resource_6");
	
	box4.style.animation = "0.2s heading_main_body_2_anm_rev linear forwards";
	box5.style.animation = "0.2s heading_main_body_2_anm_rev linear forwards";
	box6.style.animation = "0.2s heading_main_body_2_anm_rev linear forwards";
	
	}

});
