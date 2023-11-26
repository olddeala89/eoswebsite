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


//Код отправки формы
document.getElementById('contactForm').addEventListener('submit', function (event) {
    event.preventDefault(); // Предотвратить отправку формы по умолчанию

    // Получаем значения из полей ввода
    var name = document.getElementById('name').value;
    var phone = document.getElementById('phone').value;

    // Ваша логика обработки данных
    //Валидация
    if (name.length >= 3 && ((phone[0] == '+' && phone[1] == '7' && phone.length == 12) || (phone[0] == '8' && phone.length == 11)) ) {
        console.log('Имя:', name);
        console.log('Номер телефона:', phone);
    }
    else {
        alert('Введите корректные данные');
    }
    //console.log('Имя:', name);
    //console.log('Номер телефона:', phone);

    // Дополнительные действия, например, отправка данных на сервер
    // ...

    // Очистка полей формы (если необходимо)
    document.getElementById('name').value = '';
    document.getElementById('phone').value = '';
});