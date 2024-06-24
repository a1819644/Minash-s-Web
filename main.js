// header
const menuBtn = document.querySelector(".menu-btn");
        const navigation = document.querySelector(".navigation");


        menuBtn.addEventListener("click",() => {
            menuBtn.classList.toggle("active");
            navigation.classList.toggle("active");
        });
    
  //navbar background color change

   function changeBg(){
    var navbar = document.getElementById('navbar');
    var scrollValue = window.scrollY;
    if(scrollValue < 150){
        navbar.classList.remove('bgColor');
    } else{
        navbar.classList.add('bgColor');
    }
   
   }
   window.addEventListener('scroll',changeBg);

        
//Project menu

$('.slides').slick({
    centerMode: true,
    slidesToShow: 3,
    arrows: false, /*removed the arrow*/
    autoplay: true,
    autoplaySpeed: 2000,
    centerPadding: '0px',
    responsive: [
        {
            breakpoint: 768,
            settings: {
                arrows: false,
                centerMode: true,
                centerPadding: '40px',
                slidesToShow: 1
            }
        },
        {
            breakpoint: 480,
            settings: {
                arrows: false,
                centerMode: true,
                centerPadding: '40px',
                slidesToShow: 1
            }
        }
    ]
});


//Service menu

document.querySelectorAll('.content li').forEach(item => {
    item.addEventListener('mouseover', event => {
        const newSrc = event.target.getAttribute('data-img');
        document.getElementById('mainImage').setAttribute('src', newSrc);
    });

    item.addEventListener('mouseout', () => {
        document.getElementById('mainImage').setAttribute('src', defaultSrc);
    });
});

document.getElementById('mainImage').addEventListener('click', () => {
    const defaultSrc = document.getElementById('mainImage').getAttribute('data-default');
    document.getElementById('mainImage').setAttribute('src', 'images/Service/Framing.jpg');
})
