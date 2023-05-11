//выплывающее меню
const navigation = document.querySelector('.navigation'),
    hamburger = document.querySelector('.sidebar'),
    closeButton = document.querySelector('.navigation__close');

hamburger.addEventListener('click', () => {
    navigation.classList.add('active');
    hamburger.style.display = 'none'
});

closeButton.addEventListener('click', () => {
    navigation.classList.remove('active');
    hamburger.style.display = 'block';
});

const menuLink = document.querySelectorAll('.menu__link');
menuLink.forEach((el) => {
    el.addEventListener('click', function (){
        navigation.classList.remove('active');
        hamburger.style.display = 'block';
    });
});

//якорная ссылка для кнпоки
const promoLink = document.querySelector('.promo__link');
const portfolio = document.getElementById('portfolio');
promoLink.addEventListener('click', () => {
    portfolio.scrollIntoView({ behavior: 'smooth' });
});

//обработка формы на стороне клиента
$(document).ready(function(){
    $('#contacts__form').submit(function (e) {
        e.preventDefault();
        $.ajax({
            type: "POST",
            url: "mailer/smart.php",
            data: $(this).serialize()
        }).done(function() {
            $(this).find("input").val("");
            $('#contacts__form').trigger('reset');
        });
        return false;
    });
});