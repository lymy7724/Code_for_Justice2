var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
   

    this.classList.toggle("active");


    var panel = this.nextElementSibling;
    if (panel.style.display === "block") {
      panel.style.display = "none";
    } else {
      panel.style.display = "block";
    }
  });
}


const toggleBtn = document.querySelector('.toggle-button');
const links = document.querySelector('.navbar-links');
toggleBtn.addEventListener('click',function(){
    links.classList.toggle('active');
})
