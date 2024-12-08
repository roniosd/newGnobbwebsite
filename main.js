
document.getElementById("menubar").onclick = () => {
    const navManu = document.getElementById("navManu");
    if (navManu.style.top === "75px") {
      navManu.style.top = "-1000px"; 
    } else {
      navManu.style.top = "75px"; 
    }
  };

  // slider show 
new Swiper(".swiper", {
  speed: 400,
  spaceBetween: 30,
  autoplay: { delay: 3000, disableOnInteraction: false},
  pagination: { el: ".swiper-pagination", clickable: !0 },
  grabCursor: true,
 
});