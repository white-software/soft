const accordionButtons = document.querySelectorAll('.uk-accordion-title');

accordionButtons.forEach((e) => {
    e.addEventListener('click', (el) => {
        el.preventDefault();
        el.target.classList.toggle("active");
        el.target.nextElementSibling.classList.toggle("active");
        if (el.target.nextElementSibling.hidden === true){
            el.target.nextElementSibling.hidden = false;
        } else {
            el.target.nextElementSibling.hidden = true;
        }
        
    });
});

const openDialog = (id) => {
    console.log(id);
    if (id === "universal") {
        window.location.href = 'https://github.com/white-software/www/raw/master/Setup.rar';

    }
}