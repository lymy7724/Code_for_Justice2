// picture gallery on homepage 

let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("slides");
    if (n > slides.length) { slideIndex = 1 }
    if (n < 1) { slideIndex = slides.length }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    slides[slideIndex - 1].style.display = "block";
}

// sticky nav bar on homepage 

const header = document.querySelector('.nav1')
const watcher = document.createElement('div')

watcher.setAttribute('testy', '')
header.before(watcher)

const navObserver = new IntersectionObserver(() => {
    header.classList.toggle('sticking')
})

navObserver.observe(watcher)

// form validations
function validateForm() {
    let hasErrors = false;
    let errorMessage = "";
    let x = document.forms["myForm"]["flname"].value;
    let y = document.forms["myForm"]["phonenumb"].value;
    let z = document.forms["myForm"]["email"].value;

    if (!x) {
        hasErrors = true;
        // alert("Your name must be filled out");
        var element = document.getElementById("name");
        element.classList.add("error");
        errorMessage += "Your name must be filled out. ";

    }

    if (!y) {
        hasErrors = true;
        var element = document.getElementById("phone");
        element.classList.add("error");
        errorMessage += "Your phone number must be filled out. ";
        // alert("Your phone number must be filled out");

    }

    // optional chaining -> ?
    if (!(y?.includes("(") && y?.includes(")") && y?.includes("-"))) {
        hasErrors = true;
        var element = document.getElementById("email");
        element.classList.add("error");
        errorMessage += "Phone number must be in the correct format. "
    }

    if (!z) {
        hasErrors = true;
        var element = document.getElementById("name");
        element.classList.add("error");
        errorMessage += "Your email must be filled out. ";
        // alert("Your email must be filled out")

    };

    if (hasErrors) {
        alert(errorMessage);
        return false;
    }
    return true;
};







/*
const fp = document.getElementById('time');

fp.addEventListener('input', event => {
    if (fp.validity) {
        fp.setCustomValidity('Custom message: greater than 100 not allowed.');
    } else {
        fp.setCustomValidity('');
    }
});
*/