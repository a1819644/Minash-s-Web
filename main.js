// header
const menuBtn = document.querySelector(".menu-btn");
        const navigation = document.querySelector(".navigation");


        menuBtn.addEventListener("click",() => {
            menuBtn.classList.toggle("active");
            navigation.classList.toggle("active");
        });
    
//Project menu

let currentSlide = 0;
const totalSlides = document.querySelectorAll('.slide-box').length;
const visibleSlides = 3; // Number of slides to show at a time

function showSlide(index) {
    currentSlide = (index + totalSlides) % totalSlides;

    // Calculate the transform value based on currentSlide and visibleSlides
    const transformValue = -currentSlide * (100 / visibleSlides);
    document.querySelector('.slides').style.transform = `translateX(${transformValue}%)`;

    // Update button visibility
    updateButtonVisibility();
}

function showNextSlide() {
    showSlide(currentSlide + 1);
}

function showPrevSlide() {
    showSlide(currentSlide - 1);
}

function updateButtonVisibility() {
    const prevButton = document.querySelector('.nav.prev');
    const nextButton = document.querySelector('.nav.next');

    // Show or hide previous and next buttons based on currentSlide
    prevButton.style.visibility = 'visible'; // Show previous button otherwise
    nextButton.style.visibility = 'visible'; // Show next button otherwise
    
}

// Optional: Automatic slideshow
// setInterval(showNextSlide, 3000); // Uncomment to enable automatic slideshow

// Initial update of button visibility
updateButtonVisibility();

//Service menu
