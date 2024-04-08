
let x = 0;
let y = 0;

setInterval(() => {

x = x + 1;

const cont_1 = document.getElementById(`main_img_cont_${x}`);
const cont_2 = document.getElementById(`main_img_cont_${x + 1}`);

cont_1.style.animation = "1s slider_derev forwards";
cont_2.style.animation = "1s slider_rev forwards";

console.log(x);
}, 4000);

setInterval(() => {x = 0;}, 36000);

