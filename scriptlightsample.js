window.addEventListener('scroll', function () {
    const header = document.querySelector('.header');
    if (window.scrollY > 0) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});



document.addEventListener("DOMContentLoaded", function () {
    const questions = document.querySelectorAll(".question");

    questions.forEach((question) => {
        question.addEventListener("click", function () {
            this.parentElement.classList.toggle("active");
        });
    });
});



