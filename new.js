const slider = document.querySelector('.slider');
const slides = document.querySelectorAll('.slide');
let currentIndex = 0;

function nextSlide() {
    currentIndex++;
    if (currentIndex === slides.length) {
        currentIndex = 0;
    }
    updateSlider();
}

function prevSlide() {
    currentIndex--;
    if (currentIndex < 0) {
        currentIndex = slides.length - 1;
    }
    updateSlider();
}

function updateSlider() {
    slider.style.transform = `translateX(-${currentIndex * 100}%)`;
}

setInterval(nextSlide, 5000); // Auto-advance every 5 seconds

// Optional: Add event listeners for next/previous buttons
document.querySelector('.next-button').addEventListener('click', nextSlide);
document.querySelector('.prev-button').addEventListener('click', prevSlide);


  

//view profile 
function openDrAsela() {
  window.location.href = "Dr asela.html";
}

function openDrPradeep() {
    window.location.href = "dr pradeep.html";
}

function openDrGunendrica() {
  window.location.href = "dr wijendra.html";
}

function openMrNandana() {
  window.location.href = "Mr. Nandana.html";
}

function openMrsMihiri() {
  window.location.href = "Mrs. Mihiri.html";
}

function openDrKaneeeka() {
  window.location.href = "dr kaneeka.html";
}

function openMsKalani() {
  window.location.href = "ms kalani.html";
}

function openMrsPavithra() {
  window.location.href = "Mrs pavithra.html";
}

function openMsUwanthika() {
  window.location.href = "ms uwanthika.html";
}

function openMsDharani() {
  window.location.href = "ms dharani.html";
}

function openMskaushalaya() {
  window.location.href = "ms kaushalya.html";
}

function openMssathsara() {
  window.location.href = "ms sathsara.html";
}

//page up function
function scrollup(){
  window.location.href="#top";
}


function myFunction() {
  var x = document.getElementById("myLinks");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
}

var dropdown = document.getElementsByClassName("dropdown-btn");
var i;

for (i = 0; i < dropdown.length; i++) {
  dropdown[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var dropdownContent = this.nextElementSibling;
    if (dropdownContent.style.display === "block") {
      dropdownContent.style.display = "none";
    } else {
      dropdownContent.style.display = "block";
    }
  });
}