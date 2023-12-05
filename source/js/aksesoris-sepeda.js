const navbarMenu = document.getElementById("menu");
const burgerMenu = document.getElementById("burger");
const headerMenu = document.getElementById("header");

// Open Close Navbar Menu on Click Burger
if (burgerMenu && navbarMenu) {
   burgerMenu.addEventListener("click", () => {
      burgerMenu.classList.toggle("is-active");
      navbarMenu.classList.toggle("is-active");
   });
}

// Close Navbar Menu on Click Menu Links
document.querySelectorAll(".menu-link").forEach((link) => {
   link.addEventListener("click", () => {
      burgerMenu.classList.remove("is-active");
      navbarMenu.classList.remove("is-active");
   });
});

// Change Header Background on Scrolling
window.addEventListener("scroll", () => {
   if (this.scrollY >= 85) {
      headerMenu.classList.add("on-scroll");
   } else {
      headerMenu.classList.remove("on-scroll");
   }
});

// Fixed Navbar Menu on Window Resize
window.addEventListener("resize", () => {
   if (window.innerWidth > 768) {
      if (navbarMenu.classList.contains("is-active")) {
         navbarMenu.classList.remove("is-active");
      }
   }
});

// Promosi
const products = [
  {
    name: 'Gloves 2Pink',
    photo: 'https://hulajnogimicro.pl/media/catalog/product/cache/5/image/9df78eab33525d08d6e5fb8d27136e95/p/n/png-micro_gloves_doodle_dot_2_.png',
    brand: '2Pink',
    color: '#EB6CA4'
  },
  {
    name: 'Coach Pink',
    photo: 'https://res.cloudinary.com/yakir/image/upload/v1578887770/r69yfic0g5ndp7vkv5rb.png',
    brand: 'Coach',
    color: '#EFB2AF'
  },
  {
    name: 'Belt',
    photo: 'https://media2.bulgari.com/f_auto,q_auto/production/dw226090d9/images/images/466646.png',
    brand: 'Bvlgari',
    color: '#424242'
  }
];


