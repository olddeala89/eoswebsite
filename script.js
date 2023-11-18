//Get up function
let getup = document.getElementById("getup");
getup.addEventListener("click", function() {
    window.scrollTo(0, 0);
});
//Social links
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

//Modal
let modal = document.getElementById('myModal');
let closeModalBtn = document.getElementById('closeModalBtn');
function showModal() {
    modal.style.display = 'block';
}
closeModalBtn.addEventListener('click', function () {
    modal.style.display = 'none';
});
window.addEventListener('click', function (event) {
    if (event.target == modal) {
        modal.style.display = 'none';
    }
});
let submitBtn = document.getElementById('submitBtn');
submitBtn.addEventListener('click', function () {
    // Добавьте здесь код для обработки отправки формы
    // Например, отправка данных на сервер с использованием AJAX
    alert('Форма отправлена!');
    modal.style.display = 'none';
});