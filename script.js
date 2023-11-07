let getup = document.getElementById("getup");

getup.addEventListener("click", function() {
    window.scrollTo(0, 0);
});

let vk = document.getElementById("vk");
let inst = document.getElementById("inst");
let tg = document.getElementById("tg");
let insturl = "https://instagram.com/eos_1993?igshid=MmVlMjlkMTBhMg==";

vk.addEventListener("click", function() {
    alert("Данная страница в разработке :)");
});

inst.addEventListener("click", function() {
    window.open(insturl);
});

tg.addEventListener("click", function() {
    alert("Данная страница в разработке :)");
});