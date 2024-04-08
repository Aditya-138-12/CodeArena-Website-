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
});

let i = 0;

function prj_3_codefest_results(){
	i = i + 1;
	const cont = document.getElementById("prj_3_codefest");
	const btn = document.getElementById("prj_3_codefest_results_btn_p");
	const result_path = "img_3_results.jpeg";
	const normal_path = "img_3.jpeg";
	
	if(i % 2 == 1){
	cont.style.backgroundImage = `url(${result_path})`;
	btn.innerHTML = "Close";
	}
	else{
	cont.style.backgroundImage = `url(${normal_path})`;
	btn.innerHTML = "Results";
	}

}

let j = 0;
setInterval(() => {
	j = j + 1;
	const cont = document.getElementById("prj_4_interview");
	
	if(j % 2 == 1){
	cont.style.animation = "0.5s img_chng linear forwards";
	}
	else{
	cont.style.animation = "0.5s img_chng_rev linear forwards";
	}
		

}, 5000);
