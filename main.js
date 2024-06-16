// header
const menuBtn = document.querySelector(".menu-btn");
        const navigation = document.querySelector(".navigation");


        menuBtn.addEventListener("click",() => {
            menuBtn.classList.toggle("active");
            navigation.classList.toggle("active");
        });
    
//Project menu
let scrollContainer = document.querySelector(".gallery");
let backBtn = document.getElementById("backBtn");
let nextBtn = document.getElementById("nextBtn");

scrollContainer.addEventListener("wheel", (evt) => {
    evt.preventDefault();
    scrollContainer.scrollLeft += ent.deltaY;
    scrollContainer.style.scrollBehavior = "auto";
});

nextBtn.addEventListener("click", () => {
    scrollContainer.style.scrollBehavior = "smooth";
    scrollContainer.scrollLeft += 900;
});
backBtn.addEventListener("click", () =>{
    scrollContainer.style.scrollBehavior = "smooth";
    scrollContainer.scrollLeft -= 900;
});
